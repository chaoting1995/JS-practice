// eslint-disable-next-line no-unused-vars
async function addUserToSever() {
  const newData = {
    //    name, email, username, password
  };

  // 連接的伺服器資料網址
  const url = 'http://localhost:5555/users/';

  // 注意資料格式要設定，伺服器才知道是json格式
  const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  });

  console.log(JSON.stringify(newData));

  const response = await fetch(request);
  const data = await response.json();

  console.log('伺服器回傳的json資料', data);
  // 要等驗証過，再設定資料(簡單的直接設定)
}

//-----------------------------------------------------//

// eslint-disable-next-line no-unused-vars
async function updateTotalToServer(value) {
  const newTotal = {
    //   total: total + value
  };

  const url = 'http://localhost:5555/counter/1';

  const request = new Request(url, {
    method: 'PUT',
    body: JSON.stringify(newTotal),
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  });

  try {
    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    console.log(data);
    // 驗証成功後再設定…
    // setTotal(total + value);
  } catch (error) {
    // setError(error);
  }
}
