import { FilterFunction } from './interface';

/**
 *
 * @param array
 * @param filter
 */
export function push<T>(array: T[], filter: FilterFunction<T>) {
  return function (...items: T[]) {
    array.push(...items.filter(filter));
    return array.filter(filter).length;
  };
}
