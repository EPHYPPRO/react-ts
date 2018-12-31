import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeKeywords } from './actions';
import { FilterItem } from 'src/App/components/common/FilterItem';
import { TextField } from '@material-ui/core';

export interface KeywordsFilterItemProps {
  changeKeywords?: typeof changeKeywords;
}

class KeywordsFilterItem extends Component<
  KeywordsFilterItemProps,
  any
> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keywords = event.target.value;
    const { changeKeywords } = this.props;
    changeKeywords && changeKeywords(keywords);
  }

  render() {
    return (
      <FilterItem label="Keywords:">
        <TextField
          fullWidth={ true }
          onChange={ this.handleChange }
        />
      </FilterItem>
    );
  }
}

export default connect(
  null,
  {
    changeKeywords
  }
)(KeywordsFilterItem);
