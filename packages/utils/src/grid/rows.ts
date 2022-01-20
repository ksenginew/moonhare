import { repeat, minmax } from "./functions";

export let crowsols = <N extends number>(n: N) => ({
  gridTemplateRows: repeat(n, minmax(0, "1fr")),
});
