console.log('ESmodule called');

let privateVal = 1;
// プリミティブ型をimport先で変更しようとするとエラーが出る為、オブジェクトに変更する
// export let publicVal = 10;
export let publicVal = { prop: 10 };

export function publicFn() {
  console.log('publicFn called: ' + publicVal.prop);
}

function privateFn() {}
