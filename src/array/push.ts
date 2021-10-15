/**
 *
 * @param array
 */
export function push<T>(array: T[]) {
  return function (...items: T[]) {
    return array.push(...items);
  };
}
