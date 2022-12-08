// デフォルト値はundefinedの場合に適用される
// function fn(a, b = 1) {
//   console.log(a, b);
// }

// 関数名が重複している場合は関数式で宣言すれば違う関数となる
// 関数式は必ず無名関数にする必要はなく、名前がついていても問題はない
// const fn = function fn(a, b) {
//   console.log(2);
// };

// 関数の実引数は宣言時に二つ定義されている場合、二つ指定する必要がある
// 一つしか指定しなかった場合は、二つの目の引数はundefinedになってしまう
// 引数は順番に渡すことになる
// fn(1);
// fn(0, 1);

// 関数名が重複していた場合は後から宣言された関数が実行される
// JSは引数の数で別の関数とはならず、名前を見ている（他の言語だとあるらしい）

// undefinedはプログラムの方で自動的に設定する値なので、空で渡す時はnullを使う
// 初期化で値が空の宣言は以下のようではなく、
// let c = undefined;

// このようにする(値は空)
// let c;

// argumentsは関数コンテキストで自動的に生成される自分では定義しない
// argumentsはオブジェクトで、その中身は呼び出し時に渡された実引数が渡ってくることになる
function fn() {
  // 仮引数を指定しなくてもargumentsに格納された実引数を取り出してあげれば同じ役割となる
  // （このようなやり方は基本的にしないが、渡される引数が決まっていない時にargumentsから取り出す）
  // 最近ではES6で導入されたrestパラメータで行うことが多い
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
  return a;
}
let c = fn(1, undefined);
console.log(c);
