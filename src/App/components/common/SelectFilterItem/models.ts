import { FilterItemProps } from '../FilterItem';

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
