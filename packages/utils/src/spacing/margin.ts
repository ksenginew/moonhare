type R<A, B = A, C = A, D = B> = {
    marginTop: A;
    marginRight: B;
    marginBottom: C;
    marginLeft: D;
  };
  
  type Margin = {
    <A>(v1: A): R<A>;
    <A, B>(v1: A, v2: B): R<A, B>;
    <A, B, C, D>(v1: A, v2: B, v3: C, v4: D): R<A, B, C, D>;
  };
  
  let margin: Margin = (a: any, b = a, c = a, d = b) => ({
    marginTop: a,
    marginRight: b,
    marginBottom: c,
    marginLeft: d,
  });
  