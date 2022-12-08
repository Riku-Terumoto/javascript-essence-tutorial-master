window.name = 'John';

const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name);
  },
};
person.hello();

function fn(ref) {
  ref();
}
// コールバック関数として他の関数の引数に入れると結果Hello Johnとなる
// これはperson.helloを変数に代入するのと同じでhello内の関数がrefに渡される（コピーされる）
// thisの参照先がfn関数に変わり、関数実行時（コピーされた関数refを直接実行）の参照先はグローバルオブジェクトとなる
fn(person.hello);
