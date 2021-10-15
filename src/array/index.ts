import { FilterFunction } from './interface';
import { push } from './push';
import { splice } from './splice';
import { setIndex } from './set_index';
import { pop } from './pop';
import { setLength } from './set_length';
import { shift } from './shift';
import { unshift } from './unshift';

function isNumberProperty(property): property is string {
  return /^\d+$/.test(property);
}

export function filterArray<T>(array: T[], filter: FilterFunction<T>) {
  return new Proxy(array, {
    set(target, property, value) {
      // console.debug('set', `[${String(property)}]`, target);
      if (property === 'length') {
        setLength(target, filter, value);
      } else if (isNumberProperty(property)) {
        setIndex(target, filter, +property, value);
      }
      return true;
    },

    get(target, property) {
      // console.debug('get', `[${String(property)}]`);
      return (
        {
          push: push(target),
          pop: pop(target, filter),
          unshift: unshift(target),
          shift: shift(target, filter),
          splice: splice(target, filter),
        }[property] || target.filter(filter)[property]
      );
    },
  });
}
