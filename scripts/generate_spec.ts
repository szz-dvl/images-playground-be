import { stringify } from "yaml";

export const SharpValidKeys = [
  { key: "create.width", type: "number" },
  { key: "create.height", type: "number" },
  { key: "create.channels", type: "number" },
  { key: "create.background", type: "string", pattern: "^#[0-9A-F]{6}$" },
  { key: "create.noise.type", type: "string", enum: ["gaussian"] },
  { key: "create.noise.mean", type: "number" },
  { key: "create.noise.sigma", type: "number" },

  { key: "text.width", type: "number" },
  { key: "text.height", type: "number" },
  { key: "text.text", type: "string" },
  { key: "text.font", type: "string" },
  { key: "text.fontfile", type: "string" },
  { key: "text.align", type: "string", enum: ["left", "center", "right"] },
  { key: "text.justify", type: "boolean" },
  { key: "text.dpi", type: "number" },
  { key: "text.spacing", type: "number" },
  {
    key: "text.wrap",
    type: "string",
    enum: ["word", "word-char", "char", "none"],
  },

  { key: "resize.width", type: "number" },
  { key: "resize.height", type: "number" },
  {
    key: "resize.fit",
    type: "string",
    enum: ["cover", "contain", "fill", "inside", "outside"],
  },
  {
    key: "resize.position",
    type: "string",
    enum: [
      "top",
      "right top",
      "right",
      "right bottom",
      "bottom",
      "left bottom",
      "left",
      "left top",
    ],
  },
  { key: "resize.background", type: "string", pattern: "^#[0-9A-F]{6}$" },
  {
    key: "resize.kernel",
    type: "string",
    enum: ["nearest", "linear", "cubic", "mitchell", "lanczos2", "lanczos3"],
  },
  { key: "resize.withoutEnlargement", type: "boolean" },
  { key: "resize.withoutReduction", type: "boolean" },
  { key: "resize.fastShrinkOnLoad", type: "boolean" },

  { key: "extend", type: "number" },
  { key: "extend.top", type: "number" },
  { key: "extend.left", type: "number" },
  { key: "extend.bottom", type: "number" },
  { key: "extend.right", type: "number" },
  {
    key: "extend.extendWith",
    type: "string",
    enum: ["background", "copy", "repeat", "mirror"],
  },
  { key: "extend.background", type: "string", pattern: "^#[0-9A-F]{6}$" },

  { key: "extract.top", type: "number" },
  { key: "extract.left", type: "number" },
  { key: "extract.width", type: "number" },
  { key: "extract.height", type: "number" },

  { key: "extractAfter.top", type: "number" },
  { key: "extractAfter.left", type: "number" },
  { key: "extractAfter.width", type: "number" },
  { key: "extractAfter.height", type: "number" },

  { key: "trim", type: "boolean" },
  { key: "trim.background", type: "string", pattern: "^#[0-9A-F]{6}$" },
  { key: "trim.threshold", type: "number" },
  { key: "trim.lineArt", type: "boolean" },

  { key: "rotate", type: "number" },
  { key: "rotate.background", type: "string", pattern: "^#[0-9A-F]{6}$" },

  { key: "rotateAfter", type: "number" },
  { key: "rotateAfter.background", type: "string", pattern: "^#[0-9A-F]{6}$" },

  { key: "flip", type: "boolean" },

  { key: "flop", type: "boolean" },

  {
    key: "affine",
    type: "array",
    items: { type: "number" },
    maxItems: 4,
    minItems: 4,
  },
  { key: "affine.background", type: "string", pattern: "^#[0-9A-F]{6}$" },
  { key: "affine.idx", type: "number" },
  { key: "affine.idy", type: "number" },
  { key: "affine.odx", type: "number" },
  { key: "affine.ody", type: "number" },
  {
    key: "affine.interpolator",
    type: "string",
    enum: ["nearest", "bilinear", "bicubic", "lbb", "nohalo", "vsqbs"],
  },

  { key: "sharpen", type: "boolean" },
  { key: "sharpen.sigma", type: "number" },
  { key: "sharpen.m1", type: "number" },
  { key: "sharpen.m2", type: "number" },
  { key: "sharpen.x1", type: "number" },
  { key: "sharpen.y2", type: "number" },
  { key: "sharpen.y3", type: "number" },

  { key: "median", type: "number" },

  { key: "blur", type: "number" },

  { key: "flatten", type: "boolean" },
  { key: "flatten.background", type: "string", pattern: "^#[0-9A-F]{6}$" },

  { key: "unflatten", type: "boolean" },

  {
    key: "gamma",
    type: [
      { type: "number" },
      { type: "array", items: { type: "number" }, maxItems: 2, minItems: 2 },
    ],
  },

  { key: "negate", type: "boolean" },
  { key: "negate.alpha", type: "boolean" },

  { key: "normalise", type: "boolean" },
  { key: "normalise.upper", type: "number" },
  { key: "normalise.lower", type: "number" },
  { key: "normalize", type: "boolean" },
  { key: "normalize.upper", type: "number" },
  { key: "normalize.lower", type: "number" },

  { key: "clahe.width", type: "number" },
  { key: "clahe.height", type: "number" },
  { key: "clahe.maxSlope", type: "number" },

  { key: "convolve.width", type: "number" },
  { key: "convolve.height", type: "number" },
  { key: "convolve.kernel", type: "array", items: { type: "number" } },
  { key: "convolve.scale", type: "number" },
  { key: "convolve.offset", type: "number" },

  { key: "threshold", type: "number" },
  { key: "threshold.greyscale", type: "boolean" },
  { key: "threshold.grayscale", type: "boolean" },

  { key: "boolean.operand", type: "string" },
  { key: "boolean.operator", type: "string", enum: ["and", "or", "eor"] },

  {
    key: "linear.a",
    type: [{ type: "number" }, { type: "array", items: { type: "number" } }],
  },
  {
    key: "linear.b",
    type: [{ type: "number" }, { type: "array", items: { type: "number" } }],
  },

  {
    key: "recomb.0",
    type: "array",
    items: { type: "number" },
    maxItems: 3,
    minItems: 3,
  },
  {
    key: "recomb.1",
    type: "array",
    items: { type: "number" },
    maxItems: 3,
    minItems: 3,
  },
  {
    key: "recomb.2",
    type: "array",
    items: { type: "number" },
    maxItems: 3,
    minItems: 3,
  },

  { key: "modulate.brightness", type: "number" },
  { key: "modulate.saturation", type: "number" },
  { key: "modulate.hue", type: "number" },
  { key: "modulate.lightness", type: "number" },

  { key: "tint", type: "string", pattern: "^#[0-9A-F]{6}$" },

  { key: "greyscale", type: "boolean" },
  { key: "grayscale", type: "boolean" },

  {
    key: "pipelineColorspace",
    type: "string",
    enum: [
      "multiband",
      "b-w",
      "histogram",
      "xyz",
      "lab",
      "cmyk",
      "labq",
      "rgb",
      "cmc",
      "lch",
      "labs",
      "srgb",
      "yxy",
      "fourier",
      "rgb16",
      "grey16",
      "matrix",
      "scrgb",
      "hsv",
    ],
  },
  {
    key: "pipelineColourspace",
    type: "string",
    enum: [
      "multiband",
      "b-w",
      "histogram",
      "xyz",
      "lab",
      "cmyk",
      "labq",
      "rgb",
      "cmc",
      "lch",
      "labs",
      "srgb",
      "yxy",
      "fourier",
      "rgb16",
      "grey16",
      "matrix",
      "scrgb",
      "hsv",
    ],
  },

  {
    key: "toColorspace",
    type: "string",
    enum: [
      "multiband",
      "b-w",
      "histogram",
      "xyz",
      "lab",
      "cmyk",
      "labq",
      "rgb",
      "cmc",
      "lch",
      "labs",
      "srgb",
      "yxy",
      "fourier",
      "rgb16",
      "grey16",
      "matrix",
      "scrgb",
      "hsv",
    ],
  },
  {
    key: "toColourspace",
    type: "string",
    enum: [
      "multiband",
      "b-w",
      "histogram",
      "xyz",
      "lab",
      "cmyk",
      "labq",
      "rgb",
      "cmc",
      "lch",
      "labs",
      "srgb",
      "yxy",
      "fourier",
      "rgb16",
      "grey16",
      "matrix",
      "scrgb",
      "hsv",
    ],
  },

  { key: "removeAlpha", type: "boolean" },

  { key: "ensureAlpha", type: "number", default: "1" },

  {
    key: "extractChannel",
    type: "string",
    enum: ["0", "1", "2", "3", "red", "green", "blue", "alpha"],
  },

  {
    key: "joinChannel",
    type: [{ type: "string" }, { type: "array", items: { type: "string" } }],
  },

  { key: "bandbool", type: "string", enum: ["and", "or", "eor"] },

  { key: "custom", type: "string" },
  { key: "customAfter", type: "string" },
];

const params: Array<any> = [];

for (const { key, type, ...rest } of SharpValidKeys) {
  let param = {
    in: "query",
    name: key,
    schema: {} as any,
  };

  if (Array.isArray(type)) {
    param.schema.oneOf = [];

    for (const { type: tp, ...rest } of type) {
      param.schema.oneOf.push({
        type: tp,
        ...rest,
      });
    }
  } else {
    param.schema = { type, ...rest };
  }

  params.push(param);
}

console.log(stringify(params));
