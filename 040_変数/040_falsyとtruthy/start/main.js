let a = 0;
let b = '';
// bigintの型
let c = 0n;
let d = null;
let e = undefined;
// 数値として処理できなかった場合（ナンnot or number）
let f = NaN;
// 以下は数値として処理できなくNaNとなる
let g = parseInt('');
console.log(g);
// falsyな値なので全てfalseになる
console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));
console.log(Boolean(e));
console.log(Boolean(f));

// if文でもtruthyだった場合は、処理実行
// falsyだった場合はelseの処理を実行、ない場合はfalseを返す
// falsyだった場合に実行したい場合は「!」を先頭につける
if (g) {
  console.log('hello');
}
