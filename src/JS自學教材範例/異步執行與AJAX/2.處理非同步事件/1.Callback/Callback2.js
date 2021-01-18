// Callback Function
// Callback function 是一個被作為參數帶入另一個函式中的「函式」，這個被作為參數帶入的函式將在「未來某個時間點」被呼叫和執行 — 這是處理非同步事件的一種方式。
// 常見的例子:
//// 使用瀏覽器所提供的 setTimeout() 或 setInterval()
//// DOM 的事件監聽
//// 從資料庫或遠端伺服器請求資料

// Callback Chaining
// Callback 缺點

//--------------------------------------------------------------------//
// 使用瀏覽器所提供的 setTimeout() 或 setInterval()

// 請 setTimeout() 在未來某個時間點（三秒後）呼叫和執行這個匿名函式
setTimeout(() => {
  console.log('這個訊息將在三秒後被印出來');
}, 3000);
//--------------------------------------------------------------------//
// DOM 的事件監聽
// 選定按鈕
const btn = document.querySelector('button');
function callbackFunctionName() {
  console.log('這個訊息將在三秒後被印出來');
}
// callbackFunctionName 做為參數被帶入 addEventListener() 中
// callbackFunctionName 不會立即被執行，而是未來按鈕被點擊時才會執行
btn.addEventListener('click', callbackFunctionName);

// 或直接帶入匿名函式
btn.addEventListener('click', () => console.log('這個訊息將在三秒後被印出來'));

//--------------------------------------------------------------------//
// 從資料庫或遠端伺服器請求資料

// 更接近實務上的用途是當我們向資料庫或遠端伺服器請求資料時，會希望在獲得回覆後（無論成功取得資料或請求失敗）才執行接下去的動作，例如：
// 👉 成功獲得資料後：將資料渲染出來
// 👉 請求失敗獲得錯誤訊息後：將錯誤訊息告知給用戶

// request 所提供，在 Node.js 中的基本使用方式
// 在 request 接受兩個參數
// 第一個是發送請求的位址
// 第二個就是 Callback Function — 當接收到遠端回傳時才會執行這個函式 — 無論回傳錯誤訊息 error 或成功回傳所需資料 response ，都會等到「接收到回傳後」，才執行 Callback Function ，執行相對應的後續動作。

// eslint-disable-next-line no-unused-vars
const url = 'http://...';
const request = require('request');
request(url, function (error, response, body) {
  console.log('error', error);
  console.log('response', response);
  console.log('body', body);
});

//--------------------------------------------------------------------//

// Callback Chaining
// 在搜尋天氣的專案中，除了使用 mapbox 獲取使用者搜尋地點的經緯度（程式碼中使用 geocode()），也使用 Dark Sky API，獲取該經緯度的氣象資料（程式碼中使用 forecast()） — 這是有先後順序的：先向 mapbox 獲得經緯度，才使用該經緯度向 Dark Sky API 請求氣象資訊。

// geocode(<地點>, (error, { longitude, latitude, location } = {}) => {
//     // callback 函式被呼叫，並帶有錯誤訊息時，印出錯誤訊息
//     if (error) { return console.log(error) }
//     // callback 函式被呼叫，並帶有經緯度時，使用該經緯度向 Dark Sky API 請求天氣資訊
//     forecast(longitude, latitude, (error, data) => {
//       // callback 函式被呼叫，並帶有錯誤訊息時，印出錯誤訊息
//       if (error) { return console.log(error) }
//       // callback 函式被呼叫，並帶有天氣資訊時，回傳該天氣資料
//       console.log(data)
//     })
//   })

//  上面的案例，就是一個簡單的 callback chaining — 透過 geocode() 向 mapbox 發出請求，並在獲得資料後，呼叫被作為參數的 callback function，如果順利取得經緯度資料，才透過 forecast() 向 Dark Sky API 發出請求，一樣的，再收到回傳後，才呼叫後面的 callback function 將天氣資料印出來。

//--------------------------------------------------------------------//

// Callback 缺點
// 搜尋天氣的專案中，的確透過 Callback chaining ，我們得以在確定得到「經緯度資料」後才向 Dark Sky API 請求該經緯度位置的天氣資訊。但假設在獲得天氣資料後，我們還想再向資料庫索取某些資料來用，然後還要再向….那程式碼豈不就會如下圖一樣無限縮排，最終像個 🎄 聖誕樹…這就是所謂的「Christmas Tress Callback Hell」

// geocode(<地點>, (error, { longitude, latitude, location } = {}) => {
//     if (error) { return console.log(error) }
//     forecast(longitude, latitude, (error, data) => {
//       if (error) { return console.log(error) }
//       forecast2(data, (error, data2) => {
//         if (error) { return console.log(error) }
//         forecast3(data2, (error, data3) => {
//           if (error) { return console.log(error) }
//           forecast4(data2, (error, data4) => {
//             if (error) { return console.log(error) }
//             forecast5(data2, (error, data5) => {
//               if (error) { return console.log(error) }
//               console.log(data5)
//             })
//           })
//         })
//       })
//     })
//   })

// 或像以下範例，單純只看每個 request() 函式（假設發出請求後皆成功獲得所需資訊時）：向遠端伺服器發出請求並獲得資訊後，執行 callback，再發出請求，獲得資訊後執行 callback，再發出請求，獲得資訊後執行 callback…就會不小心一層包一層，變成所謂的 callback hell：
// 向 mapbox 伺服器發送請求獲得「洛杉磯」的座標資料

// const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=<API_KEY>&limit=1`

// // 只取回傳 respone 中的 body 並自動編譯成 JSON 格式
// request({ url: geoUrl, json: true }, (error, { body }) => {
//   // 回傳錯誤訊息
//   if (error) { return console.log(error) }
//   const longitude = features[0].center[0]
//   const latitude = features[0].center[1]

//   // 在獲得座標資訊後，發出請求來求得天氣資訊
//   const forecastUrl = `https://api.darksky.net/forecast/<API_KEY>/${latitude},${longitude}?units=si`
//   request({ url: forecastUrl, json: true }, (error, { body = forecastBody }) => {
//     if (error) { return callback('Unable to connect to weather server', undefined) }
//     console.log(forecastBody.daily.data[0].summary)

//     // 在獲得天氣資訊的回傳，再發一個請求做別的事
//     request({ url: anotherUrl, json: true }, (error, { body = anotherBody }) => {
//       if (error) { return callback('Unable to connect to weather server', undefined) }
//       console.log(anotherBody.daily.data[0].summary)
//     })
//   })
// })

// ❗️缺點 1：可讀性低：如果程式碼出錯，要回頭慢慢找錯誤的地方
// ❗️缺點 2：可維護性低：如果要修改其中一組函式，牽一髮而動全身
