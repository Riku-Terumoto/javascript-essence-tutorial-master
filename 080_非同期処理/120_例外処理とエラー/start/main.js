async function fetchUsers() {
  const response = await fetch('./users.json');
  console.log(response);
  if (response.ok) {
    const json = await response.json();
    if (!json.response) {
      throw new NoDataError('no data found');
    }
    return json;
  }
}

// カスタムエラー
class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoDataError';
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    if (e instanceof NoDataError) {
      console.log(e);
    } else {
      console.log('Oops, something went wrong');
    }
    console.error(e);
  } finally {
    console.log('bye');
  }
}
init();

// try {
//   console.log('start');
//   throw new Error('error message');
//   console.log('end');
// } catch (e) {
//   console.error(e);
// } finally {
//   console.log('bye');
// }
