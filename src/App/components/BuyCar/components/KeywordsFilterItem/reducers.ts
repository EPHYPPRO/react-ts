import { Reducer } from 'redux';
import { ActionKeywords, CHANGE_KEYWORDS } from './actions';

export const keywords: Reducer<string, ActionKeywords> = (
  state = '',
  { type, keywords }
) => {
  return type === CHANGE_KEYWORDS ? keywords : state;
};
