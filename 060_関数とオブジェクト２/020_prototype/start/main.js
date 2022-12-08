function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log(`hello ${this.name}`);
  };
}

// Person内のprototypeプロパティにhelloプロパティを追加する
// Person.prototype.hello = function () {
//   console.log(`hello ${this.name}`);
// };

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
tom.hello();

// なぜ、プロトタイプを通してプロパティを追加するか
// 通常通り、コンストラクターにthis.helloを追加すると
// インスタンス化した際にhelloの関数をコピー（メモリをコピーした分使う）
// するのに対して、プロトタイプで追加した場合はインスタンス化した際に
// プロトタイプの参照をコピーし、helloの関数自体は一つで効率が良いから
