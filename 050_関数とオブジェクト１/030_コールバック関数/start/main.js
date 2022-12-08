function hello(name) {
  console.log('hello' + name);
}

function bye(cb) {
  console.log('bye');
}

function fn(cb) {
  cb('Tom');
}
// 関数はオブジェクトなので関数の引数に別の関数を渡すことができる
// これがコールバック関数となる
fn(hello);
fn(bye);
// 無名関数を渡すこともできる
fn(function (name) {
  console.log('hello' + name);
});

// setTimeoutはJavaScriptエンジンにて用意されているWebAPIsの一つ
// setTimeoutはコールバック間酢を実行する時に引数なしで実行される
setTimeout(hello, 2000);
