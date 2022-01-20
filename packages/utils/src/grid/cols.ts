import { repeat, minmax } from "./functions";

export let cols = <N extends number>(n: N) => ({
  gridTemplateColumns: repeat(n, minmax(0, "1fr")),
});
