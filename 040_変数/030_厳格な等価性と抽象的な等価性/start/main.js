function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

let a = '1';
let b = 1;

// 厳格な等価性なので、型を比較し、falseが帰ってくる
// console.log(a === b);
// 抽象的な等価性なので、型を無視して比較し、trueが帰ってくる
// console.log(a == b);

// booleanが渡ってきた場合は、数値に変換されて、比較される
// その為、trueが帰ってくる
let c = true;
// console.log(b === Number(c));
// printEquality(b, c);

// 数値と文字列の場合、文字列を数値に変換する仕様になる
// 空文字は0と変換されて、抽象的にはtrueとなる
// コンソールにNumber("")と入力すれば変換される（確認する方法）
let e = '';
let f = 0;
let g = '0';
// printEquality(e, f);

// e、fと同じ結果
printEquality(g, f);

// nullとundefinedを比較した時はtrueを返す
// ECMAScriptに等価性が載っているので困ったら調べる
// 基本的には厳格な方を使うようにする
