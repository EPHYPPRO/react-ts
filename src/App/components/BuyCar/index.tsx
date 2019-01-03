import React, { Component } from 'react';
import './style.scss';
import SearchButton from './components/SearchButton';
import BrandFilterItem from './components/BrandFilterItem';
import { ModelFilterItem } from './components/ModelFilterItem';
import KeywordsFilterItem from './components/KeywordsFilterItem';
import { Divider, Paper } from '@material-ui/core';

export class BuyCar extends Component<any, any> {
  render() {
    return (
      <div className="buy-car">
        <Paper>
          <div className="title">Buy a car</div>
          <Divider />
          <BrandFilterItem />
          <ModelFilterItem />
          <KeywordsFilterItem />
          <Divider />
          <SearchButton />
        </Paper>
      </div>
    );
  }
}
