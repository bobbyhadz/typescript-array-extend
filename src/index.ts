export {};

// Extend Array.prototype in TypeScript

const arr = ['a', 'b', 'c', 'd'];

if (!Array.prototype.removeLast) {
  Array.prototype.removeLast = function () {
    this.pop();

    return this;
  };
}

// 👇️ const result: string[]
const result = arr.removeLast();
console.log(result);

console.log(arr); // 👉️ ['a', 'b', 'c']
