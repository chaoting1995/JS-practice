// 用 axios 發送 GET Requests

const url = 'www.example.com/api/';
axios
  .get(url)
  .then(function (response) {
    // 1.handle success
    console.log(response);
  })
  .catch(function (error) {
    // 2.handle error
    console.log(error);
  })
  .then(function () {
    // 3.always executed
  });
// 用 then() 及 catch() 來處理不同的狀況：

//then()函式負責處理成功接收到的 response
//response 參數就是接收到的回應，而你所需的資訊則放置在 response.data 裡面。

//catch() 函式負責處理發生錯誤的狀況，也就是 error。

//第二個 then() 則是一個選擇性的元件，無論 request 成功與否，它都將被執行。

axios
  .get('https://api.lyrics.ovh/v1/coldplay/yellow')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
