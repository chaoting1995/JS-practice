// eslint-disable-next-line no-unused-vars
async function deleteUserFromServer(userId) {
  // 連接的伺服器資料網址
  const url = 'http://localhost:5555/users/' + userId;

  // 注意header資料格式要設定，伺服器才知道是json格式
  const request = new Request(url, {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'appliaction/json',
    }),
  });

  const response = await fetch(request);
  const data = await response.json();
  console.log(data);
}
