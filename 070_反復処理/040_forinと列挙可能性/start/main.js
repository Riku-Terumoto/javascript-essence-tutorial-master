const s = Symbol();

const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  // 変数をプロパティとして使うにはカッコで囲う
  [s]: 'value4',
};

// オブジェクトのプロトタイプに独自のメソッドを追加
// コンソールで確認するとプロパティmethodは列挙状態である
Object.prototype.method = function () {};

// definePropertyの第一引数にmethodが格納されているObject.prototypeを設定、第二引数はメソッドの名前、第三引数はどのような設定にするのかを渡す
// 以下はenumerableをfalseにしている（列挙させないように）
Object.defineProperty(Object.prototype, 'method', { enumerable: false });

// ディスクリプターを呼び出すとenumerableがfalseとなっているので成功
const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(e);

// オブジェクトのビルトインメソッドは基本的にenumerableはfalseとなっている

for (let key in obj) {
  // キーが自分自身のオブジェクトのプロパティかどうか確認することができる（boolean）
  // if (obj.hasOwnProperty(key)) {

  // keyではプロパティが取れる
  // objのkeyを使って値を取得できる
  console.log(key, obj[key]);
  // }
}
