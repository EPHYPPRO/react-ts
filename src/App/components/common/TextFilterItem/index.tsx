import React, { SFC } from 'react';
import './style.scss';
import { FilterItem, FilterItemProps } from '../FilterItem';
import { TextField } from '@material-ui/core';

interface TextFilterItemProps extends FilterItemProps {
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextFilterItem: SFC<TextFilterItemProps> = ({ label, text, handleChange }) => (
  <>
    <FilterItem label={ label }>
      <TextField fullWidth={ true } onChange={ handleChange }>
        { text }
      </TextField>
    </FilterItem>
  </>
);
