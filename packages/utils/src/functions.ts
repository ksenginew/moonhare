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

let matrix = FN("matrix");
let matrix3d = FN("matrix3d");
let perspective = FN("perspective");
let rotate = FN("rotate");
let rotate3d = FN("rotate3d");
let rotatex = FN("rotatex");
let rotatey = FN("rotatey");
let rotatez = FN("rotatez");
let scale = FN("scale");
let scale3d = FN("scale3d");
let scalex = FN("scalex");
let scaley = FN("scaley");
let scalez = FN("scalez");
let skew = FN("skew");
let skewx = FN("skewx");
let skewy = FN("skewy");
let translate = FN("translate");
let translate3d = FN("translate3d");
let translatex = FN("translatex");
let translatey = FN("translatey");
let translatez = FN("translatez");
let calc = FN("calc");
let clamp = FN("clamp");
let max = FN("max");
let min = FN("min");
let Blur = FN("blur");
let brightness = FN("brightness");
let contrast = FN("contrast");
let dropShadow = FN("drop-shadow");
let grayscale = FN("grayscale");
let hueRotate = FN("hue-rotate");
let invert = FN("invert");
let opacity = FN("opacity");
let saturate = FN("saturate");
let sepia = FN("sepia");
let hsl = FN("hsl");
let hsla = FN("hsla");
let rgb = FN("rgb");
let rgba = FN("rgba");
let conicGradient = FN("conic-gradient");
let linearGradient = FN("linear-gradient");
let radialGradient = FN("radial-gradient");
let repeatingLinearGradiant = FN("repeating-linear-gradiant");
let repeatingRadialGradient = FN("repeating-radial-gradient");
let repeatConicGradiant = FN("repeat-conic-gradiant");
let crossFade = FN("cross-fade");
let element = FN("element");
let paint = FN("paint");
let counter = FN("counter");
let counters = FN("counters");
let symbols = FN("symbols");
let stylistic = FN("stylistic");
let styleset = FN("styleset");
let characterVariant = FN("character-variant");
let swash = FN("swash");
let ornaments = FN("ornaments");
let annotation = FN("annotation");
let circle = FN("circle");
let ellipse = FN("ellipse");
let inset = FN("inset");
let polygon = FN("polygon");
let path = FN("path");
let attr = FN("attr");
let env = FN("env");
let url = FN("url");
let Var = FN("var");
let fitContent = FN("fit-content");
let minmax = FN("minmax");
let repeat = FN("repeat");

export {
  FN,
  matrix,
  matrix3d,
  perspective,
  rotate,
  rotate3d,
  rotatex,
  rotatey,
  rotatez,
  scale,
  scale3d,
  scalex,
  scaley,
  scalez,
  skew,
  skewx,
  skewy,
  translate,
  translate3d,
  translatex,
  translatey,
  translatez,
  calc,
  clamp,
  max,
  min,
  Blur,
  brightness,
  contrast,
  dropShadow,
  grayscale,
  hueRotate,
  invert,
  opacity,
  saturate,
  sepia,
  hsl,
  hsla,
  rgb,
  rgba,
  conicGradient,
  linearGradient,
  radialGradient,
  repeatingLinearGradiant,
  repeatingRadialGradient,
  repeatConicGradiant,
  crossFade,
  element,
  paint,
  counter,
  counters,
  symbols,
  stylistic,
  styleset,
  characterVariant,
  swash,
  ornaments,
  annotation,
  circle,
  ellipse,
  inset,
  polygon,
  path,
  attr,
  env,
  url,
  Var,
  fitContent,
  minmax,
  repeat,
};
