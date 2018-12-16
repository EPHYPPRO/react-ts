import React, { SFC } from 'react';
import './style.scss';

export interface FilterItemProps {
  label?: string;
}

export const FilterItem: SFC<FilterItemProps> = ({ children, label }) => {
  return (
    <div className="filter-item">
      { label && <div className="label">{ label }</div> }
      { children }
    </div>
  );
};
