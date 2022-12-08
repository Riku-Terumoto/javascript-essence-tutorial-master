// 通常の関数
function a(name) {
  return 'hello' + name;
}

// 無名関数を代入した関数式
const b = function () {
  return 'hello' + name;
};

// アロー関数
// 引数が一つの場合、丸括弧省略可能
// returnが一行の場合、returnと波括弧を省略可能
// 引数を取らない場合は、丸括弧が必須
// ダミーの変数としてアンダースコアを入れるケースもたまにある
// const c = name => 'hello' + name;
// const c = () => 'hello' + name;
// const c = _ => 'hello' + name;

// console.log(c('Tom'));
