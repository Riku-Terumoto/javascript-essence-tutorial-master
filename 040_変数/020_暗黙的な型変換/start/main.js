function printTypeAndValue(val) {
  console.log(typeof val, val);
}

let a = 0;
printTypeAndValue(a);

// データ型が違う場合はどちらかのデータに合わせて、演算をする
// 以下は文字列に合わせている為、出力結果は10となる
let b = '1' + a;
printTypeAndValue(b);

// マイナス記号は数値の演算にしか使われない為、型は数値となる
let c = 15 - b;
printTypeAndValue(c);

// 以下はnullが暗黙的に数値に変換されるので、型はnumberとなる
let d = c - null;
printTypeAndValue(d);

// booleanのtrueは数値の演算に使われた場合は数値の1と見なされ、4が帰ってくる
let e = d - true;
printTypeAndValue(e);

// parseIntで明示的に型を変更することが可能
let f = parseInt('1') + a;
printTypeAndValue(f);
