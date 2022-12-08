function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// awaitが非同期であると解らせるために関数の最初にasyncは必須
// awaitは必ずasync関数コンテキスト内で実行する必要がある
async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  // resolveの引数valがawaitに渡ってくる
  console.log(val);
  return val;
  // throw new Error();
}

// async関数のinitを実行するとPromiseが返される
// その為、thenメソッドをつなげて書くことができる
// init();

// initでvalを返すと、thenにvalが渡される
init()
  .then(function (val) {
    console.log('hello' + val);
  })
  .catch(function (e) {
    console.error(e);
  });
// initでerrorを投げるとcatchにつながる

// async/awaitは内部でPromiseとなっているので使い方は似ている

// sleep(0)
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });
