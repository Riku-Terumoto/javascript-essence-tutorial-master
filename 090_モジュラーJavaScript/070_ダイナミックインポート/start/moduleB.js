// 通常のインポート
import { publicVal, publicFn } from './moduleA.js';

publicFn();

// ダイナミックインポート
// importメソッドを使用し、引数にはパスを指定、そして戻り値はpromiseになる
// promiseが帰ってきているので、thenで繋げることができる
// thenに渡ってくるのはexportしたものがオブジェクトとして渡ってくる
import('./moduleA.js').then(function (module) {
  console.log(module);
  module.publicFn();
});

// promiseが帰ってくるので、async/awaitで書き換え可能
async function fn() {
  const module = await import('./moduleA.js');
  module.publicFn();
}
