import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectFilterItem } from 'src/App/components/common/SelectFilterItem';

class ModelFilterItem extends Component<any, any> {
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // const id: number = +event.target.value;
  }

  render() {
    return (
      <>
        <SelectFilterItem label="Model:" items={ [] } handleChange={ this.handleChange }/>
      </>
    );
  }
}

export default connect()(ModelFilterItem);
