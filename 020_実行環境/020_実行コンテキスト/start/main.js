// この中に書かれたものはグローバルコンテキスト

// 外部変数
let a = 0;

function b() {
  // この中の処理は関数コンテキスト
  // thisやargumentsは実行される環境によって取得する値が変わってくる
  console.log(this, arguments, 0);
}

console.log(a);
b();
