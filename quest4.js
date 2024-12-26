const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
const max = arr.reduce((a, b) => Math.max(a, b));
console.log('kth largest element', max - k + 1);
