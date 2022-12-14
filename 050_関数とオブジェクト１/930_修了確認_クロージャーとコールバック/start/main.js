/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 *
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 *
 */
function hello(name) {
  return function () {
    console.log(`hello ${name}`);
  };
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello('Tom'), 1000);

// setTimeoutの第一引数は関数を設定しないと機能しないので、
// 関数の実行を入れたとしても、戻り値が関数ではなかったら機能しない
// その為、戻り値は関数を返す必要がある
