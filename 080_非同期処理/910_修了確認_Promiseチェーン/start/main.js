/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 *
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 *
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 *
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 *
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 *
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 *
 * ※await/asyncで記述してみてください。
 */

// async function myFetch(fileName) {
//   const response = await fetch(`../json/${fileName}`);
//   const json = await response.json();
//   return json;
// }

// async function user() {
//   const user1 = await myFetch('user1.json');
//   return user1;
// }

// user()
//   .then(async function (user1) {
//     const ids = await myFetch(`friendsOf${user1.id}.json`);
//     return ids;
//   })
//   .then(async function (ids) {
//     const userIds = ids.friendIds;
//     const friend = [];
//     for (const id of userIds) {
//       friend[id] = await myFetch(`user${id}.json`);
//     }
//     return friend;
//   })
//   .then(async function (friend) {
//     const lastMessage = [];
//     for (let i = 2; i < friend.length; i++) {
//       lastMessage[i] = await myFetch(`message${friend[i].latestMsgId}.json`);
//     }
//     return lastMessage;
//   })
//   .then(async function (lastMessage) {
//     for (let i = 2; i < lastMessage.length; i++) {
//       const sayName = await myFetch(`user${i}.json`);
//       console.log(`${sayName.name} says: ${lastMessage[i].message}`);
//     }
//   });

// 以下解答
async function myFetch(fileName) {
  const response = await fetch(`../json/${fileName}`);
  const json = await response.json();
  return json;
}

(async function () {
  const me = await myFetch('user1.json');
  console.log(`--${me.name}'s timelin--`);
  const friendList = await myFetch(`friendsOf${me.id}.json`);

  const friendIds = new Set();
  for (const id of friendList.friendIds) {
    friendIds.add(myFetch(`user${id}.json`));
  }
  // 取ってきたjsonはプロミスなので、プロミスチェーンで繋げるときはプロミスのインスタンスを受け取る必要がある
  const friends = await Promise.all(friendIds);

  const msgIds = new Set();
  for (const friend of friends) {
    msgIds.add(myFetch(`message${friend.latestMsgId}.json`));
  }
  const msgs = await Promise.all(msgIds);

  for (const friend of friends) {
    for (const msg of msgs) {
      if (friend.id === msg.userId) {
        console.log(`${friend.name} says: ${msg.message}`);
      }
    }
  }
})();
