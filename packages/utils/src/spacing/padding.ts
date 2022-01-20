type R<A, B = A, C = A, D = B> = {
  paddingTop: A;
  paddingRight: B;
  paddingBottom: C;
  paddingLeft: D;
};

type Padding = {
  <A>(v1: A): R<A>;
  <A, B>(v1: A, v2: B): R<A, B>;
  <A, B, C, D>(v1: A, v2: B, v3: C, v4: D): R<A, B, C, D>;
};

let padding: Padding = (a: any, b = a, c = a, d = b) => ({
  paddingTop: a,
  paddingRight: b,
  paddingBottom: c,
  paddingLeft: d,
});
