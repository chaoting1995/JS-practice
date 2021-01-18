// 從 mapbox 第三方 API 獲取某地點的座標資料
// 向 mapbox 伺服器發送請求獲得「洛杉磯」的座標資料
// const url1 = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=<API_KEY>&limit=1`;

// // 只取回傳 respone 中的 body 並自動編譯成 JSON 格式
// request({ url1, json: true }, (error, { body }) => {
//   // 回傳錯誤訊息
//   if (error) {
//     return console.log(error);
//   }
//   // 如果沒有找到資料，回傳零筆資料
//   if (body.features.length === 0) {
//     return console.log('地點輸入錯誤，請重新輸入');
//   }
//   // 正確回傳所需資料，印出經緯度
//   const { features } = body;
//   console.log('longitude', features[0].center[0]);
//   console.log('latitude', features[0].center[1]);
// });

//--------------------------------------------------------------------//
// 包裝程式碼
// 上述寫法
// ❗️缺點 1：request() 「無法重複被使用」，每次必須重寫以上 code
// ❗️缺點 2：URL 寫死，不能動態載入
// ❗️缺點 3：接受到回傳資料後，要執行的動作不能動態改寫

// 解決方法：包裝程式碼

// 將請求包裝成函式，未來可重複使用
// const geocode = (address, callback) => {
//   // 地點將隨帶入的參數變化
//   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//     address
//   )}.json?access_token=${API_KEY}&limit=1`;

//   request({ url, json: true }, (error, { body }) => {
//     // 如果回傳錯誤訊息，呼叫 callback function() 並帶入錯誤訊息，資料欄位為空
//     if (error) {
//       return callback('Unable to connect to location services', undefined);
//     }
//     // 如果找不到資料，呼叫 callback function() 並帶入錯誤訊息，資料欄位為空
//     if (body.features.length === 0) {
//       return callback('Unable to find this location, try again!', undefined);
//     }
//     // 如果有找到資料，呼叫 callback function()，並帶入資料，錯誤訊息欄位為空
//     const { features } = body;
//     callback(undefined, {
//       longitude: features[0].center[0],
//       latitude: features[0].center[1],
//       location: features[0].place_name,
//     });
//   });
// };

// 呼叫 geocode()，參數一：搜尋地點 / 參數二：回傳資料後執行的 callback function
// geocode(<地點>, (error, { longitude, latitude, location } = {}) => {
//   // 收到資料被呼叫時，執行接下來客製化的動作
//   if (error) { return console.log(error) }
//   console.log(`longitude is ${longitude}, & latitude is ${latitude}`)
// })

{
  /* request 和 URL 被包裝成一個函式存在 geocode 中：未來可以重複呼叫（解決缺點 1）
geocode 上的函式接受兩個參數：
👉 要搜尋的地點 ：接收要搜尋的地點
👉 callback function：當接受到經緯度或錯誤訊息時，呼叫該函式
呼叫 geocode() 函式時，帶入兩個參數：
👉 要搜尋的地點：給予要客製化搜尋的地點（解決缺點 2）
👉 callback function：被呼叫時，要執行的客製化內容 （解決缺點 3） */
}

{
  /* https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E5%BF%83%E5%BE%97-%E8%AA%8D%E8%AD%98%E5%90%8C%E6%AD%A5%E8%88%87%E9%9D%9E%E5%90%8C%E6%AD%A5-callback-promise-async-await-640ea491ea64 */
}
