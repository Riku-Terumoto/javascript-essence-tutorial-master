// グループ化は掛け算、割り算をより優先される
// let a = (1 + 2) * 3;
let a = 0;
// console.log(a);

// インクリメント演算子
// 前後によって挙動が変わる
// 後につけるとまず、左辺の値を返してから1プラスする
// その為、以下はa(0)がbに代入されてからプラス1される
// let b = a++;
// console.log(b); // 0
// console.log(a); // 1

// 前につけるとプラス1されてからbに代入されるのでa,bともに1となる
// let b = ++a;
// console.log(b); // 1
// console.log(a); // 1

function fn() {
  let a = 0;
  // 後方インクリメント演算子だとaをプラス1する前に返してしまう
  return a++;
}

// fn()は0で、falsyな値になる
// その逆はtruthyな値なので、1になり、1*5は5になる
// fn()はbooleanになるが、暗黙の型変換で数値に変換されている
// not演算子は掛け算より優先度は高い
console.log(!fn() * 5); // 5
// グループ化をすると、0*5は0でfalseなので、not演算子でtrueとなる
console.log(!(fn() * 5)); // true
