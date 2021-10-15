import { FilterFunction } from './interface';

/**
 *
 * @param array
 * @param filter
 * @param index
 * @param value
 */
export function setIndex<T>(
  array: T[],
  filter: FilterFunction<T>,
  index: number,
  value: T
) {
  let filterLength = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (filter(item)) {
      if (filterLength === index) {
        array[i] = value;
        return;
      }
      filterLength++;
    }
  }
  // 如果还没找到，则在尾部添加
  array[array.length] = value;
}
