// increment関数を呼び出したら値が1ずつ足されるようにしたい

// 初期化を外に出したのは良いが、numがどこからでも呼び出せてしまうと言うデメリットがある
// increment関数を使用せずにnumの値が変わってしまうので、意図しないバグを呼ぶ
// let num = 0;

// increment(); // 1
// increment(); // 2
// increment(); // 3

// Factoryという変数名は何かを生成する時に使うことが多い
function incrementFactory() {
  // 関数内にnumの初期化処理をしてしまうと0スタートになってしまうので、グローバルスコープに記述し、最初の一度だけ初期化する方法にする
  // let num = 0;

  // 関数スコープのスコープチェーンに初期化を記述することで外部からの変更を防げるし、incrementから参照可能
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }

  // JSでは関数自体も返却可能なので、処理が終わったincrementを返す
  return increment;
}

// incrementFactoryを実行し、戻り値をincreに代入
// つまりはincrementFactoryの戻り値はincrement関数となっているので、そのまま返る
// numの初期化処理はconstで宣言した時にのみ実行され、外部からnumは参照できない為、条件は見たしている
// 最初のconstは中のincrement関数は実行されずに返却されている
const incre = incrementFactory();

// 返却されincreに代入されたincrement関数を実行している
incre();
incre();
incre();
incre();

// このように外側で初期化が行われるとそれ以降は数字が最初からになってしまう
// 一意の数値にしたい場合とかは不便
// num = 0;
// incre();

// その為、外側に記述するが変更できないようにクロージャーを使って対処する
