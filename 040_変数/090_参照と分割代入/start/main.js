const a = {
  prop: 0,
};
// 基本的に分割代入で宣言する変数と取り出したいプロパティ名は同じにしないと値が取れない
let { prop } = a;
prop = 1;
console.log(a, prop);
// 値を変えたい場合は以下のようにすれば変えれる
// let { prop:b } = a;
// console.log(b);

// 関数での分割代入
// function fn(obj) {
//   let { prop } = obj;
//   prop = 1;
//   console.log(obj, prop);
// }

// 引数で渡ってきたオブジェクトを受け取った時点で分割代入にて取り出す方法
// 引数でpropは変数として使える
// 分割代入で取り出した変数は元のオブジェクトは全く異なるものになる
function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}
fn(a);

// 多階層のオブジェクトの場合
const c = {
  prop1: {
    prop2: 0,
  },
};

// prop1を取り出すとprop2が出力される
// cからprop1を抽出した時点で、変数prop1はprop2を格納しているオブジェクト自体を参照していることになる
// （中身はコピーされていない）
let { prop1 } = c;
console.log(prop1);

// prop2を変更すると元のオブジェクトcにまで影響する（prop1の参照はあくまでprop2のオブジェクト自体でprop2はコピーされていないから）
prop1.prop2 = 1;
console.log(c, prop1);

// まとめると分割代入で取り出したものがオブジェクトだった場合、そのオブジェクトを変更すると、元の多階層オブジェクトまで影響してくる
