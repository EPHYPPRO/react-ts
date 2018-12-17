import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextFilterItem } from 'src/App/components/common/TextFilterItem';
import { changeKeywords } from './actions';
import { Subject } from 'rxjs';
import {
  takeUntil,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

interface KeywordsFilterItemProps {
  changeKeywords: typeof changeKeywords;
}

class KeywordsFilterItem extends Component<
  KeywordsFilterItemProps,
  any
> {
  private keywordsChangeSubject = new Subject<string>();
  private unmounted = new Subject();

  componentDidMount() {
    this.keywordsChangeSubject
      .asObservable()
      .pipe(
        takeUntil(this.unmounted),
        debounceTime(250),
        distinctUntilChanged()
      )
      .subscribe((keywords) => {
        this.props.changeKeywords(keywords);
      });
  }

  handleChange = (keywords: string) => {
    this.keywordsChangeSubject.next(keywords);
  }

  render() {
    return (
      <>
        <TextFilterItem
          label="Keywords:"
          handleChange={ this.handleChange }
          text=""
        />
      </>
    );
  }

  componentWillUnmount() {
    this.keywordsChangeSubject.complete();
    this.unmounted.next();
    this.unmounted.complete();
  }
}

export default connect(
  null,
  {
    changeKeywords
  }
)(KeywordsFilterItem);
