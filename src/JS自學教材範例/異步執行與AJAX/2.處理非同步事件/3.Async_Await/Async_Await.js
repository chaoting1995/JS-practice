/**
 * 範例 Promise 函式
 *
 * @param {Number} num 數值：作為判斷非同步成功與否的條件
 * @param {Number} [time=500] 數值：非同步所執行的時間長度
 * @returns 如果 num 為真則套用 resolve；失敗則套用 reject
 */
// eslint-disable-next-line no-unused-vars
function promiseFn(num, time = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num ? resolve(`${num}, 成功`) : reject('失敗');
    }, time);
  });
}

//--------------------------------------------------------//
// promise 函式呼叫時可以使用 then 來接收 resolve 的結果，當要串接兩個 promise 函式時可以使用 return 來做 “鏈接”

// 但它依然在 JS 的同步語言中插入了一段非同步的片段

promiseFn(1)
  .then((res) => {
    console.log(res); // 1, 成功
    return promiseFn(2); // 鏈接第二次的 Promise 方法
  })
  .then((res) => {
    console.log(res); // 2, 成功
  });

//--------------------------------------------------------//

// 上述以 promise、then 寫法的程式碼，以 async 函式改寫方式如下：

// 1.定義非同步函式（async function）
// 2.透過 await 暫停 promiseFn，直到回傳後再繼續向下

// 結果與使用 then 是一致的，但就結構上更加平整，在 getData 這個函式中都是以 “同步“ 的方式運行，不會產生同步、非同步程式碼混合的狀況。

async function getData1() {
  const data1 = await promiseFn(1); // 因為 await，promise 函式被中止直到回傳
  const data2 = await promiseFn(2);
  console.log(data1, data2); // 1, 成功 2, 成功
}
getData1();

//--------------------------------------------------------//
// await 可以直接回傳後方的表達式，或者將非同步函式中的 Promise 暫停，如以下範例的 await promiseFn(2) 會 “等待” resolve 結果回傳後，在賦予至 data2 才會回傳。

async function getData() {
  const data1 = await 1;
  const data2 = await promiseFn(2);
  console.log(data1, data2); // 1 "2, 成功"
}
getData();

//--------------------------------------------------------//

// 使用 try…catch 進行錯誤的處理
// 前面幾段都僅有提到 resolve 的結果，但實際上程式碼的運行不會都只有成功，在 Promise 定義也就包含了 resolve 及 reject 的回傳，而調用 Promise 的方法時也就可以使用 then 及 catch 來接收成功及失敗的結果。

// then、catch 範例程式碼，如果運行正確則會繼續往下運行，當遭遇失敗則會跳到 catch 的流程。
promiseFn(1)
  .then((res) => {
    console.log(res);
    return promiseFn(0);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//--------------------------------------------------------//

// 重要：當使用 async/await 時，因為該片段程式碼已轉為同步的形式，如果遇到錯誤沒有進行例外處理，則會造成後續的程式碼無法繼續運行
// 此段程式碼會直接中止，不會出現 console.log 的結果

async function getData2() {
  const data1 = await promiseFn(1);
  const data2 = await promiseFn(0);
  // Uncaught (in promise) 失敗
  console.log(data1, data2);
}
getData2();
//--------------------------------------------------------//

// async/await 錯誤流程可以使用 try...catch 陳述式管理流程，將原有的程式碼直接置入於 try 流程內，當遇到例外的錯誤時則撰寫在 catch 區塊內

// 以下範例來說 try 內的程式碼與原本介紹的一般流程是相同的，僅不過加入了 catch 來處理 reject 的錯誤流程。這樣的結構下，就可以將程式碼區分為成功、錯誤兩個流程，閱讀上也會更加容易。

async function getData3() {
  try {
    // 專注在成功
    const data1 = await promiseFn(1);
    const data2 = await promiseFn(0);
    console.log(data1, data2);
  } catch (err) {
    // 專注在錯誤
    console.log('catch', err);
  }
}
getData3();
