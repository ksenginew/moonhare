type R<A, B = A, C = A, D = B> = {
  top: A;
  right: B;
  bottom: C;
  left: D;
};

type Inset = {
  <A>(v1: A): R<A>;
  <A, B>(v1: A, v2: B): R<A, B>;
  <A, B, C, D>(v1: A, v2: B, v3: C, v4: D): R<A, B, C, D>;
};

let inset: Inset = (a: any, b = a, c = a, d = b) => ({
  top: a,
  right: b,
  bottom: c,
  left: d,
});
