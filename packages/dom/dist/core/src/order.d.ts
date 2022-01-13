declare let selectorOrder: string[];
declare let atRuleOrder: string[];
declare let getSelectorScore: (selector: string, selOrder: (string | RegExp)[]) => number;
declare let getAtRuleScore: (atRules: string[], atOrder: (string | RegExp)[]) => number;
export { getSelectorScore, getAtRuleScore, selectorOrder, atRuleOrder };
