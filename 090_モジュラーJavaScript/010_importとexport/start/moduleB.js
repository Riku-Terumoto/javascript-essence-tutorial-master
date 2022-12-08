// モジュールの名前を変えたい場合はasを使う
// defaultExportのimport先の名前は任意、通常は名前も一致していないとエラーになる
// アスタリスクに別名をつけて取得するとインポートしたもの全て取れる
import defaultVal, { publicVal as val, publicFn as fn } from './moduleA.js';
import defaultVal, * as moduleA from './moduleA.js';
console.log(val);
console.log(defaultVal);
fn();
