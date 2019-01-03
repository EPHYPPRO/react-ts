import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { selectModel, requestModels } from './actions';
import { ModelFilterItem as View } from './view';

export const ModelFilterItem = connect(
  ({ selectedModelId, models, selectedBrandId }: State) => ({
    selectedModelId,
    models: models && models.items,
    isLoading: models && models.isLoading,
    error: models && models.error,
    selectedBrandId
  }),
  {
    selectModel,
    requestModels
  }
)(View);
