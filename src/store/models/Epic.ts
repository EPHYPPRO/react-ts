import { Epic as ObsEpic } from 'redux-observable';
import { State } from './State';
import { Dependencies } from './Dependencies';
import { Action } from './action-types';

export type Epic<
  I extends Action = Action,
  O extends Action = Action
> = ObsEpic<
  I,
  /**
   * Output event type shouldn't be Input event like,
   * there is wrong decision to make like that for
   * redux-observable lib
   */
  O,
  State,
  Dependencies
>;
