// オブジェクト内に関数を記述する場合は無名関数が多い
// オブジェクトを取り出す方法はドット記法以外にもブラケット記法がある
// obj['prop1']
// オブジェクト内にある関数をメソッドと呼ぶ
let obj = {
  prop1: 'value1',
  prop: 'value2',
  prop3: function () {
    console.log('value3');
  },
  prop4: {
    prop5: 'value5',
  },
};
obj.prop3();
console.log(obj.prop1);
console.log(obj.prop4.prop5);
obj.prop6 = 'value6';
console.log(obj['prop6']);
