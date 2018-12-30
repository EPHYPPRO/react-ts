import React, { FC } from 'react';
import './style.scss';
import { FilterItem, FilterItemProps } from '../FilterItem';
import { Select, MenuItem, LinearProgress } from '@material-ui/core';

export interface SelectItem {
  id: number;
  text: string;
}

interface SelectFilterItemProps extends FilterItemProps {
  id?: number;
  items: SelectItem[];
  defaultItemValue?: string;
  isLoading?: boolean;
  error?: boolean;
  handleChange: (id: number) => void;
}

const handleEventChange = (handler: (id: number) => void) => (
  event: React.ChangeEvent<HTMLSelectElement>
) => handler(+event.target.value);

export const SelectFilterItem: FC<SelectFilterItemProps> = ({
  label,
  id,
  items,
  handleChange,
  defaultItemValue,
  isLoading,
  error
}) => (
  <>
    <FilterItem label={ label }>
      <Select
        fullWidth={ true }
        value={ id }
        onChange={ handleEventChange(handleChange) }
      >
        { defaultItemValue && (
          <MenuItem value={ -1 } key={ 0 }>
            { defaultItemValue }
          </MenuItem>
        ) }
        { items &&
          items.map(({ id, text }, index) => (
            <MenuItem value={ id } key={ index }>
              { text }
            </MenuItem>
          )) }
      </Select>
      { error && (
        <div className="error-message">Couldn't load data</div>
      ) }
      { isLoading && <LinearProgress /> }
    </FilterItem>
  </>
);
