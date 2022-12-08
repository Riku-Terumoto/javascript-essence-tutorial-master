const arry = [1, 2, 3, 4, 5];
// 配列の追加
arry.push(6);
// 配列の最後の値を削除する 削除した値は戻り値で帰ってくる
const result = arry.pop(); // shift()は先頭を削除、unshift()は先頭に値を追加できる

// splice()は第一引数に切り取りたいインデックス番号、第二引数は切り取りたい個数
// 上記の条件が戻り値で返ってくる
// 第三引数以下に設定された値は切り取られた所に代入する値になる
// 以下は、1と2を代入することになる
const result2 = arry.splice(0, 3, 1, 2);

// 配列の結合
// const arry2 = arry.concat([6, 7, 8]);
// console.log(arry2);

// 配列の結合（スプレッド構文）
// こちらの方が自由度が高い
const arry2 = [0, ...arry, 6, 7, 8];
console.log(arry2);

// console.log(arry);
// console.log(result);
// console.log(result2);
