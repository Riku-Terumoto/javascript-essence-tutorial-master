// 保存するためのキー情報と値を引数に渡す
// 確認方法はデベロッパーツールのApplicationタブのlocalStorageで見れる
localStorage.setItem('key', '1');
localStorage.setItem('key2', '1');
// localStorageに保存した情報はgetItemで取れる
const result = localStorage.getItem('key');
console.log(result);
// localStorageのメソッドは動機的に行われる
console.log('end');

const obj = { a: 0 };
const json = JSON.stringify(obj);
localStorage.setItem('key', json);
const resulst2 = localStorage.getItem('key');
const resulst3 = JSON.parse(json);
console.log(resulst2);
console.log(resulst3);
