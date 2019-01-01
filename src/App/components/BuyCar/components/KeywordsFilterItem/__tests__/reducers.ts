import { keywords } from '../reducers';
import { changeKeywords } from '../actions';
import fake from 'casual';

describe('keywords reducer', () => {
  it(`should return the initial state when no state and unknown action provided,
      and should return the provided state when unknown action provided`, async () => {
    const action = { type: 'UNKNOWN_ACTION', keywords: '' };
    const state = fake.title;

    expect(keywords(undefined, action)).toEqual('');
    expect(keywords(state, action)).toEqual(state);
  });

  it('should handle CHANGE_KEYWORDS action', async () => {
    const keywordsFake = fake.title;

    expect(keywords(undefined, changeKeywords(keywordsFake))).toEqual(
      keywordsFake
    );
  });
});
