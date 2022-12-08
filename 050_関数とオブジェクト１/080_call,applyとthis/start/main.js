function a(name, name1) {
  console.log('hello ' + name + ' ' + name1);
}

const tim = { name: 'Tim' };
const b = a.bind(tim);
// bindは参照先を変えるが実行はしない
b();
// 第一引数でthisの参照先を変えるのと同時に実行まで行う
// 第二引数以下は配列を定義し、複数の値が入っている配列は順番に関数の仮引数に渡る(展開する)
a.apply(tim, ['Tim', 'Bob']);

// applyと同様に第一引数でthisの参照先を変える
// 第二引数以下は関数の引数を定義、譲渡、固定する
// 固定したい引数はapplyとは違い、一つずつ設定しなければならない
a.call(tim, 'Tim');

const array = [1, 2, 3, 4, 5];

// 一番大きい値を取り出す 2が出力
// Math.max(1,2);

// applyで配列を展開し、maxの引数に渡す（ES5までのやり方）
// const result = Math.max.apply(null, array);

// ES6からはスプレッド構文で配列を展開する
const result = Math.max(...array);
// 最大値の5が出力される
console.log(result);
