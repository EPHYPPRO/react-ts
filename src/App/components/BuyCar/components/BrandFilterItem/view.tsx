import React, { Component } from 'react';
import { SelectFilterItem } from 'src/App/components/common/SelectFilterItem';
import {
  BrandFilterItemStateProps,
  BrandFilterItemDispatchProps
} from '.';
import { emptySelectItemId } from './reducers';
import { emptySelectItemId } from '../ModelFilterItem/reducers';

export type BrandFilterItemProps = Partial<
  BrandFilterItemStateProps & BrandFilterItemDispatchProps
>;

export class BrandFilterItem extends Component<
  BrandFilterItemProps,
  any
> {
  componentWillMount() {
    this.props.requestBrands && this.props.requestBrands();
  }

  handleChange = (id: number) => {
    const { selectedBrandId, selectBrand } = this.props;
    id !== selectedBrandId && selectBrand && selectBrand(id);
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
