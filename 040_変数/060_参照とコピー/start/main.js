let a = 'hello';
let b = a;
// bの参照先が変更しただけなので、aの値は変わらず
b = 'bye';
console.log(a, b);

let c = {
  prop: 'hello',
};
let d = c;
// console.log(c, d);
// 再代入でオブジェクトはコピーされたが、中身のプロパティはコピーされず、c,d両変数とも元のプロパティを参照しているため、
// d.prop = 'bye';
// こちらの結果でpropの値が両変数とも変更されていることを確認
// console.log(c, d);

// ただ、dに空オブジェクトを再代入するとdだけが変更されている
// これは、元々dはコピーされたオブジェクトを参照し、コピーされたオブジェクトは元データのプロパティを参照してたが、
// 全く別のオブジェクトを参照先に変更した為に、元データのプロパティを見なくなった
d = {};
console.log(c, d);
