import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SelectFilterItem,
  SelectItem
} from 'src/App/components/common/SelectFilterItem';
import { selectBrand, requestBrands } from './actions';
import { State } from 'src/store/state';
import {
  requestModels,
  selectModel,
  receiveModels
} from '../ModelFilterItem/actions';

interface BrandFilterItemProps {
  selectedBrandId?: number;
  brands: SelectItem[];
  isLoading: boolean;
  error: boolean;
  selectBrand: typeof selectBrand;
  requestBrands: typeof requestBrands;
  selectModel: typeof selectModel;
  requestModels: typeof requestModels;
  receiveModels: typeof receiveModels;
}

class BrandFilterItem extends Component<BrandFilterItemProps, any> {
  private emptyBrandId = -1;

  componentWillMount() {
    this.props.requestBrands();
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id: number = +event.target.value;
    this.props.selectBrand(id);
    id === this.emptyBrandId
      ? this.props.receiveModels([])
      : this.props.requestModels();
    this.props.selectModel(this.emptyBrandId);
  }

  render() {
    const { selectedBrandId, brands, isLoading, error } = this.props;

    return (
      <>
        <SelectFilterItem
          label="Brand:"
          id={ selectedBrandId }
          items={ brands }
          handleChange={ this.handleChange }
          isLoading={ isLoading }
          error={ error }
          defaultItemValue="- Select a Brand -"
        />
      </>
    );
  }
}

export default connect(
  ({ selectedBrandId, brands }: State) => ({
    selectedBrandId,
    brands: brands.items,
    isLoading: brands.isLoading,
    brandsError: brands.error
  }),
  {
    selectBrand,
    requestBrands,
    selectModel,
    requestModels,
    receiveModels
  }
)(BrandFilterItem);
