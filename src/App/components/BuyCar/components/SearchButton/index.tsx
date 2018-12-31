import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { State } from 'src/store/state';

export interface SearchButtonProps {
  selectedBrandId?: number;
  selectedModelId?: number;
  onClick?: () => void;
}

class SearchButton extends Component<SearchButtonProps, any> {

  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick();
  }

  render() {
    const { selectedBrandId, selectedModelId } = this.props;

    return (
      <div className="search-button">
        <Button
          fullWidth={ true }
          variant="contained"
          onClick={ this.handleClick }
          disabled={ selectedBrandId === -1 || selectedModelId === -1 }
        >
          Search
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ selectedBrandId, selectedModelId }: State) => ({
    selectedBrandId,
    selectedModelId
  })
)(SearchButton);
