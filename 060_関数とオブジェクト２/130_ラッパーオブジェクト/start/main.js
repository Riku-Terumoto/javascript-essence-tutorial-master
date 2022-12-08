// const a = new String('hello');
// 通常はStringオブジェクトは使用せずに宣言する
// それでもStringオブジェクトのビルトインオブジェクトは使用できる
// それは通常の宣言はStringオブジェクトで宣言していることになるから
// const a = 'hello';

// この形でも呼び出せる
const a = 'hello'.toUpperCase();
// toUpperCaseは大文字にする
console.log(a.toUpperCase());

// const b = new Number(100);
// Numberオブジェクトも同様に数字だけでもビルトインオブジェクトは使用可能
// それは通常の宣言はNumberオブジェクトで宣言していることになるから
const b = 100;

// toExponentialは10の二乗として表示される(jsでは1e+2が10の二乗となる)
console.log(b.toExponential()); // コンソールに表示されるNumberのPrimitiveValueはJSエンジンが内部で使用している値

// まとめ
// プリミティブ型を宣言した時に暗黙的にラッパーオブジェクトが呼ばれている
