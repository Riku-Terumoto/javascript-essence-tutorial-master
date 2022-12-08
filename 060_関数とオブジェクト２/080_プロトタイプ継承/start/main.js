function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log('hello ' + this.name);
};

function Japanese(name, age, gender) {
  // callメソッドでPersonを呼び、第一引数のthisはJapaneseになっているようにしたいのでそのまま渡す（関数コンテキストの中なので）
  // 関数コンテキストのthis(Japanese)がPersonに渡っていき、this.nameとthis.ageが宣言される
  Person.call(this, name, age);
  this.gender = gender;
}

// Object.createでPerson.prototypeを生成し、Object.prototypeに入れる
// 挙動としては空のPersonオブジェクトを生成し、その中のprototypeにhelloを入れる
// これがプロトタイプ継承となる
Japanese.prototype = Object.create(Person.prototype);

// 上書きも可能
Japanese.prototype.hello = function () {
  console.log('Konnichiwa ' + this.name);
};

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.hello();
