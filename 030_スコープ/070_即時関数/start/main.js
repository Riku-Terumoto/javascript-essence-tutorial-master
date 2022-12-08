// 通常の関数使用方法
function a() {
  console.log('called');
}

a();

// 即時関数
// 丸括弧がないとエラーとなる
(function () {
  console.log('called');
})();

// これは以下のようにしたのと同じになる
// (a)();
// ただ、丸括弧は一種類の変数を囲うと何もしないと言う意味になり、外すことになるので、
// 結果的にa()となる

//  JS中で丸括弧は二つの意味を持つ
// ・関数実行
// ・グループ化

// 以下がグループ化になり、演算の優先度を上げる他に
//
let b = (1 + 2) * 3;
console.log(b);

// 関数式での即時関数
// 関数式であれば丸括弧は無くてもエラーとはならない
// ただ、一般的には即時関数だと分かるように丸括弧を付ける
let c = (function (num) {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;
  // 外で使えないようにする
  function privateFn() {
    console.log('praivateFn is called');
  }
  // 外で使えるようにする
  function publicFn() {
    // publicFnのレキシカルスコープでprivateValを参照できる
    // ただ、cを宣言した時だけ初期化されるので、
    // 0からスタートしてpublicFnが呼ばれるたびに1ずつ増えていく処理が実現可能
    console.log('publicFn is called' + privateVal++);
  }
  // 外で使えるようにするものはオブジェクトリテラルを返す
  return {
    // プロパティと値が一致する場合は省略可能
    publicVal,
    publicFn,
  };
})(10);

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
console.log(c);

// 即時関数をどういった時に使用するかと言うと
// 関数の中の変数や関数を外では使わない、関数を代入した変数を外で使い回す時に使用する
