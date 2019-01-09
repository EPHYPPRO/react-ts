import React, { FC } from 'react';
import './style.scss';
import { FilterItem } from '../FilterItem';
import { Select, MenuItem, LinearProgress } from '@material-ui/core';
import { SelectFilterItemProps } from './models';

export const emptySelectItemId = -1;

const handleEventChange = (
  prevId: number,
  handler?: (id: number) => void
) => (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedId = +event.target.value;
  prevId !== selectedId && handler && handler(selectedId);
};

export const SelectFilterItem: FC<SelectFilterItemProps> = ({
  label,
  id = emptySelectItemId,
  items,
  handleChange,
  defaultItemValue,
  isLoading = false,
  error = false
}) => (
  <FilterItem label={ label }>
    <Select
      data-testid="select"
      fullWidth={ true }
      value={ id }
      onChange={ handleEventChange(id, handleChange) }
    >
      { defaultItemValue && (
        <MenuItem value={ -1 } key={ 0 }>
          { defaultItemValue }
        </MenuItem>
      ) }
      { items &&
        items.map(({ id, text }, index) => (
          <MenuItem value={ id } key={ index + 1 }>
            { text }
          </MenuItem>
        )) }
    </Select>
    { error && (
      <div className="error-message" data-testid="error-message">
        Couldn't load data
      </div>
    ) }
    { isLoading && <LinearProgress data-testid="loader" /> }
  </FilterItem>
);
