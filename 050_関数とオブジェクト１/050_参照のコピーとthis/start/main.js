// windowオブジェクトのnameに値を追加するとref()は正常に動作する
window.name = 'john';

const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name);
    a();
    const person = {
      name: 'Tim',
      hello: function () {
        // オブジェクトのメソッドでthisを使った場合は呼び出し元(person)を参照する
        console.log('Hello ' + this.name);
        a();
      },
    };
    person.hello();
  },
};
// personのhelloをrefにコピー
// personのhelloを変数に代入するとhello内の関数がコピーされ、それをref直接が参照している
// ref()で実行すると直接コピーされた関数オブジェクトを実行する為、呼び出し元がpersonではなくなる
// その為、personのname:'Tom'が取れなくなる

// const ref = person.hello;

// 関数を実行してもthis.nameだけが表示されない
// ref();

person.hello();

function a() {
  // 関数内でthisを使った場合はグローバルオブジェクト（window）を参照する
  console.log('Hello ' + this.name); // Hello john
}

// thisがどこを参照しているか分からなくなった時はデベロッパーツールのSourcesで確認する
// thisが表示されていなかったらWatchでthisと入力すれば現在の参照が分かる
