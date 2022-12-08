function F(a, b) {
  this.a = a;
  this.b = b;
  // コンストラクター関数の戻り値がオブジェクトになっている場合
  // return {};
  // 戻り値をプリミティブ型にするとthisのa,bが入ったオブジェクトとなる
  // return 1;
}

// prototypeにcの無名関数を入れ、コンソールで確認するとちゃんと入っている
F.prototype.c = function () {};

// const instance = new F(1, 2);

// 第二引数以降は何が渡ってくるかFのコンストラクター関数によって変わるのでRESTパラメータを使用(配列)
function newOpe(C, ...args) {
  // _thisはFのprototype内の値を__proto__にコピーされた空のオブジェクト格納
  const _this = Object.create(C.prototype);
  // 空のオブジェクトが入った_thisはFのthisを指している
  // applyでCの参照先をFのthisに固定し、第二引数には引数で受け取った配列をCに渡し、実行
  const result = C.apply(_this, args);
  // Fにreturnがないからundefined
  // _thisはFのthisを参照しているからFのthisの値が入ったオブジェクトが入っている
  // console.log(result, _this);

  // Fの戻り値がオブジェクトだった場合はresultもそのオブジェクトとなるので確認
  console.log(typeof result);

  // typeofはnullの場合もオブジェクトと返ってくる
  // resultがオブジェクトであり、nullでない場合は空のオブジェクトが返ってくる
  // Fの戻り値がオブジェクトではない、または戻り値が定義されていない場合は、ifは無視され、_thisが帰る
  if (typeof result === 'object' && result !== null) {
    return result;
  }
  // Fのthisが入ったオブジェクトが返される
  return _this;
  // console.log(args);
}

const instance = new newOpe(F, 1, 2);
console.log(instance);
