// aのsetTimeoutは時間は設定していないので、待機は発生しないが、コールスタックの処理が終わるまでタスクキューで待っていることになる
// aの引数にbを渡すと
function a(b) {
  setTimeout(function task1() {
    console.log('task1 done');
    b();
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a(b);

// b();
