// const a = 'hello';
// a = 'bye';

const b = {
  prop: 'hello',
};
// オブジェクト自体を再代入するとエラーとなる
// b = {};
// プロパティ自体に再代入すると値が変更されている
b.prop = 'bye';
console.log(b);
