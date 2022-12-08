import { publicFn as fn, publicVal as val } from './moduleA.js';

fn();
fn();
fn();
// Uncaught TypeError: Assignment to constant variable.というエラーが出ている
// これはexportしている値をimportしてくるときにそのまま持ってくるのではなく、値をコピーしてもってきているので、元の値まで変更しようとしていると思われてエラーとなっている（プリミティブ型に限る）
// これをオブジェクトに変更すると問題なくなるs
// console.log(val++);
// オブジェクトはオブジェクトの実態をコピーしているだけで、値はexport先、import先共に変わらないので、エラーとはならない
// 元の値も変更できて、import先でも変更できている
console.log(val.prop++);
fn();
