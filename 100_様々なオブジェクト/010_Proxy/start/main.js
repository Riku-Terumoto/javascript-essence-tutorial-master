const targetObj = { a: 0 };

const handler = {
  // 引数1はターゲットオブジェクト、引数2はプロパティ名、引数3は新しい値、
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;

    // 値を変更させたくない場合は、エラーを投げる
    // throw new Error('cannot add prop');
  },
  // getはsetで取得した値を返す
  get: function (target, prop, receiver) {
    // receiverはProxyオブジェクトが渡る
    console.log(receiver);
    // 引数のプロパティが見つかったら返す
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return '-1';
    }

    console.log(`[get]: ${prop}`);
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
};

// Proxyをインスタンス化した後、第一引数はターゲットになるオブジェクト、
// 第二引数にはターゲットのオブジェクトが実際に操作されるメソッドを格納したオブジェクト
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
pxy.a;
// console.log(pxy.b);
// delete pxy.a;
