import React, { Component } from 'react';
import {
  SelectFilterItem,
  SelectItem
} from 'src/App/components/common/SelectFilterItem';
import { selectModel, requestModels } from './actions';

export interface ModelFilterItemProps {
  selectedModelId?: number;
  selectModel?: typeof selectModel;
  models?: SelectItem[];
  isLoading?: boolean;
  error?: boolean;
  selectedBrandId?: number;
  requestModels?: typeof requestModels;
}

export class ModelFilterItem extends Component<
  ModelFilterItemProps,
  any
> {
  componentWillMount() {
    const { requestModels } = this.props;
    requestModels && requestModels();
  }

  handleChange = (id: number) => {
    const { selectModel } = this.props;
    selectModel && selectModel(id);
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
