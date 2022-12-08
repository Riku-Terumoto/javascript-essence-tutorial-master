// 'use strict';

// 以下のaはstrictモードだとエラーになる
// モードを有効にしないとaはwindowオブジェクトに登録されることになる
// a = 0;

// 関数コンテキスト内でも同様にwindowオブジェクトに登録される
// ただ、これは意図しないバグを産みかねない（windowオブジェクトはビルトイン等が入っている為）
// モジュールの場合は常にstrictモード
function fn() {
  // a = 0;
  // implements, interface, packege等の予約語は将来バージョンアップした際に使われる可能性があるので、変数で宣言するとエラーになる
  return this;
}
// console.log(a);
