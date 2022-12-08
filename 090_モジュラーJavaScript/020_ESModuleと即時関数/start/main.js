const moduleA = (function () {
  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + publicVal);
  }

  function privateFn() {}

  // publicValはmoduleAに格納された時点で値自体がコピーされてオブジェクトが生成される為、外でpublicValを1づつ増やしても中のpublicValは増えない
  return {
    publicFn,
    publicVal,
  };
})();

// moduleAオブジェクトの中身を分割代入で引数に渡す
// moduleAをただ単に渡すでもよし(その場合はmoduleAから実行する)
const moduleB = (function ({ publicFn: fn, publicVal: val }) {
  // 引数がmoduleAの場合
  // moduleA.publicFn();
  // moduleA.publicFn();
  // moduleA.publicFn();
  // console.log(moduleA.publicVal++);
  // console.log(moduleA.publicVal++);
  // moduleA.publicFn();

  // 引数が{publicFn, publicVal}の場合
  // publicFn();
  // publicFn();
  // publicFn();
  // console.log(publicVal++);
  // console.log(publicVal++);
  // publicFn();

  // 引数が{publicFn:fn, publicVal:val}の場合(分割代入で別名をつけている)
  fn();
  fn();
  fn();
  console.log(val++);
  console.log(val++);
  fn();
})(moduleA);
