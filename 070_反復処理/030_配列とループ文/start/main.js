const arry = [1, 2, 3, 4, 5];

for (let i = 0; i < arry.length; i++) {
  console.log(arry[i]);
}

// while文を使って上記のfor文と同じ処理を記述する
// 変数はカンマをつけることにより一行に複数を宣言することができる
let v,
  i = 0;
// 上記は以下と同じになる
// let v;
// let i = 0;

// 後方インクリメントなので、iの値をvに代入してからプラス1になる
// 初回は0が渡り、ループが回ってからプラス1される
// arry[5]となったときにキーが5の配列は存在しないのでundefinedとなる
// undefinedはfalsyな値なのでループが終了する
while ((v = arry[i++])) {
  console.log(v);
}

// 配列の中にfalsyな値が入っていると途中で終わってしまう
// while文はbooleanで判断しているから
// for文は数
