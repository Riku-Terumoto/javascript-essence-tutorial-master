class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    // superメソッドの前に継承されたクラスのthisを使うとエラーとなる
    // superは親のメソッドも呼び出される
    // 基本的には関数コンテキスト内でしか呼べない（一部例外は以下）
    super(name, age);
    this.gender = gender;
  }

  hello() {
    // 以下はPersonのhelloメソッドを呼び出している
    // メソッドを呼び出す際は順番は関係なし
    super.hello();
    console.log('Konnichiwa ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();

const american = {
  hello() {
    console.log('hello ' + this.name);
  },
};

const bob = {
  name: 'Bob',
  hello() {
    // 以下はamericanのhelloを呼び出している
    super.hello();
  },
};
// prototype継承をsetPrototypeOfでやる
// setPrototypeOfは第一引数にオブジェクト、第二引数は継承させたいオブジェクト
// 第二引数のamericanがbobのプロトタイプに入る
Object.setPrototypeOf(bob, american);
bob.hello();

// まとめるとsuperは基本的に継承されたクラスの関数コンテキスト内で使用するもの
// 例外としてオブジェクトのプロトタイプ継承はクラスの継承と同様なので、使用可能となる
