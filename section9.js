// 反復処理・・・繰り返したい時に使用する
// 演算子・・・値（オペランド）をもとに処理を行い、結果を返す記号

// 演算子の優先順位
// 0~20がある 数値が低い順に優先順位が高い
// 以下を参照
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 列挙可能性・・・プロパティが持つ設定値（ディスクリプター）に含まれるenumerableのこと
// enumerableがtrueの場合はfor inの値で列挙されるがfalseの場合はだめ

// for...in・・・列挙可能プロパティに対して順不同で反復処理を実行する
// ※プロトタイプチェーン内も列挙対象となる
// for...inを使うループの場合に自分自身に設定されているプロパティを列挙したい場合は以下を使う
// Object.hasOwnProperty()

// Symbolとfor...in
// Symbolで定義したプロパティはfor...inで列挙対象にならない

// for...of
// イテレータを持つオブジェクトの反復操作を行う

// イテレータ
// 反復操作を行う際に使用するオブジェクト

// Map, Set
// データを管理するための入れ物⇨コレクション

//          Object | Map
// キー   | 文字列 | 制約なし
// for..in| ●     | ×
// for..of| ×      |●

//          Array | Map
// 重複値 | ●     | ×
// for..in| ●     | ×
// for..of| ●     | ●

// イテレーター
// 反復操作を行う際に使用するオブジェクト
// ⇨決められたルールが存在する

// 最初のreturnから下がイテレーターになる
// イテレーターは必ずnextメソッドを保持しなくてはならない
// nextメソッドはreturn値としてオブジェクトを返す必要がある
// そのreturn値にはdoneというループを継続するかどうかのbooleanと
// 返却する値を持たせる

// function genIterator() {
//   return {
//     next: function() {
//       return {
//         done: true /false,
//         value: 値
//       }
//     }
//   }
// }

// ジェネレーター
// イテレーターを生成する特殊な関数

// functionの後ろにアスタリスクをつけることでジェネレーターということを示している
// yield(イールド)は特殊なキーワードになり、イテレーターを簡易的に表現していることになる
// 上記のイテレーター部分をyieldで表現できていることになる

// function* gen() {
//   if(ループ継続) {
// done:false,value:値を示している
//     yield 値;
//   } else {
// done:true,value:値を示している
//     return 値;
//   }
// }

// スプレッド演算子
// 反復可能や列挙可能オブジェクトの展開を行う

// 残余引数（RestParameter）
// 実引数に渡された変数を配列にまとめる
// function(...args)

// ※スプレッド演算子はイテレーターの操作に従う
