import { NumericListTypes } from '../../data/data.types';

export interface NumericItemPropsTypes extends Omit<NumericListTypes, 'id'> {
  id?: string;
}
