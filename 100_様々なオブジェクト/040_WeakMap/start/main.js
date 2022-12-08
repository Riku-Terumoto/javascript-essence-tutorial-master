const wm = new WeakMap();
let o = {};
wm.set(o, 'value1');

// o = null;
// o = {};
console.log(wm.get(o));
console.log(wm.has(o));
console.log(wm.delete(o));

// weakMapに設定したオブジェクトを一度上書きしてしまうと二度と使えなくなる
// 上書きされたら過去のものは削除される（ガベージコレクション）

// JSエンジンは定期的にガベージコレクションが働いており、使われていない変数等をメモリから削除して整理している

// weakMapはfor...ofは使えないので、使いたい場合はMapを使う
