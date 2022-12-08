// 引数には文字列を入れる
// 同じ文字列を入れて比較するとfalseとなる
// これはSymbolが一意になっていることを意味する
const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(s === s2);
// Symbolはプリミティブ型なので、typeofで確認するとSymbolという型になる
console.log(typeof s);

const str = new String('Tom');

console.log(str);

// stringオブジェクトのprototype内で独自で作ったプロパティ
// String.prototype.iterator = function () {};

// interatorというビルトインオブジェクトが追加されたら意図した動作にならなくなる
// その為にSymbolができた

// 以下のようにブラケット内にSymbolを格納したsを入れることでprototypeにSymbolをキーとした関数ができる
// String.prototype[s] = function () {};

// 以下のように名前が重複した関数も登録できるようになる
// ただ、prototype汚染と言ってprototypeの拡張をするのはエンジニアにとって好まれないらしい
// String.prototype[s2] = function () {};

// ECMAScriptでビルトインオブジェクトが追加されても独自処理の担保ができる

String.prototype[s] = function () {
  return 'hello ' + this;
};

const tom = 'Tom';
console.log(tom[s]());

// SymbolはJSエンジン側の人が既存のビルトインオブジェクトを壊さないと為に使用しているらしい
// だからあまり使用しない
