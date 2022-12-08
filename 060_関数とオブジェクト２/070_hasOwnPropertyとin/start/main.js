function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function () {
  console.log('Object: hello ' + this.name);
};

const bob = new Person('Bob', 18);
// const result = bob.hasOwnProperty('name');
// hasOwnPropertyはあくまで自分自身(Person)に設定されているプロパティ名を探すのでObject.prototypeは対象外
const result = bob.hasOwnProperty('hello');
console.log(result);

// inはbobというオブジェクトのプロパティまたはそのオブジェクトが保持しているprototypeのプロパティまたはメソッドが格納されているかを探せる
console.log('name' in bob);
