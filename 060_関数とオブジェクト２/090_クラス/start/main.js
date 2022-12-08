// クラスで宣言したコンストラクター関数とメソッドは今までやってきたことと同じ
// クラスの内部で起きていることはprototypeで行われる
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
console.log(bob);

// ES6以前は以下の方法でインスタンスを作成していたが、これからはクラス表記で作る

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function () {
//   console.log('hello ' + this.name);
// };
