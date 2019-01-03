import { models, selectedModelId } from '../reducers';
import {
  selectModel,
  requestModels,
  receiveModels,
  errorModels
} from '../actions';
import fake from 'casual';
import { testForInitialAndCurrentState } from 'test-utils/store/reducers';
import { ListState } from 'src/store/models/ListState';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';

describe('ModelFilterItem reducers', () => {
  describe('selectedModelId', () => {
    testForInitialAndCurrentState(
      selectedModelId,
      -1,
      fake.integer()
    );

    it('should return id as a state when valid action with id passed', async () => {
      const fakeId = fake.integer(1);

      expect(
        selectedModelId(fake.integer(1), selectModel(fakeId))
      ).toEqual(fakeId);
    });
  });

  describe('models', () => {
    const items = [new FakeSelectItem(), new FakeSelectItem()];

    testForInitialAndCurrentState(
      models,
      new ListState(),
      new ListState({
        items,
        isLoading: true,
        error: true
      })
    );

    describe('should return appropriate state when', () => {
      it('fetching action passed', async () => {
        const expectedState = new ListState({
          isLoading: true,
          error: false
        });

        expect(models(undefined, requestModels())).toEqual(
          expectedState
        );
      });

      it('received action passed', async () => {
        const expectedState = new ListState({
          isLoading: false,
          items,
          error: false
        });

        expect(models(undefined, receiveModels(items))).toEqual(
          expectedState
        );
      });

      it('error action passed', async () => {
        const expectedState = new ListState({
          isLoading: false,
          items: [],
          error: true
        });

        expect(models(undefined, errorModels())).toEqual(
          expectedState
        );
      });
    });
  });
});
