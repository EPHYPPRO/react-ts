import fake from 'casual';
import { SelectItem } from '../models';

export class FakeSelectItem implements SelectItem {
  id: number = fake.integer(1);
  text: string = fake.title;
}
