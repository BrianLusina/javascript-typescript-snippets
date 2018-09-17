var test = require("ava");
var expect = require("expect");
var sum_pairs = require('./sumofpairs.js');

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

test("Basic: [" + l1 + "] should return [1, 7] for sum = 8", t => {
  expect(sum_pairs(l1, 8)).toEqual([1, 7]);
});

test.skip("Negatives: [" + l2 + "] should return [0, -6] for sum = -6", t => {
  expect(sum_pairs(l2, -6)).toEqual([0, -6]);
});

test.skip("No Match: [" + l3 + "] should return undefined for sum = -7", t => {
  expect(sum_pairs(l3, -7)).toEqual(undefined);
});

test.skip("First Match From Left: [" + l4 + "] should return [1, 1] for sum = 2 ", t => {
  expect(sum_pairs(l4, 2)).toEqual([1, 1]);
});

test.skip("First Match From Left REDUX!: [" + l5 + "] should return [3, 7] for sum = 10 ", t => {
  expect(sum_pairs(l5, 10)).toEqual([3, 7]);
});

test.skip("Duplicates: [" + l6 + "] should return [4, 4] for sum = 8", t => {
  expect(sum_pairs(l6, 8)).toEqual([4, 4]);
});

test.skip("Zeroes: [" + l7 + "] should return [0, 0] for sum = 0", t => {
  expect(sum_pairs(l7, 0)).toEqual([0, 0]);
});

test.skip("Subtraction: [" + l8 + "] should return [13, -3] for sum = 10", t => {
  expect(sum_pairs(l8, 10)).toEqual([13, -3]);
});
