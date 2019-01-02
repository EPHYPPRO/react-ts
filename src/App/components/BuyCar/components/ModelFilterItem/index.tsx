import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SelectFilterItem,
  SelectItem
} from 'src/App/components/common/SelectFilterItem';
import { State } from 'src/store/models/State';
import { selectModel, requestModels } from './actions';

export interface ModelFilterItemProps {
  selectedModelId: number;
  selectModel: typeof selectModel;
  models: SelectItem[];
  isLoading: boolean;
  error: boolean;
  selectedBrandId: number;
  requestModels: typeof requestModels;
}

class ModelFilterItem extends Component<ModelFilterItemProps, any> {
  componentWillMount() {
    this.props.requestModels();
  }

  handleChange = (id: number) => {
    this.props.selectModel(id);
  }

  render() {
    const {
      selectedModelId,
      models,
      isLoading,
      error,
      selectedBrandId
    } = this.props;

    return (
      <>
        <SelectFilterItem
          label="Model:"
          id={ selectedModelId }
          items={ models }
          handleChange={ this.handleChange }
          isLoading={ isLoading }
          error={ error }
          defaultItemValue={
            selectedBrandId === -1
              ? '- Select a brand first -'
              : '- Select a Model -'
          }
        />
      </>
    );
  }
}

export default connect(
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
)(ModelFilterItem);
