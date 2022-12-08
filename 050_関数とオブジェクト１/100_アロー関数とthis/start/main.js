window.name = 'John';

// const a = () => console.log('Bye ' + this.name); Bye John

// オブジェクトのメソッドとして実行される場合、thisは呼び出し元オブジェクトとなる
const person = {
  name: 'Tom',
  // hello: function () {
  // ES6から無名関数は省略可能(無名関数がhelloプロパティに格納されているという意味になる)
  hello() {
    console.log('Hello ' + this.name);

    // アロー関数はthisはなしだが、全てグローバルオブジェクトを見るのではなく、一つ上のスコープ(レキシカルスコープ)を見ている為、Tomとなる
    // const a = () => console.log('Bye ' + this.name); // Bye Tom
    // a();
  },
};

// personはグローバルコンテキストで定義されているのでグローバルコンテキストのthisの参照先はwindowとなる
// const person = {
//   name: 'Tom',
// アロー関数はthisが無いので、スコープチェーン（レキシカルスコープ）を辿ってwindowに行き着く
//   hello: () => {
//     console.log('Hello ' + this.name);
//   },
// };
person.hello();
// アロー関数がオブジェクトのメソッドだとしても関数として実行されることになっても、thisはグローバルオブジェクトを見る

function b() {
  // レキシカルスコープはグローバルオブジェクトだからJohn
  const a = () => console.log('Bye ' + this.name);
  a();
}
b();
