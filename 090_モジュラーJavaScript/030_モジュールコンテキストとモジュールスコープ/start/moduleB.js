// インポートでただ単に指定したファイルを実行したい場合はfromは書く必要はない
import './moduleA.js';

console.log(this); // undefined
const a = 0;

function fn() {
  console.log(this);
  console.log(a);
}

fn(); //undefined

// モジュールコンテキストでのthisは使用できないが、オブジェクト内でのthisは使用できる
const obj = {
  fn,
};

obj.fn();

console.log(window.d);

// モジュールスコープはこのファイルの直下に記述されたものであり、このファイル内でしか使えない
// 外で使う場合はこれまで通り、import,exportで明示的にする必要がある
