import { FilterFunction } from './interface';

/**
 *
 * @param array
 * @param filter
 * @param length
 */
export function setLength<T>(
  array: T[],
  filter: FilterFunction<T>,
  length: number
) {
  let filterLength = 0;
  const origin = [...array];
  array.length = 0; // 清空数组
  for (let i = 0; i < origin.length; i++) {
    const item = origin[i];
    if (filter(item)) {
      if (filterLength < length) {
        array.push(item);
      }
      filterLength++;
    } else {
      array.push(item);
    }
  }
  if (filterLength < length) {
    array.length = array.length + length - filterLength;
  }
}
