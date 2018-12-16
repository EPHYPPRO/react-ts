import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectFilterItem } from 'src/App/components/common/SelectFilterItem';

interface BrandFilterItemProps {
  id?: number;
}

class BrandFilterItem extends Component<BrandFilterItemProps, any> {
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id: number = +event.target.value;
    console.log(id);
  }

  render() {
    return (
      <>
        <SelectFilterItem
          label="Brand:"
          items={ [{ id: 1, text: '1' }, { id: 2, text: '2' }] }
          handleChange={ this.handleChange }
        />
      </>
    );
  }
}

export default connect()(BrandFilterItem);
