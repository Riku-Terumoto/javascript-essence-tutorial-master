/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
// 0 == false,true 正解
// console.log("0 == false", 0 == false);
// (抽象的な等価性は型を考慮しないのでfalseが型変換される 0 === Number(false)で0 === 0となる)

// 0 === false, false 正解
// console.log("0 === false", 0 === false);
// (厳格な等価性は型まで考慮するので、falseとなる)

// "false" == false,true 不正解(正解は"false" == false, false)
// console.log('"false" == false', "false" == false);
// (抽象的な等価性で"false"は文字列になり、truthyな値なので、false)

// "0" == 0, true 正解
// console.log('"0" == 0', "0" == 0);
// （抽象的な等価性なので、"0"は数値の0に変換される）

// Boolean("0") === false, true 不正解(正解はBoolean("0") === false, false)
// console.log('Boolean("0") === false', Boolean("0") === false);
// (Booleanで"0"が真偽値に変換され、trueとなる為、false)

// Boolean(0) === false, true 正解
// console.log('Boolean(0) === false', Boolean(0) === false);
// (Booleanで0がfalseに変換されるので、true)

// !Boolean(0) === false, false 正解
// console.log('!Boolean(0) === false', !Boolean(0) === false);
// (Booleanで0がfalseに変換され、その逆なのでtrueになる よってfalse)

// -1 == false, false 正解
// console.log('-1 == false', -1 == false);
// (数値でfalseになるのは0のみ)

// !10 === false, true 正解
// console.log('!10 === false', !10 === false);
// (「!」はNOT演算子に変換されるので、10はもともとtrueでその逆はfalseなので、結果はtrue)

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 *
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a = 1;

// デフォルト引数を使うとNG
// デフォルト引数は未定義(undefined)のみに作用する為、nullには反応しない
function fn(num) {
  // 0が渡ってきたらfalsyな値になるので、-1となる
  if (num === undefined || num === null) {
    num = -1;
  }
  // num = num || -1;
  console.log(num);
}
fn(a);

/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */

function greeting(name, gre = 'hello') {
  //   gre = gre || 'hello';
  console.log(`${gre}, ${name}`);
}
greeting('Bob', 'hi');
greeting('Bob');
