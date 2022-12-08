function Person1(name, age) {
  this.name = name;
  this.age = age;
}

// Person1のコンストラクター関数（オブジェクト）にhelloというプロパティを追加して、インスタンス化せずに呼び出す
// この方法はclassのstaticと同じとなる
Person1.hello = function () {
  console.log('hello');
};
Person1.hello();

// Person1のprototypeのオブジェクトのnameに設定する
// ディスクリプターで設定されるgetとsetのことをgetter、setterという
Object.defineProperty(Person1.prototype, 'name', {
  get: function () {
    // getter、setterは何らかの処理を挟んで実行したい場合に用いられる
    console.log('hello');
    return this._name;
    // 文字列にするとBobではなく、helloが帰ってくる
    // return 'hello';
  },
  // valに渡ってくる値は書き換えたTomが渡される
  set: function (val) {
    this._name = val;
  },
});
const p1 = new Person1('Bob', 23);
// インスタンス化したオブジェクトのプロパティnameを取りいくようにするとgetが呼ばれる
// コンストラクターの実引数にBobを設定しているので、this._nameにBobが入り、getter経由で取得している
console.log(p1.name);

// 値を書き換えてp1.nameを呼ぶとsetter経由で取得することができる
p1.name = 'Tom';
console.log(p1.name);

class Person2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // 以下は上記の使い方と一緒
  get name() {
    console.log('hello');
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  static hello() {
    console.log('hello');
  }
}

const p2 = new Person2('Bob', 23);

// staticで定義したhelloを呼び出す
// インスタンス化を行わずに呼び出せるメソッドを静的メソッド、スタティックメソッド呼ぶ
Person2.hello();
// インスタンス化をしていないのでPerson2はオブジェクトを生成されていない
// その為、thisは使用できない
