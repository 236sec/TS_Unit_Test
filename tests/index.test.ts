import { merge } from "../src";

describe("testing index file", () => {
  test("case #1", () => {
    expect(
      merge([1, 2, 3, 6, 8], [1, 4, 5, 6, 7], [15, 14, 13, 12])
    ).toStrictEqual([1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 12, 13, 14, 15]);
  });

  test("case #2", () => {
    expect(merge([1, 2, 3], [1, 4, 5, 6, 7], [15, 14, 4, 2])).toStrictEqual([
      1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 14, 15,
    ]);
  });

  test("case #3", () => {
    expect(merge([1, 2, 3, 6, 8], [1, 4, 5], [15, 13, 12, 5])).toStrictEqual([
      1, 1, 2, 3, 4, 5, 5, 6, 8, 12, 13, 15,
    ]);
  });
});
