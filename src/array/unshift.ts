import { FilterFunction } from './interface';

/**
 * unshift
 * @param array
 * @param filter
 */
export function unshift<T>(array: T[], filter: FilterFunction<T>) {
  return function (...items: T[]) {
    array.unshift(...items.filter(filter));
    return array.filter(filter).length;
  };
}
