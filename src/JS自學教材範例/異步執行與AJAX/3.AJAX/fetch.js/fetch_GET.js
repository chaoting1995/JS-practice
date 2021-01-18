// Fetch 的 Get 用法

// 跨域問題，就搭配其他屬性例如 mode、credentials 來進行細部設定 ( 但針對非跨域的資料就沒用了 )

// 下方的範例我做了一個簡單的後端程式，透過 fetch 傳遞姓名和年紀的參數，就會看到後端回應一串文字。

const name1 = 'oxxo';
const age = 18;
// 有興趣的可以使用下方的網址測試
const uri = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIF-HUGjJ6jRTOje0E6bVo/exec?name=${name1}&age=${age}`;

fetch(uri, { method: 'GET' })
  .then((res) => {
    return res.text(); // 使用 text() 可以得到純文字 String
  })
  .then((result) => {
    console.log(result); // 得到「你的名字是：oxxo，年紀：18 歲。」
  });
