import { methods } from "./functions";

let { repeat, minmax } = methods;
export let cols = <N extends number>(n: N) => ({
  gridTemplateColumns: repeat(n, minmax(0, "1fr")),
});
