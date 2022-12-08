// descriptorでのfalseとなっている設定値に背いてもエラーは出なかったがES5よりuse strictが追加され、エラーがでるようになった
'use strict';

// const obj = { prop: 0 };

const obj = {};

// definePropertyでオブジェクトを定義するとdescriptorは全てfalseとなる
Object.defineProperty(obj, 'prop', {
  // 以下、trueにすることで設定可能
  // configurable: true
  value: 0,
  // 以下、trueにすることで書き換え可能となる
  // writable: true,
});

// configurabel falseなのでuse strictを記述していればエラーとなる
delete obj.prop;

// writable falseなので値は書き変わらない
obj.prop = 1;
console.log(obj.prop);

// 以下のビルトインでdescriptorの中身を確認することができる
// 第一引数は対象オブジェクト、第二引数はプロパティ名
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);

// 以下は、コンソール結果
// writable falseは書き換え不能
// configurabel falseは設定変更不能
// enumerable falseは列挙不能
// {value: 0, writable: false, enumerable: false, configurable: false}

// まとめ
// それぞれのプロパティにはディスクリプターというのが存在していて、
// この設定値によって挙動が変わってくる
