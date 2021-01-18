// 六角的課程中有提供一個 POST 方法的練習(因為想不到哪裡可以測試 POST)，下方的程式碼就可以對測試的機器發送 POST，然後接受不同的結果 (這段 POST 並不會真的儲存帳密，只會將資料存在伺服器的記憶體，不久後會自動釋放)。

// 使用 fetch() 做 POST時，由於它並沒有向一些框架一樣包那麼徹底，所以有些地方還是需要做調整，其中 body 所送出的資料必須先轉純字串後才能送出，以下範例就是一個簡單的 POST行為

let url = 'https://hexschool-tutorial.herokuapp.com/api/signup';
fetch(url, {
  method: 'POST',
  // headers 加入 json 格式
  headers: {
    'Content-Type': 'application/json',
  },
  // body 將 json 轉字串送出
  body: JSON.stringify({
    email: 'lovef1232e@hexschool.com',
    password: '12345678',
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log('錯誤:', err);
  });

//----------------------------------------------------//

//   Fetch 的 Post 用法
// 使用 POST 方法可以搭配 body 屬性設定傳遞參數，下方的測試網址，可以接收 name 和 age 所組成的物件，當網址接收到要求後，就會回應一個 json 物件，比較需要注意的是，如果是傳遞「中文」可能會出現亂碼，這時可以使用encodeURI來做轉碼，且要透過JSON.stringify來轉換成 string 方式傳遞。

const uri =
  'https://script.google.com/macros/s/AKfycbxXH6aPsldTBeS41WRMnJEA5Xstc7cYMj6YimDO2Al7H6DkJZiz/exec';
fetch(uri, {
  method: 'POST',
  body: encodeURI(
    JSON.stringify({
      name: 'oxxo',
      age: 18,
    })
  ),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
})
  .then((res) => {
    return res.json(); // 使用 json() 可以得到 json 物件
  })
  .then((result) => {
    console.log(result); // 得到 {name: "oxxo", age: 18, text: "你的名字是 oxxo，年紀 18 歲～"}
  });
