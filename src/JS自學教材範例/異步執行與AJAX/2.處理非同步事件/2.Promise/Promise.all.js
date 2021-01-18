// Promise.all()
// 會同時執行以下 Promise，在全部完成後統一回傳陣列，這個陣列的內容也是 promise 中 resolve 的內容。
// 不過如果 all() 其中有事件 reject，那麼此 promise 也均視為失敗 (catch)。

// 接下來小明與漂亮阿姨一起跑
// 當然，每次都跑輸的小明不希望每次都沒被記錄到，他希望就算最後一名也能一起紀錄

let runPromise = (someone, timer, success = true) => {
  console.log(`${someone} 開始跑開始`);
  return new Promise((resolve, reject) => {
    // 傳入 resolve 與 reject，表示資料成功與失敗
    if (success) {
      setTimeout(function () {
        // 3 秒時間後，透過 resolve 來表示完成
        resolve(`${someone} 跑 ${timer / 1000} 秒時間(fulfilled)`);
      }, timer);
    } else {
      // 回傳失敗
      reject(new Error(`${someone} 跌倒失敗(rejected)`));
    }
  });
};

// All
Promise.all([runPromise('小明', 3000), runPromise('漂亮阿姨', 2500)])
  .then((data) => {
    // 僅會回傳一個最快完成的 resolve 或 reject
    console.log('race', data); // ["小明 跑 3 秒時間(fulfilled)", "漂亮阿姨 跑 2.5 秒時間(fulfilled)"]
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err);
  });

//------------------------------其他範例------------------------------//
// const oneSecond = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // 一秒後回傳資料
//     resolve('one second');
//   }, 1000);
// });

// const twoSecond = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // 兩秒後回傳資料
//     resolve('two second');
//   }, 2000);
// });

// const threeSecond = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // 三秒後回傳資料
//     resolve('three second');
//   }, 3000);
// });

// // 等到三個 Promise 都成功回傳後，才執行接下去的流程
// Promise.all([oneSecond, twoSecond, threeSecond]).then(
//   ([oneSecond, twoSecond, threeSecond]) => {
//     console.log(oneSecond, twoSecond, threeSecond);
//   }
// );
