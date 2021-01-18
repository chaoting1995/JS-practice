// Promises
function logWord(word) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(word);
      resolve(); //callback()換掉;
    }, Math.floor(Math.random() * 100) + 1);
  });
}

// 攤平好維護
function logAll() {
  logWord('A')
    .then(() => logWord('B'))
    .then(() => logWord('C'));
}

logAll();

// resolve, reject名稱可自訂
// 用.then()取得回傳結果 resolve()
// 用.catch()取得失敗結果 reject()

//-------------------------------------------------------//

// 在resolve()、reject()帶入參數
// const getData = new Promise((resolve, reject) => {
//   // 非同步的作業...code...

//   // 作業完成，並回傳錯誤訊息時
//   if (error) {
//     return reject('錯誤訊息');
//   }

//   // 作業成功完成
//   resolve({
//     data1: 'abc',
//     data2: '123',
//   });
// });

let mingRunPromise = (someone) => {
  let ran = parseInt(Math.random() * 2); // 隨機成功或失敗
  console.log(`${someone} 開始跑開始`);
  return new Promise((resolve, reject) => {
    // 傳入 resolve 與 reject，表示資料成功與失敗
    if (ran) {
      setTimeout(() => {
        // 3 秒時間後，透過 resolve 來表示完成
        resolve(`${someone} 跑 3 秒時間(fulfilled)`);
      }, 3000);
    } else {
      // 回傳失敗
      reject(new Error(`${someone} 跌倒失敗(rejected)`));
    }
  });
};
// 用.then接Promise()的執行結果，以利往下做別的事
// resolve(a)的傳入參數a，會傳進.then的callback的參數 (data)=>{ console.log(data)  }
// reject(a)的傳入參數a，會傳進.catch的callback的參數 (err)=>{ console.log(err)  }
mingRunPromise('小明')
  .then((data) => {
    // 成功訊息 (需要 3 秒)   //小明 跑 3 秒時間(fulfilled)
    console.log(data);
  })
  .catch((err) => {
    // 失敗訊息 (立即)       //Error: 小明 跌倒失敗(rejected)
    console.log(err);
  });
