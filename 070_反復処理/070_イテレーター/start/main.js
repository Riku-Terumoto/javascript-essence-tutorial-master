function genIterator(max = 10) {
  let i = 0;

  // イテレーター
  return {
    next: function () {
      // max(上限値)に達したらループを止める
      if (i >= max) {
        // doneがtrueの場合はvalueを設定する必要なし
        return {
          done: true,
        };
      } else {
        return {
          done: false,
          value: i++,
        };
      }
    },

    // 返却するオブジェクト
    // return {
    // doneをfalseとすることでループを継続させる
    // done: false,
    // インクリメント
    // value: i++,
    // };
  };
}
const it = genIterator(10);
let a = it.next();
// while文でdoneがfalseならループ継続、10回回したら上限値に達するのでループ終了
while (!a.done) {
  // console.log(a.value);
  // 毎回初期化してwhileの条件を見させないと無限ループとなる
  a = it.next();
}

// 呼ぶごとにvalueの値が増えていく
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const obj = {
  // 関数をオブジェクトの値に設定するときは上限値を設定していない状態となってしまうので、宣言している関数にデフォルト値を渡す必要がある
  // 無限ループとなる
  // 上限値を変更したい場合はbindで渡す引数を変更する
  // thisの第一引数は使わないので、nullとする
  [Symbol.iterator]: genIterator.bind(null, 15),
};

for (const i of obj) {
  console.log(i);
}
