import { brands, selectedBrandId } from '../reducers';
import {
  selectBrand,
  requestBrands,
  receiveBrands,
  errorBrands
} from '../actions';
import fake from 'casual';
import { testForInitialAndCurrentState } from 'test-utils/store/reducers';
import { ListState } from 'src/store/models/ListState';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';

describe('BrandFilterItem reducers', () => {
  describe('selectedBrandId', () => {
    testForInitialAndCurrentState(
      selectedBrandId,
      -1,
      fake.integer()
    );

    it('should return id as a state when valid action with id passed', async () => {
      const fakeId = fake.integer(1);

      expect(
        selectedBrandId(fake.integer(1), selectBrand(fakeId))
      ).toEqual(fakeId);
    });
  });

  describe('brands', () => {
    const items = [new FakeSelectItem(), new FakeSelectItem()];

    testForInitialAndCurrentState(
      brands,
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

        expect(brands(undefined, requestBrands())).toEqual(
          expectedState
        );
      });

      it('received action passed', async () => {
        const expectedState = new ListState({
          isLoading: false,
          items,
          error: false
        });

        expect(brands(undefined, receiveBrands(items))).toEqual(
          expectedState
        );
      });

      it('error action passed', async () => {
        const expectedState = new ListState({
          isLoading: false,
          items: [],
          error: true
        });

        expect(brands(undefined, errorBrands())).toEqual(
          expectedState
        );
      });
    });
  });
});
