import React, { SFC } from 'react';
import './style.scss';
import { FilterItem, FilterItemProps } from '../FilterItem';
import { Select, MenuItem } from '@material-ui/core';

export interface SelectItem {
  id: number;
  text: string;
}

interface SelectFilterItemProps extends FilterItemProps {
  id?: number;
  items: SelectItem[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectFilterItem: SFC<SelectFilterItemProps> = ({ label, id, handleChange, items }) => (
  <>
    <FilterItem label={ label }>
      <Select fullWidth={ true } value={ id } onChange={ handleChange }>
        { items &&
          items.map(({ id, text }) => (
            <MenuItem value={ id } key={ id }>
              { text }
            </MenuItem>
          )) }
      </Select>
    </FilterItem>
  </>
);
