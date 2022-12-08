// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// ジェネレーター関数を呼ぶことでイテレーターを作成しているイメージ
// const it = gen();

// 作成したイテレータからnextメソッドを呼んであげる
// console.log(it.next()); // value:1,done:false
// console.log(it.next()); // value:2,done:false
// console.log(it.next()); // value:3,done:true
// console.log(it.next()); // value:undefined,done:true
// 3回目で終了しているので、4回目の値はundefinedで出力される

// イテレーターのレクチャーで作成した関数をジェネレーターで作成するとこんなにスッキリする
function* genIterator(max = 10) {
  let i = 0;
  while (i >= max) {
    yield i++;
  }

  return;
}

const it = genIterator();

const a = it.next();
while (!a.done) {
  console.log(a.value);
  a = it.next();
}

const obj = {
  [Symbol.iterator]: genIterator,
};

// for (const i of obj) {
//   console.log(i);
// }

// ジェネレーターの場合はオブジェクトに格納せずにfor文で直接使える
for (const i of genIterator()) {
  console.log(i);
}

// 反復可能オブジェクトに直接ジェネレーターを記述しても大丈夫
// const obj = {
//   *[Symbol.iterator]() {
//     let i = 0;

//     while (i < max) {
//       yield i++;
//     }
//     return;
//   },
// };
