import { keywords } from '../reducers';
import { changeKeywords } from '../actions';
import fake from 'casual';
import { testForInitialAndCurrentState } from 'test-utils/store/reducers';

describe('keywords reducer', () => {
  testForInitialAndCurrentState(keywords, '', fake.title);

  it('should handle CHANGE_KEYWORDS action', async () => {
    const keywordsFake = fake.title;

    expect(keywords(undefined, changeKeywords(keywordsFake))).toEqual(
      keywordsFake
    );
  });
});
