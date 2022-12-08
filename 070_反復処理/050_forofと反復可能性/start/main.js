const arry = ['a', 'b', 'c'];

// ３番目がundfinedになる
arry[4] = 'e';

Object.prototype.method = function () {};

// for...ofの配列のイテレータにはenumerableは効かない
Object.defineProperty(arry, 0, {
  enumerable: false,
});

// 確認してもenumerableはfalseとなっているが、値が返ってきている
const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);

// for...ofはイテレータの挙動に依存する
for (let v of arry) {
  console.log(v);
}
