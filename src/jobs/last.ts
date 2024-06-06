import { CronJob } from "cron";
import { Glob } from "glob";
import { basename, join } from "node:path";
import { broadcast } from "../spec/websocket";
import { map } from "lodash";

const MINUTES = 3000 * 60 * 1000;
const AMOUNT = 30;

const getPublicName = (localname: string) => {
  let part = localname.split("/uploads").pop()!;
  const filename = basename(part);

  part = part.replace(/\/\d+x{1}\d+\//, "").replace(filename, "");

  return join(part, "300x420", filename);
};

export default new CronJob(
  "*/30 * * * * *", // cronTime
  async function () {
    const candidates = [];

    for await (const file of new Glob(
      [
        join(__dirname, "..", "..", "uploads", "**", "*"),
        join(__dirname, "..", "..", "uploads", ".cache", "*"),
      ],
      { stat: true, withFileTypes: true, ignore: [ ".cache/**" ] }
    ).iterate()) {
      if (file.isFile() && file.mtime) {
        const diff = Date.now() - file.mtime.getTime();

        if (diff <= MINUTES) {
          candidates.push(file.fullpath());
        }

        if (candidates.length >= AMOUNT) break;
      }
    }

    broadcast(map(candidates, getPublicName));
  }, // onTick
  null, // onComplete
  true, // start
  "Etc/UTC" // timeZone
);
