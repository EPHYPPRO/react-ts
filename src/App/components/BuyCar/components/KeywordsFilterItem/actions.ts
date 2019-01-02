import { ActionCreator } from 'redux';
import { Action } from 'src/store/models/action-types';

export const CHANGE_KEYWORDS = 'CHANGE_KEYWORDS';

export type ActionKeywords = Action<{ keywords: string }>;

export const changeKeywords: ActionCreator<ActionKeywords> = (
  keywords: string
) => ({
  type: CHANGE_KEYWORDS,
  keywords
});
