import React, { FC } from 'react';
import './style.scss';

export interface FilterItemProps {
  label?: string;
}

export const FilterItem: FC<FilterItemProps> = ({
  children,
  label
}) => (
  <div className="filter-item">
    { label && (
      <div className="label" data-testid="label">
        { label }
      </div>
    ) }
    { children }
  </div>
);
