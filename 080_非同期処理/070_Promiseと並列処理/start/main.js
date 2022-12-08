function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// promiseの並列処理はPromiseのallメソッドを使用する
// 引数には反復可能オブジェクトでpromiseのインスタンスを入れる
// 配列に格納したpromiseのインスタンスを全て実行するまでthenメソッドは処理しない
// Promise.all([sleep(2), sleep(3), sleep(4)]).then(function () {
//   console.log('end');
// });

// promiseのraceは引数で渡されたpromiseオブジェクトの処理がどれか一つでも実行されたら、次のthenに移行する
// この場合はsleep(2)が終わった後にthenが呼ばれ、thenの引数の値はその時点での値が渡ってくる
Promise.race([sleep(2), sleep(3), sleep(4)]).then(function (data) {
  console.log(data);
});

// promiseのallSettledはresolveの引数がpromiseオブジェクトのvalueに入り、プロパティとしてstatusが追加される
// statusはpromiseの状態を表す
// resolve→fullfilled
// reject→rejected
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function (data) {
  console.log(data);
});

// promiseの並列処理をpromiseチェーンで使用するには戻り値に設定する
// promise.allもpromiseオブジェクトを返すため
// 直列処理は縦方向に、並列処理は横方向に処理する
// promise.allが終わるまで、次のthenは呼ばれない

// sleep(0)
//   .then(function (val) {
//     return Promise.all([sleep(2), sleep(3), sleep(4)]);
//   })
//   .then(function (val) {
//     console.log(val);
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });
