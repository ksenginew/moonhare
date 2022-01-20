type Primitives = string | number | bigint | boolean | null | undefined;

type Func<N extends string> = {
  <A extends Primitives>(a: A): `${N}(${A})`;
  <A extends Primitives, B extends Primitives>(a: A, b: B): `${N}(${A},${B})`;
  <A extends Primitives, B extends Primitives, C extends Primitives>(
    a: A,
    b: B,
    c: C
  ): `${N}(${A},${B},${C})`;
  <
    A extends Primitives,
    B extends Primitives,
    C extends Primitives,
    D extends Primitives
  >(
    a: A,
    b: B,
    c: C,
    d: D
  ): `${N}(${A},${B},${C},${D})`;
  <
    A extends Primitives,
    B extends Primitives,
    C extends Primitives,
    D extends Primitives,
    E extends Primitives
  >(
    a: A,
    b: B,
    c: C,
    d: D,
    e: E
  ): `${N}(${A},${B},${C},${D},${E})`;
};

let FN = <N extends string>(name: N) =>
  ((...args: any[]) => name + "(" + args.join() + ")") as Func<N>;

export let methods: {
  matrix: Func<"matrix">;
  matrix3d: Func<"matrix3d">;
  perspective: Func<"perspective">;
  rotate: Func<"rotate">;
  rotate3d: Func<"rotate3d">;
  rotatex: Func<"rotatex">;
  rotatey: Func<"rotatey">;
  rotatez: Func<"rotatez">;
  scale: Func<"scale">;
  scale3d: Func<"scale3d">;
  scalex: Func<"scalex">;
  scaley: Func<"scaley">;
  scalez: Func<"scalez">;
  skew: Func<"skew">;
  skewx: Func<"skewx">;
  skewy: Func<"skewy">;
  translate: Func<"translate">;
  translate3d: Func<"translate3d">;
  translatex: Func<"translatex">;
  translatey: Func<"translatey">;
  translatez: Func<"translatez">;
  calc: Func<"calc">;
  clamp: Func<"clamp">;
  max: Func<"max">;
  min: Func<"min">;
  abs: Func<"abs">;
  acos: Func<"acos">;
  asin: Func<"asin">;
  atan: Func<"atan">;
  atan2: Func<"atan2">;
  cos: Func<"cos">;
  exp: Func<"exp">;
  hypot: Func<"hypot">;
  log: Func<"log">;
  mod: Func<"mod">;
  pow: Func<"pow">;
  rem: Func<"rem">;
  round: Func<"round">;
  sign: Func<"sign">;
  sin: Func<"sin">;
  sqrt: Func<"sqrt">;
  tan: Func<"tan">;
  blur: Func<"blur">;
  brightness: Func<"brightness">;
  contrast: Func<"contrast">;
  dropShadow: Func<"drop-shadow">;
  grayscale: Func<"grayscale">;
  hueRotate: Func<"hue-rotate">;
  invert: Func<"invert">;
  opacity: Func<"opacity">;
  saturate: Func<"saturate">;
  sepia: Func<"sepia">;
  color: Func<"color">;
  colorMix: Func<"color-mix">;
  colorContrast: Func<"color-contrast">;
  deviceCmyk: Func<"device-cmyk">;
  hsl: Func<"hsl">;
  hsla: Func<"hsla">;
  hwb: Func<"hwb">;
  lab: Func<"lab">;
  lch: Func<"lch">;
  rgb: Func<"rgb">;
  rgba: Func<"rgba">;
  conicGradient: Func<"conic-gradient">;
  image: Func<"image">;
  imageSet: Func<"image-set">;
  linearGradient: Func<"linear-gradient">;
  radialGradient: Func<"radial-gradient">;
  repeatingLinearGradiant: Func<"repeating-linear-gradiant">;
  repeatingRadialGradient: Func<"repeating-radial-gradient">;
  repeatConicGradiant: Func<"repeat-conic-gradiant">;
  crossFade: Func<"cross-fade">;
  element: Func<"element">;
  paint: Func<"paint">;
  counter: Func<"counter">;
  counters: Func<"counters">;
  symbols: Func<"symbols">;
  stylistic: Func<"stylistic">;
  styleset: Func<"styleset">;
  characterVariant: Func<"character-variant">;
  swash: Func<"swash">;
  ornaments: Func<"ornaments">;
  annotation: Func<"annotation">;
  circle: Func<"circle">;
  ellipse: Func<"ellipse">;
  inset: Func<"inset">;
  polygon: Func<"polygon">;
  path: Func<"path">;
  attr: Func<"attr">;
  env: Func<"env">;
  url: Func<"url">;
  Var: Func<"var">;
  fitContent: Func<"fit-content">;
  minmax: Func<"minmax">;
  repeat: Func<"repeat">;
} = new Proxy(
  {},
  {
    get(_, name) {
      return FN(name as string);
    },
  }
) as any;
