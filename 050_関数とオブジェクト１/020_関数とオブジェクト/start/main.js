function a() {
  console.log('hello');
}

// a関数にpropというプロパティを追加
a.prop = 0;
// a関数にmethodというプロパティを追加、値には関数を追加
a.method = function () {
  console.log('method');
};
// 通常通り関数を実行するとhelloが出力
a();
// method関数を実行するとmethodと出力
a.method();

// 追加したpropを確認すると0が出力
console.log(a.prop);

// 上記より、関数は実行可能なオブジェクトであることが証明された
// 実行する時は丸括弧で関数オブジェクトを実行している
