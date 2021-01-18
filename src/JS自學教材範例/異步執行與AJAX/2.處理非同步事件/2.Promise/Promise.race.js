// Promise.race 傳入多個 promise 事件，這個方法僅會回傳第一個完成的事件。

// 接下來小明與漂亮阿姨一起跑，在這次的比賽中只會回傳第一個到達終點的人，而另一個成功與否倒不是很重要(哭哭)。
// 首先先建立一個可以多人一起跑的事件，可以傳入人、時間、是否成功 等參數。

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

// Race
Promise.race([runPromise('小明', 3000), runPromise('漂亮阿姨', 2500)])
  .then((data) => {
    // 僅會回傳一個最快完成的 resolve 或 reject
    console.log('race', data); // 漂亮阿姨 跑 2.5 秒時間(fulfilled) <- 因為漂亮阿姨跑得快
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err);
  });
