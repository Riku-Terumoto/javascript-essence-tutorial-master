function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log('button clicked');
});

// sleepで三秒間待ってコンソール出力させる
// その間はメインスレッドを占有しているので、ボタンをクリックしても処理が始まらない
// sleep(3000);

// webAPi内のsetTimeoutの中でsleepを行うとボタンがクリックできる
// 正確にはsleep実行前の2秒間と3秒後にクリックできる
setTimeout(function () {
  sleep(3000);
}, 2000);
