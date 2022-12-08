const arry1 = [1, 2, 3, 4, 5];

// arry2のようにスプレッド構文で作成された配列はarry1とは別の配列
// その為、arry2を変更しても元の配列arry1は影響を受けない
// スプレッド構文と同時に新しい値も組み込み可能（直感的に配列を操作できる）
const arry2 = [0, ...arry1, 6];
console.log(arry2);
console.log(arry1 === arry2); // false

function sum(...args) {
  let ret = 0;
  for (const v of args) {
    // ret = ret + v;
    ret += v;
  }
  return ret;
}
const result = sum(1, 2, 3, 4);
console.log(result);

const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};

Object.prototype[Symbol.iterator] = function* () {
  for (const key in this) {
    yield [(key, this[key])];
  }
};
// シンボルイテレーターの挙動に遵守し、配列で展開される
// const arry3 = [...obj1];

// オブジェクトリテラルにした場合はオブジェクトがただ展開されて格納されただけになる
const arry3 = { ...obj1 };
console.log(arry3);
