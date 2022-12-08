// 引数の初期化でES6から直接記述できるようになった(デフォルト引数)
function hello(name = 'Tom') {
  // 名前が渡ってこなかった場合の初期値設定（初期化）
  // nameがfalsyだった場合はTomを代入
  // name = name || 'Tom';
  console.log('hello ' + name);
}

hello();
// hello('Bob');

// let userName = 'Bob';
let userName;
// nameに値が入っていたらhelloを実行
// if (userName) {
//   hello(userName);
// }

// AND条件を使った場合
userName && hello(userName);
