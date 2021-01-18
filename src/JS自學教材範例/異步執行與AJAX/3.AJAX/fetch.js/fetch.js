fetch('https://randomuser.me/api/', {})
  .then((response) => {
    // 這裡會得到一個 ReadableStream 的物件
    console.log(response);
    // 可以透過 blob(), json(), text() 轉成可用的資訊
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log('錯誤:', err);
  });

//------------------------------------------//
fetch('局屬氣象站-現在天氣觀測報告網址')
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    let city = result.cwbopendata.location[14].parameter[0].parameterValue;
    let temp =
      result.cwbopendata.location[14].weatherElement[3].elementValue.value;
    console.log(`${city}的氣溫為 ${temp} 度 C`); // 得到 高雄市的氣溫為 29.30 度 C
  });
//----------------------------------------//

fetch('http://abc.com/', { method: 'get' })
  .then(function (response) {
    //處理 response
  })
  .catch(function (err) {
    // Error :(
  });

//   但要注意的是fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件狀態(只要不是網路連線問題，或是伺服器失連等等)，在這其中也會包含狀態碼為錯誤碼(404, 500...)的情況，所以在使用時你還需要加一下檢查:

fetch(request)
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .catch(function (err) {
    // Error :(
  });
//-----------------------------------------------//
// 或是先用另一個處理狀態碼的函式，使用Promise.resolve與Promise.reject將回應的情況包裝為回傳不同狀態的Promise物件，然後再下個then方法再處理:

function processStatus(response) {
  // 狀態 "0" 是處理本地檔案 (例如Cordova/Phonegap等等)
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

fetch(request).then(processStatus).then().catch();
