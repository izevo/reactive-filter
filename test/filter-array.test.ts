import { filterArray } from '../src';

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let filteredArray;
let originArray;
beforeEach(() => {
  originArray = ['a', 1, 'b', 2, 3, 'c', 'd', 4, 'e'];
  filteredArray = filterArray(originArray, isNumber);
});

test('equal', () => {
  expect(filteredArray).toEqual([1, 2, 3, 4]);
});

test('for of', () => {
  const array = [];
  for (const value of filteredArray) {
    array.push(value);
  }
  expect(array).toEqual([1, 2, 3, 4]);
});

test('set length 3', () => {
  filteredArray.length = 3;
  expect(filteredArray).toEqual([1, 2, 3]);
  expect(originArray).toEqual(['a', 1, 'b', 2, 3, 'c', 'd', 'e']);
});

test('set length 4', () => {
  filteredArray.length = 4;
  expect(filteredArray).toEqual([1, 2, 3, 4]);
  expect(originArray).toEqual(['a', 1, 'b', 2, 3, 'c', 'd', 4, 'e']);
});

test('set length 5', () => {
  filteredArray.length = 5;
  expect(filteredArray).toEqual([1, 2, 3, 4]);
  expect(originArray).toEqual(['a', 1, 'b', 2, 3, 'c', 'd', 4, 'e', undefined]);
});

test('call push', () => {
  filteredArray.push(5);
  expect(filteredArray).toEqual([1, 2, 3, 4, 5]);
  expect(originArray).toEqual(['a', 1, 'b', 2, 3, 'c', 'd', 4, 'e', 5]);
});

test('call pop', () => {
  const popped = filteredArray.pop();
  expect(filteredArray).toEqual([1, 2, 3]);
  expect(originArray).toEqual(['a', 1, 'b', 2, 3, 'c', 'd', 'e']);
  expect(popped).toEqual(4);
});

test('call splice', () => {
  const removed = filteredArray.splice(1, 1);
  expect(filteredArray).toEqual([1, 3, 4]);
  expect(removed).toEqual([2]);
  expect(originArray).toEqual(['a', 1, 'b', 3, 'c', 'd', 4, 'e']);
});

test('call concat', () => {
  const concated = filteredArray.concat([5, 6]);
  expect(concated).toEqual([1, 2, 3, 4, 5, 6]);
});

test('call join', () => {
  const joined = filteredArray.join();
  expect(joined).toEqual('1,2,3,4');
});

test('call map', () => {
  const mapped = filteredArray.map((v) => v);
  expect(mapped).toEqual([1, 2, 3, 4]);
});

test('call sort', () => {
  filteredArray.sort((a, b) => b - a);
  expect(filteredArray).toEqual([4, 3, 2, 1]);
  expect(originArray).toEqual(['a', 4, 'b', 3, 2, 'c', 'd', 1, 'e']);
});

test('call fill', () => {
  filteredArray.fill(5);
  expect(filteredArray).toEqual([5, 5, 5, 5]);
  expect(originArray).toEqual(['a', 5, 'b', 5, 5, 'c', 'd', 5, 'e']);
});
