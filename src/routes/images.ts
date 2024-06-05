import express from "express";
import { createWriteStream } from "fs";
import md5 from "md5";
import { basename, extname, join } from "node:path";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const files = req.files as Array < Express.Multer.File >
  const file = files[0];

  const filename = md5(new Date().toISOString() + basename(file.originalname));
  const writeable = createWriteStream(join(__dirname, "..", "..", "uploads", `${filename}${extname(file.originalname)}`));

  writeable.write(file.buffer);
  writeable.close();

  writeable.on("close", () => {
    res.status(200).json({ filename: `${filename}${extname(file.originalname)}` });
  })

  writeable.on("error", (err) => {
    next(err)
  })
});

export default router;
