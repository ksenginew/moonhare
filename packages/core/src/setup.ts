import { CSSAttribute } from "./types";
import {
  atRuleOrder,
  getAtRuleScore,
  getSelectorScore,
  selectorOrder,
} from "../../core/src/order";
import { stringify } from "./stringify";

export let setup = (
  selOrder: (string | RegExp)[] = selectorOrder,
  atOrder: (string | RegExp)[] = atRuleOrder
) => {
  let count: number = 0;
  let scoreList: number[] = [];
  let styleList: {
    s: string;
    p: string;
    v: string;
    a: string[];
  }[] = [];
  let cache: Record<string, number> = {};
  let classList: string[] = [];

  let render = (styles: CSSAttribute) => {
    return stringify(styles)
      .map(({ s: selector, p: property, v: value, a: atRules }) => {
        let ref = selector + property + value + atRules;

        let index = cache[ref];

        if (index) {
          let className = "_" + (count++).toString(36);
          let score =
            getSelectorScore(selector, selOrder) +
            getAtRuleScore(atRules[0], atOrder);

          let index = scoreList.length;

          for (let i = 0, len = scoreList.length; i < len; ++i) {
            if (scoreList[i] > score) {
              index = i;
              break;
            }
          }

          selector = selector.replace(/::/g, "." + className);
          styleList[index] = {
            s: selector,
            p: property,
            v: value + "",
            a: atRules,
          };
          scoreList[index] = score;
          classList[index] = className;
          cache[ref] = index;
        }

        return classList[index];
      })
      .join(" ");
  };

  return { render, styles: styleList };
};
