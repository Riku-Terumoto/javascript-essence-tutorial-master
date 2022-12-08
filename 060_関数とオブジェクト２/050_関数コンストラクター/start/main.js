// 関数コンストラクター
// 第一引数からは渡ってくる文字列の引数を定義
// 一番最後の文字列は関数のボディ部部
const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1, 2);
console.log(result);

// 関数コンストラクターは以下と同様となる
// 以下の関数も関数コンストラクターからから生成されたインスタンスとなる
function fn2(a, b) {
  return a + b;
}

// instansofで確認するとfn2は関数コンストラクターで生成されたインスタンスと言える
// その為、関数はオブジェクトであると証明された
console.log(fn2 instanceof Function);

// 注意すべき点はnew演算子はグローバルスコープで実行されるので、値はグローバルスコープかスクリプトスコープから探しに行く
// その為、以下は関数スコープで定義されたdではなく、グローバルスコープのdが適用される
// let d = 0;
// function fn() {
//   let d = 1;
//   const fn1 = new Function('a', 'b', 'return a * b * d');
//   return fn1;
// }
// const f = fn();
// const result = f(1,2);

// new演算子のfunctionとFunctionは違くて、objはあくまで無名関数から生成されたオブジェクトインスタンスとなり、
// fn3は関数を生成するコンストラクターになる為、別物である
const obj = new (function () {
  this.a = 0;
})();
console.log(obj);

const fn3 = new Function('this.a = 0');
// fn3を通常のオブジェクトインスタンスを生成したい場合は、再度new演算子でインスタンス化する必要がある
const obj3 = new fn3();
console.log(obj3);

// JavaScriptでは大文字小文字を明確に区別する必要がある
// 関数宣言と関数コンストラクターは明確に使い分ける必要がある
// 関数コンストラクターは脆弱性の心配もあるので一般的には使用しない
