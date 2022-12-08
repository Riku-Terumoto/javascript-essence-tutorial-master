window.name = 'John';

const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name);
  },
};
person.hello();

// bindの第一引数で渡したオブジェクトをhello内で実行されるthisの参照先として設定（これはメモリにコピーされる）し、helloTomに代入した
// その為、helloTomで実行した際のthisの参照先はpersonで固定となる
const helloTom = person.hello.bind(person);

function fn(ref) {
  ref();
}

fn(helloTom);

function a(name) {
  // このまま実行するとthisはグローバルオブジェクトを参照する
  //   console.log('hello ' + this.name);
  console.log('hello ' + name);
}

// ここで新しいオブジェクトを参照先に設定する（コピーされたオブジェクトを参照先に固定する）
// const b = a.bind({ name: 'Tim' });

// 第二引数以下を関数の実引数を渡すことによって仮引数を束縛することもできる
// 束縛なので、関数実行時に実引数を指定したとしてもbindで設定した値が優先される
const b = a.bind(null, 'Tim');

// 参照先が設定したオブジェクトなので、結果はTimとなる
b();
