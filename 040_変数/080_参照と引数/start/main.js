let a = 0;

function fn1(arg1) {
  arg1 = 1;
  // aはレキシカルスコープで参照しているので0
  // arg1はaの値0が入ってきて、1が再代入されているので1
  console.log(a, arg1); // 0,1
}

fn1(a);

let b = {
  prop: 0,
};

function fn2(arg2) {
  arg2.prop = 1;
  // bを引数に渡し、arg2.propで1を再代入した際に、大元のbも値が1に変更になっている
  // arg2はlet arg2 = b;なり、コピーされたのはオブジェクト自体なので、中身のプロパティはコピーされず、
  // プロパティの値を変更した際は大元も変更されてしまう
  console.log(b, arg2);
}

// fn2(b);

function fn3(arg2) {
  // オブジェクトを再代入すると大元は変更されず、arg2だけ新しいオブジェクトを保持している
  arg2 = {};
  console.log(b, arg2);
}

fn3(b);
