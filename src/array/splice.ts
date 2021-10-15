import { FilterFunction } from './interface';

/**
 * splice
 * @param array
 * @param filter
 */
export function splice<T>(array: T[], filter: FilterFunction<T>) {
  return function (start: number, deleteCount: number, ...items: any[]) {
    // 参数保护
    if (start >= array.length) {
      ``;
      array.push(...items);
      return [];
    }
    deleteCount = Math.max(deleteCount, 0);

    const deletedItems: any[] = [];
    const cloneArray = [...array]; // 复制一份 target
    array.length = 0; // 清空 target

    let index = 0;
    cloneArray.forEach((item) => {
      if (filter(item)) {
        if (index >= start && index < start + deleteCount) {
          deletedItems.push(item); // 将删除元素放入新数组中
        } else {
          // 添加新元素
          if (index === start + deleteCount) {
            array.push(...items);
          }
          array.push(item);
        }
        index++;
      } else {
        array.push(item);
      }
    });
    return deletedItems;
  };
}
