const person = {
  name: 'Tom',
  hello: function () {
    // thisがオブジェクトのpersonを参照している
    // personのname:'Tom'がthis.nameになる
    console.log('Hello' + this.name);
    // thisはpersonを参照しているので、直接personでもあり
    // 参照できている理由はpersonはレキシカルスコープだから(基本的にはthisを使う)
    // console.log('Hello' + person.name);
  },
};

// まず、JSがpersonオブジェクトを探して、見つかり次第、中身のhelloを探して参照する
// 呼び出し元はpersonとなる オブジェクト内のhelloを直接呼ぶとpersonは呼び出し元ではなくなる
person.hello();

// 実行コンテキストによってthisの参照先は変わる
