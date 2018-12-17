import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { State } from 'src/store/state';

interface SearchButtonProps {
  selectedBrandId: number;
  selectedModelId: number;
}

class SearchButton extends Component<SearchButtonProps, any> {
  private clickSubject = new Subject();
  private unmounted = new Subject();

  componentWillMount() {
    this.clickSubject
      .asObservable()
      .pipe(
        takeUntil(this.unmounted),
        debounceTime(500)
      )
      .subscribe(() => alert('search started'));
  }

  handleClick = () => {
    this.clickSubject.next();
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

  componentWillUnmount() {
    this.clickSubject.complete();
    this.unmounted.next();
    this.unmounted.complete();
  }
}

export default connect(
  ({ selectedBrandId, selectedModelId }: State) => ({
    selectedBrandId,
    selectedModelId
  })
)(SearchButton);
