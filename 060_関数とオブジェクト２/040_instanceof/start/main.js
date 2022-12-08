function F(a, b) {
  this.a = a;
  this.b = b;
  // オブジェクトのコンストラクターのインスタンスを返すと
  // instansのinstansofはFとは違うのでfalseとなる
  // 逆に以下を全てコメントアウトすると、Fのコンストラクターからインスタンスが生成されるので、
  // instans.__proto__ === F.prototypeはtrueとなる
  // const result = new Object();
  // result.a = 1;
  // return result;
  // return { a: 1 };
}

F.prototype.c = function () {};

const instans = new F(1, 2);

// インスタンスのFがどこで生成されたかを確認する
// 戻り値がオブジェクト以外であればtrueとなり、コンストラクターのインスタンスからの生成
// 戻り値がオブジェクトの場合はfalseとなり、オブジェクトのインスタンスからの生成
console.log(instans instanceof F);
// instansの__proto__とF.prototypeで等価性を確認する
// 戻り値がオブジェクトの場合にはinstansにオブジェクトが格納されていて、Fのprototypeプロパティはコンストラクターの実態なので
// この結果はfalseとなる
console.log(instans.__proto__ === F.prototype);

// argにはオブジェクトまたは配列が渡ってくるものとする
// どっちが渡ってくるかで初期化が変わってくる
function fn(arg) {
  // 渡ってくる値をinstanceofで特定して、初期化を分岐させられる（作成元のコンストラクターを特定する）
  if (arg instanceof Array) {
    arg.push('value');
  } else {
    arg['key'] = 'value';
  }
  console.log(arg);
}

fn({});
fn([]);

// コンストラクターがもっている値（オブジェクト、配列等）によって条件分岐させる為にinstanceofをよく使う
