type Primitives = string | number | bigint | boolean | null | undefined;

export let aspect = <A extends Primitives, B extends Primitives>(
  v1: A,
  v2: B
) => {
  return (v1 + "/" + v2) as `${A}/${B}`;
};
