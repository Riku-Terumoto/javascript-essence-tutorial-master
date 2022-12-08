// プロトタイプチェーン;
function Person(name, age) {
  this.name = name;
  this.age = age;
  // 自身のプロパティなので優先度が一番高い状態
  this.hello = function () {
    console.log('OwnProperty: hello');
  };
}

// 関数オブジェクトにはprototypeがあり、それは多重形成となっている
// まずはPersonコンストラクターのprototypeがあり、その下にObjectのprototypeがある
// 以下は、その二つに無名関数を設定したことになる
// prototypeの優先度は階層の浅い順に呼び出される

Person.prototype.hello = function () {
  console.log('Person:hello ' + this.name);
};
Object.prototype.hello = function () {
  console.log('Object:hello ' + this.name);
};

// 流れは以下↓
// まず、Person内でhelloを探し、無かったらprototype内を探す
// それでも無かったらprototype内にあるObject.prototype内にhelloを探しに行く
// 最終的に見つからなかったらundefinedになる
const bob = new Person('Bob', 18);
bob.hello();

// bob(Person自身)⇨Personのprototype⇨Objectのprototype
// Objectのprotype内にあるhasOwnPropertyを使ってみる
// hasOwnPropertyはPerson自身にプロパティの名前があるか探すメソッド
// 引数に探したいプロパティ名を文字列で渡す
const result = bob.hasOwnProperty('name');
console.log(result); //true
