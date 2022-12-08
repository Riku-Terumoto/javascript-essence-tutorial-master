// マクロタスク
// タスクキュー（マクロタスク）に格納されるので、グローバルコンテキストの処理が終了したら呼ばれる
setTimeout(function task1() {
  console.log('task1');
});

// マイクロタスク
// Promiseの最初の処理は同期処理、thenは非同期処理なので、task1と同様にグローバルコンテキスト処理終了後に呼ばれるがマクロキューよりマイクロタスクキューの方が優先度が高いためtask1より早く処理される
new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

// グローバルコンテキスト
console.log('global end');

// 順番はpromise,global end,job1,task1

// イベントループはマイクロタスクキューから確認して、無かったらマクロタスクキューを確認する

// マイクロタスク
// ⇨順番が回ってきたら全てのジョブを実行する
// Promise,queueMictotask,MutationObserber

// マクロタスク
// ⇨順番が回ってきたら一つずつタスクを実行する
//   ⇨タスクを一つ実行後にマイクロタスクに処理が追加されたらそちらが優先される
// setTimeout,setInterval,requestAnimationrme...etc
