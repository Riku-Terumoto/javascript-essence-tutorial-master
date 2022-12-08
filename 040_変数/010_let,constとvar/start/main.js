// 再宣言
let a = 0;
// let a = 0;

var b = 0;
var b = 1;

// 再代入
let c = 0;
c = 1;

const d = 0;
// d = 1;

// ブロックスコープ
// let,constは適用されるが、varは無視される
{
  let e = 0;
  var f = 0;
}

// ホイスティング
// 宣言より前に使用すると、let,constは初期化値が入らない為、エラーとなるが、varはundefinedが入る為、エラーとはならない
// console.log(g);
console.log(h);
let g = 0;
var h = 0;
