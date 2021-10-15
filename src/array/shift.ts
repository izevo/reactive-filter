import { FilterFunction } from './interface';

/**
 *
 */
export function shift<T>(array: T[], filter: FilterFunction<T>) {
  return function () {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (filter(item)) {
        array.splice(i, 1);
        return item;
      }
    }
    return undefined;
  };
}
