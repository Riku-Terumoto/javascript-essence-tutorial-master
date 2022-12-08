// console.log(fetch('users.json')); fetchの戻り値はpromiseが帰ってきているので、thenが使える

fetch('users.json')
  .then(function (response) {
    // console.log(response);
    // fetchで渡ってきたpromise内のresponseのjson()メソッドを実行し、戻す
    // thenも結局はpromiseを返す
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    // 渡ってきたjsonをfor...ofで回し加工して出力する
    for (const user of json) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  });

async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
  for (const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`);
  }
}
fetchUsers();

// webAPIの機能でfetchみたいなPromiseを返すものがしばしばあるので、ログを見たりして実装していく
