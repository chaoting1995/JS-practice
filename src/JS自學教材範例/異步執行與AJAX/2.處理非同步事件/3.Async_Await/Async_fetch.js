// async/await 搭配 fetch
// fetch 也是基於 Promise 的 Web API，因此它也同樣能夠使用 async/await 來進行改寫，fetch 與一般 AJAX 套件比較不同之處是在 JSON 回傳後，必須在使用 json() 的方法將資料輸出成 JSON 格式（相關介紹可以參考：MDN Fetch）。

// 當使用 Promise then 時，則會使用 return 來呼叫 json() 方法（箭頭函式縮寫，所以省略了 return），

fetch('https://jsonplaceholder.typicode.com/todos/1')
  // 取得遠端資源，並透過 return 方式回傳鏈接
  .then((response) => response.json())
  // 接收 `response.json()` 轉換的結果
  .then((json) => console.log(json));

// 透過 async 改寫範例如下，結構上更為平整易於閱讀
(async () => {
  // 取得遠端資源
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // 使用 response.json() 將資源轉為 JSON 格式
  const json = await res.json();
  console.log(json);
})();
//------------------------------------------------------//
// Fetch 搭配 async、await、promise.all
const postURL = (name, age) => {
  const uri =
    'https://script.google.com/macros/s/AKfycbxXH6aPsldTBeS41WRMnJEA5Xstc7cYMj6YimDO2Al7H6DkJZiz/exec';
  return fetch(uri, {
    method: 'POST',
    body: encodeURI(
      JSON.stringify({
        name: name,
        age: age,
      })
    ),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
    });
};

postURL('oxxo', 18);
console.log('hello!!!');
postURL('tom', 18);
// 因為 fetch 的特性，可以改成 async 和 await 的寫法，執行後也就能按照我們要的順序進行。

// 最後那段 await 的程式碼，也可以改成 promise.all 的作法，就會先 fetch，然後再出現 hello 的文字，不過也因為 promise.all 無法保證其載入順序，就可能會發生 tom 在 oxxo 之前出現的狀況呦。

await Promise.all([postURL('oxxo',18), postURL('tom',18)]);
console.log('hello!!!');