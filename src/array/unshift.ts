/**
 * unshift
 * @param array
 */
export function unshift<T>(array: T[]) {
  return function (...items: T[]) {
    return array.unshift(...items);
  };
}
