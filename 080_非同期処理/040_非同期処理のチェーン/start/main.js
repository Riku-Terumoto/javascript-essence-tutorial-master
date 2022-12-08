function sleep(callback, val) {
  setTimeout(function () {
    console.log(val++);
    callback(val);
  }, 1000);
}

// 1回目のsleepのcallback関数に渡ってきたvalを2回目のsleepの引数に設定（レキシカルスコープ）
// sleepで後方インクリメントされた数値が1秒ごとに実行されていく
// 非同期のチェーンを作れる
// 入れ子にしているのは、レキシカルスコープを利用して最終的なvalの数値を引き継ぎたい為
sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {
      sleep(function (val) {
        sleep(function (val) {}, val);
      }, val);
    }, val);
  }, val);
}, 0);
