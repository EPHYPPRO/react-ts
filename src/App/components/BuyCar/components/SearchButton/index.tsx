import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class SearchButton extends Component<any, any> {
  render() {
    return (
      <div className="search-button">
        <Button fullWidth={ true } variant="contained">Search</Button>
      </div>
    );
  }
}

export default connect()(SearchButton);
