import React, { FC } from 'react';
import './style.scss';
import { FilterItem, FilterItemProps } from '../FilterItem';
import { Select, MenuItem, LinearProgress } from '@material-ui/core';

export interface SelectItem {
  id: number;
  text: string;
}

export interface SelectFilterItemProps extends FilterItemProps {
  id?: number;
  items?: SelectItem[];
  defaultItemValue?: string;
  isLoading?: boolean;
  error?: boolean;
  open?: boolean;
  handleChange?: (id: number) => void;
}

const handleEventChange = (handler?: (id: number) => void) => (
  event: React.ChangeEvent<HTMLSelectElement>
) => handler && handler(+event.target.value);

export const SelectFilterItem: FC<SelectFilterItemProps> = ({
  label,
  id = -1,
  items,
  handleChange,
  defaultItemValue,
  isLoading = false,
  error = false,
  open = false // for testing purposes only
}) => {
  const testProps = {
    open,
    onClose: () => null
  };

  return (
    <FilterItem label={ label }>
      <Select
        data-testid="select"
        fullWidth={ true }
        value={ id }
        onChange={ handleEventChange(handleChange) }
        { ...(open ? testProps : {}) } // for testing purposes only
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
};
