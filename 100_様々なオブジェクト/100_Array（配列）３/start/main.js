const arry = [1, 2, 3, 4, 5];

// reduceは配列を結合して一つにまとめる役割がある
// accuは1ループ目は配列の最初の値が入り、2ループ以降はaccuとcurrの足し合わせてた結果が入る
// currは配列の2番目以降が順に入る
const result = arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 0);
// reduceの第二引数に0を渡すと配列の最初が1では無く、0からスタートとなる(初期値の変更)
// main.js:7 0 1
// main.js:7 1 2
// main.js:7 3 3
// main.js:7 6 4
// main.js:7 10 5
// main.js:11 15
console.log(result);
