new Promise(function (resolve, reject) {
  console.log('promise');
  // resolve('hello');
  // reject('bye');

  // promiseの処理が終わるまでthenより下の処理は始まらないので、promiseに非同期処理を組み込むことができる
  // 以下は1秒後にresolveが呼ばれ、その後にthen以下の処理が走ることになる(rejectも同様)
  setTimeout(function () {
    resolve('hello');
  }, 1000);
})
  .then(function (data) {
    console.log('then:' + data);
    // rejectはpromiseのコールバック内でしか使えない その為、promise以外の場所でエラーハンドリングをしたい場合はthrowでエラーインスタンスを投げる必要がある
    // throw new Error();
    return data;
  })
  .then(function (data) {
    console.log('then:' + data);
    return data;
  })
  .catch(function (data) {
    console.log('catch:' + data);
  })
  .finally(function (data) {
    console.log('finally');
  });

console.log('global end'); //thenより先に実行されている為、thenは非同期処理
