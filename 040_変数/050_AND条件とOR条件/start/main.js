const a = 1;
const b = 2;
const c = 3;
// aがtrueなので、bが返される
console.log(a && b); // 結果:2
// a,bがtrueなので、cが返される
console.log(a && b && c); // 結果:3
// aがtrueなので、aが返される
console.log(a || b); // 結果:1
// aがtrueなので、aが返される
console.log(a || b || c); // 結果:1
// グループ化することで確認を明示的にやってくれる
console.log(a || (b && c)); // 結果1
