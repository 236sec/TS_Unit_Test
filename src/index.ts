export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let result1: number[] = [];
  let l: number = 0;
  let r: number = 0;
  while (l < collection_1.length && r < collection_2.length) {
    if (collection_1[l] <= collection_2[r]) {
      result1.push(collection_1[l]);
      l++;
    } else {
      result1.push(collection_2[r]);
      r++;
    }
  }
  while (l < collection_1.length) {
    result1.push(collection_1[l]);
    l++;
  }
  while (r < collection_2.length) {
    result1.push(collection_2[r]);
    r++;
  }
  let result: number[] = [];
  l = 0;
  r = collection_3.length - 1;
  while (l < result1.length && r > -1) {
    if (result1[l] <= collection_3[r]) {
      result.push(result1[l]);
      l++;
    } else {
      result.push(collection_3[r]);
      r--;
    }
  }
  while (l < result1.length) {
    result.push(result1[l]);
    l++;
  }
  while (r > -1) {
    result.push(collection_3[r]);
    r--;
  }
  return result;
}

console.log(merge([1, 2, 3, 6, 8], [1, 4, 5, 6, 7], [15, 14, 13, 12]));
