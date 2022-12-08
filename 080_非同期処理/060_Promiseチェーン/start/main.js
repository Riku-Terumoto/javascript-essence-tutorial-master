function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// 非同期の処理を繋げるためにはsleepでインスタンス化したプロミスオブジェクトを返すことでチェーンのようにできる
// sleepの戻り値はプロミスオブジェクトだから、thenでもプロミスを返している
// プロミスを返さないと後続の非同期が処理を待たずに実行されてしまう
sleep(0)
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  });
