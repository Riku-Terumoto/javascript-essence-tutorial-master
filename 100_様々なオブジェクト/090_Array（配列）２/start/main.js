const arry = [1, 2, 3, 4, 5];

// value,index,array
arry.forEach(function (v, i, arry) {
  console.log(v);
});

const newArry = arry.map(function (v, i, arry) {
  // console.log(v);
  return v * 2;
});

// console.log(newArry);

// trueなら戻る
const filterArry = arry.filter(function (v, i, arry) {
  return i === 1;
});

console.log(filterArry);
