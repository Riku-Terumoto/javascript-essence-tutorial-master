const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};

// 通常オブジェクトはfor...ofが使えないのでentriesで配列に戻す
// const items = Object.entries(items);

// Objectは全ての継承元のオブジェクトになるので、そのObjectの[Symbol.iterator]を変更したらバグを生原因になるのでダメ（あくまでレクチェー）
Object.prototype[Symbol.iterator] = function () {
  // this（items）のキーを配列で習得
  const keys = Object.keys(this);
  console.log(keys);
  // 初期化
  let i = 0;
  let _this = this;

  // ここのthisはitemsを参照している
  console.log(this);
  return {
    next() {
      // i++を別で書いても良いが、後方インクリメントであれば、値を格納してからプラス一をするので直接書いても大丈夫
      let key = keys[i++];
      // i++;

      // 上記のthisとイテレーター内でのthisは違う（実行コンテキストによってthisの参照先は変わるため）
      // console.log(this);
      console.log(_this);
      return {
        // キーと値を出力
        value: [key, _this[key]],
        // iがkeyの数より多くなったら終了
        done: i > keys.length,
      };
    },
  };
};

for (let [k, v] of items) {
  console.log(k, v);
}
