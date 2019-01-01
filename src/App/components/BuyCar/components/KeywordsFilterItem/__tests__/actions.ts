import {
  CHANGE_KEYWORDS,
  changeKeywords,
  ActionKeywords
} from '../actions';
import fake from 'casual';

describe('changeKeywords action creator', () => {
  it('should create an action to change keywords', async () => {
    const keywords = fake.title;
    const expectedAction: ActionKeywords = {
      type: CHANGE_KEYWORDS,
      keywords
    };

    expect(changeKeywords(keywords)).toEqual(expectedAction);
  });
});
