/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;
// console.log(val); // 問題１

// 0 正解（プリミティブ型なので値自体がコピーされる為、元は変わらない）

let obj = {
  prop1: 10,
};
const obj2 = obj;
obj2.prop1 = 9;
// console.log(obj); // 問題２

// prop1:9 正解 (obj2はobjのオブジェクト自体をコピーし、中身はコピーされず同じものを参照している為、prop1を変更すると元も変わる)

function fn1(arg) {
  arg.prop2 = 8;
  return arg;
}
let obj3 = fn1(obj2);
// console.log(obj); // 問題３

// prop1: 9, prop2:　8 正解(obj2もobjもオブジェクトの中身は一つのものを参照しているので、prop2が追加されたら両方に反映される)

function fn2(arg) {
  arg = {};
  return arg;
}
const obj4 = fn2(obj); // 問題４
// console.log(obj); // 問題４

// prop1: 9,prop2:　8 正解(argが{}で初期化されて、全く新しいオブジェクトを参照するようになった
// なので、コンソールにobj4を出力した場合は{}だけになるが、今回は元のオブジェクトobjを出力しているから)
