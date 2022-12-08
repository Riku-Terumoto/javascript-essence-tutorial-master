class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
console.log(obj1);

// クラスのインスタンス化はReflectのコンストラクトメソッドを使用しているのと同様な機能になる
// Reflect.construct

// 以下はnew演算子を使用してインスタンス化をしたことと同じことになる
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);

// 演算子を使用したところを関数形式で使用できる

// in演算子はReflectのハズメソッドと同様の機能となる
console.log('a' in obj1);
console.log(Reflect.has(obj1, 'c'));

// 演算子は簡略化されてコードの可読性が上がって良いが、
// 時に関数形式で行いたい場面がある
// 例えば、コールバックを渡したいときにReflectは直接渡せるが、演算子は関数で囲わなくてはならない（作業が増える）

// Object.definePropertyのような静的メソッドはReflectに移植できる
// 移植したら、以降同様の静的メソッドが追加されたらReflectの方に今後、追加される仕様でECMAは動いている
// Reflect.defineProperty

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    return this._hello();
  },
};

tom.hello;
// 関数表記で記載すると以下
Reflect.get(tom, 'hello', bob);
