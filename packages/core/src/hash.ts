import { Style } from './types';

export let hash = (rule: Style) => rule.at + rule.sel + rule.prop + rule.val + rule.i;
