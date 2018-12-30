import React, { FC } from 'react';
import './style.scss';
import { FilterItem, FilterItemProps } from '../FilterItem';
import { TextField } from '@material-ui/core';

export interface TextFilterItemProps extends FilterItemProps {
  text?: string;
  handleChange?: (keywords: string) => void;
}

const handleEventChange = (handler?: (keywords: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => handler && handler(event.target.value);

export const TextFilterItem: FC<TextFilterItemProps> = ({
  label,
  text,
  handleChange
}) => (
  <>
    <FilterItem label={ label }>
      <TextField
        fullWidth={ true }
        onChange={ handleEventChange(handleChange) }
      >
        { text }
      </TextField>
    </FilterItem>
  </>
);
