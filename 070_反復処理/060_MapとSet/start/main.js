// mapは任意の型をキーとしてデータを保持できる
const map = new Map();
// オブジェクト型
const key1 = {};

map.set(key1, 'value1');
console.log(map.get(key1));

// 関数型
const key2 = function () {};
map.set(key2, 'value2');
console.log(map.get(key2));

// number型
let key3 = 0;
map.set(key3, 'value3');
map.delete(key3);
console.log(map.get(0));

// for...ofで値をkとvに格納（分割代入）
// mapはfor...inは使えない
// for (const [k, v] of map) {
//   console.log(k, v);
// }

// mapの構造
// mapは中にentriesという特殊な値を持っている
// この中にキーと値を保持している
// これはオブジェクトみたく、自身で持っているわけではなく、あくまでentriesという特殊なものに格納されているイメージなる

// set
const s = new Set();

// 値のセットする
// セットは値が重複したものは含まれない
s.add(key1);
s.add(key1);
s.add(key2);
s.add(key3);

// 値の削除
s.delete(key3);

// 値を探す
console.log(s.has(key2));

// setは配列みたいにs[key1]できないから、配列に直す必要がある
const arry = Array.from(s);
// スプレッド構文でも配列に直せる
// const arry = [...s]
console.log(arry);

for (const k of s) {
  console.log(k);
}
