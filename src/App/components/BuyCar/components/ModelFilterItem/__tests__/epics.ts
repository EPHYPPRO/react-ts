import { TestScheduler } from 'rxjs/testing';
import fake from 'casual';
import { requestModels, receiveModels } from '../actions';
import { State } from 'src/store/models/State';
import { Dependencies } from 'src/store/models/Dependencies';
import { FakeSelectItem } from 'src/App/components/common/SelectFilterItem/__tests__/FakeSelectItem';
import { fetchModelsEpic } from '../epics';
import { StateObservable } from 'redux-observable';

const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('fetchModelsEpic', () => {
  it('should receive models by selected model id', async () => {
    const selectedBrandId = fake.integer(1);
    const models = [new FakeSelectItem(), new FakeSelectItem()];

    scheduler.run(({ cold, hot, expectObservable }) => {
      const action$ = hot('-a', {
        a: requestModels()
      });

      const state$: Partial<StateObservable<State>> = {
        value: { selectedBrandId }
      };

      const dependencies: Partial<Dependencies> = {
        getJSON: (url) =>
          cold<any>('--a', {
            a: models
          })
      };

      const output$ = fetchModelsEpic(action$, state$, dependencies);

      expectObservable(output$).toBe('---a', {
        a: receiveModels(models)
      });
    });
  });
});
