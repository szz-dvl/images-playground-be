import express, { NextFunction, Request, Response } from "express";
import * as OpenApiValidator from "express-openapi-validator";
import { load } from "js-yaml";
import { spec } from "./spec";
import swaggerUi from "swagger-ui-express";
import ImagesRouter from "./routes/images";
import { join } from "node:path";
import { ImageEffect, Images } from "@szz_dev/images";
import cors from "cors";

const images = new Images({
  dir: join(__dirname, "..", "uploads"),
  url: {
    prefix: "/image",
    pattern: "/:dir/:size/:file.:ext",
  },
  allowedSizes: "*",
  allowedFormats: "*",
  allowedEffects: {
    /** Resize */
    [ImageEffect.EXTEND]: 1,
    [ImageEffect.EXTRACT]: 1,
    [ImageEffect.TRIM]: 1,

    /** Operations */
    [ImageEffect.ROTATE]: 1,
    [ImageEffect.FLIP]: 1,
    [ImageEffect.FLOP]: 1,
    [ImageEffect.AFFINE]: 1,
    [ImageEffect.SHARPEN]: 1,
    [ImageEffect.MEDIAN]: 1,
    [ImageEffect.BLUR]: 1,
    [ImageEffect.FLATTEN]: 1,
    [ImageEffect.UNFLATTEN]: 1,
    [ImageEffect.GAMMA]: 1,
    [ImageEffect.NEGATE]: 1,
    [ImageEffect.NORMALISE]: 1,
    [ImageEffect.CLAHE]: 1,
    [ImageEffect.CONVOLVE]: 1,
    [ImageEffect.THRESHOLD]: 1,
    [ImageEffect.BOOLEAN]: 1,
    [ImageEffect.LINEAR]: 1,
    [ImageEffect.RECOMB]: 1,
    [ImageEffect.MODULATE]: 1,

    /** Color */
    [ImageEffect.TINT]: 1,
    [ImageEffect.GRAYSCALE]: 1,
    [ImageEffect.PIPELINECOLORSPACE]: 1,
    [ImageEffect.TOCOLORSPACE]: 1,

    /** Channel */
    [ImageEffect.REMOVEALPHA]: 1,
    [ImageEffect.ENSUREALPHA]: 1,
    [ImageEffect.EXTRACTCHANNEL]: 1,
    [ImageEffect.JOINCHANNEL]: 1,
    [ImageEffect.BANDBOOL]: 1,

    [ImageEffect.CUSTOM]: 2,
  },
  allowGenerated: true,
  allowComposition: true,
  sharp: {
    failOn: "warning",
    pages: -1, /** Consider all the pages for multi-page images */
    limitInputPixels: 268402689,
    unlimited: false,
    sequentialRead: true,
    density: 72,
    ignoreIcc: false,
    page: 0,
    subifd: -1,
    level: 0,
    animated: true, /** Same as above */
  },
  limits: {
    width: 1920,
    height: 1080,
  },
  hashCacheNames: true,
  logs: true,
  timeout: 5000,
  customEffects: {
    sepia: (sharp, _opts) => {
      sharp.recomb([
        [0.3588, 0.7044, 0.1368],
        [0.299, 0.587, 0.114],
        [0.2392, 0.4696, 0.0912],
      ]);
    },
  },
  publicCacheNames: true,
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();

const swaggerDocument = load(spec) as any;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  OpenApiValidator.middleware({
    apiSpec: swaggerDocument,
    validateRequests: true,
    validateResponses: false,
    validateSecurity: true,
  }),
);

app.use(cors());
app.use("/image", ImagesRouter);

app.use(async (req, res, next) => {
  console.log("Return: ", await images.middleware.bind(images)(req, res, next));
});

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err);
  return res.status(500).json({ error: err.cause || err });
}
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
