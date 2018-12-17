import { Reducer } from 'redux';
import { ActionKeywords, CHANGE_KEYWORDS } from './actions';

export const keywords: Reducer<string> = (
  state = '',
  { type, keywords }: ActionKeywords
) => {
  return type === CHANGE_KEYWORDS ? keywords : state;
};
