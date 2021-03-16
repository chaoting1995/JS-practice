// eslint-disable-next-line no-unused-vars
async function getUsersFromServer() {
  // 連接的伺服器資料網址
  const url = 'http://localhost:5555/users';

  // 注意header資料格式要設定，伺服器才知道是json格式
  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'appliaction/json',
    }),
  });

  const response = await fetch(request);
  const data = await response.json();
  console.log(data);
}

//-----------------------------------------------------//

// eslint-disable-next-line no-unused-vars
async function getUserFromServer(userid) {
  // 連接的伺服器資料網址
  const url = 'http://localhost:5555/users/' + userid;

  // 注意header資料格式要設定，伺服器才知道是json格式
  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'appliaction/json',
    }),
  });

  const response = await fetch(request);
  const data = await response.json();
  console.log(data);
}

//-----------------------------------------------------//

// eslint-disable-next-line no-unused-vars
async function getTotalFromServer() {
  const url = 'http://localhost:5555/counter/1';

  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  });

  try {
    const response = await fetch(request);
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();
    // data會是一個物件值
    //console.log(data)
    // setTotal(data.total);
  } catch (error) {
    // setError(error);
  }
}
