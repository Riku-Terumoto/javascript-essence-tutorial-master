const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
  console.log('task2 done');
});

function a() {
  setTimeout(function task1() {
    console.log('task1 done');
  }, 4000);

  const startTime = new Date();
  while (new Date() - startTime < 2000);

  console.log('fn a done');
}
// aを実行すると同期処理が2秒後に実行され、次にsetTimeoutが呼ばれる(4秒経っても同期処理が終わるまで待つ)
// ブラウザ更新後にボタンをクリックすると同期処理の後にボタンイベントが呼ばれる
a();
