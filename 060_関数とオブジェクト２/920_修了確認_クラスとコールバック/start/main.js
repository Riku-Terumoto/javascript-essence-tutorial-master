/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 *
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 *
 * ※２通りの方法で実装してみてください。
 */
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
setTimeout(() => {
  bob.hello();
}, 1000);
// bob.helloで呼び出すとthisは関数内で使用されるので、thisの参照先はwindowオブジェクトとなる
// windowオブジェクト内にはnameプロパティはないので、helloだけが表示される
// なので、thisの参照先をbobに固定してあげる必要がある
// bindで固定する
setTimeout(bob.hello.bind(bob), 1000);
