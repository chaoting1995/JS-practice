fetch('http://httpbin.org/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify({ message: 'POST資料是否成功' }),
})
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.json.message); //POST資料是否成功
  })
  .catch(function (err) {
    console.log(err);
  });
