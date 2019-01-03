import { SelectItem } from '..';
import fake from 'casual';

export class FakeSelectItem implements SelectItem {
  id: number = fake.integer(1);
  text: string = fake.title;
}
