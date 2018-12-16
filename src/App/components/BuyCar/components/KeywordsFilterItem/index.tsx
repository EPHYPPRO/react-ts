import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextFilterItem } from 'src/App/components/common/TextFilterItem';

class KeywordsFilterItem extends Component<any, any> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const text = event.target.value;
  }

  render() {
    return (
      <>
        <TextFilterItem label="Keywords:" handleChange={ this.handleChange } text="" />
      </>
    );
  }
}

export default connect()(KeywordsFilterItem);
