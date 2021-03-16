//   Chain 鏈接方法
// 接下來他們三人想要依序跑，等一個人跑到定位後，下一位會接續著跑

// 在一開始有提到波動拳的概念，如果不斷的使用 callback 就會出現超級深的巢狀，那麼此時就可以善用 Promise 的 then()。

// then() 所 turn 的資料內容會在下一個 then 接收，用此方法就可以減少 Callback 問題，也可以依序執行不同的 promise 事件。

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

runPromise('小明', 3000)
  .then((mingString) => {
    console.log(mingString); // 小明 跑 3 秒時間(fulfilled)
    return runPromise('漂亮阿姨', 2500);
  })
  .then((autieString) => {
    console.log(autieString); // 漂亮阿姨 跑 2.5 秒時間(fulfilled)
    return runPromise('杰倫', 2000);
  })
  .then((jayString) => {
    console.log(jayString); // 杰倫 跑 2 秒時間(fulfilled)
  });

//-------------------------------------------------------//

const p1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve('aaa');
  }, Math.random() * 2000);
});

p1.then((r) => {
  console.log(r);
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('bbb');
    }, Math.random() * 2000);
  });
}).then((r2) => {
  console.log(r2);
});

console.log('--- 1 ---');
