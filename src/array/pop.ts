/**
 * pop
 * @param array
 * @param filter
 */
import { FilterFunction } from './interface';

export function pop<T>(array: T[], filter: FilterFunction<T>) {
  return function () {
    for (let i = array.length - 1; i >= 0; i--) {
      const item = array[i];
      if (filter(item)) {
        array.splice(i, 1);
        return item;
      }
    }
    return undefined;
  };
}
