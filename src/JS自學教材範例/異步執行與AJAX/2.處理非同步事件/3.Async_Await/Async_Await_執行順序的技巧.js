// 執行順序的技巧

// async/await 則讓非同步有了同步的寫法，因此許多原有的 JS 語法都可以一起搭配做使用，如迴圈、判斷式都是可利用的技巧:

// 請求依序發出：一個一個往下執行(前個取得回應後，才能繼續下個請求)
// 請求平行發出：全部的請求一起發出
// 回應依序列出：依據請求發出的順序，依序列出資源
// 回應統一列出：不管什麼時候取得都統一列出

//--------------------------------------------------------//

//  範例 Promise 函式
//  @param {Number} num 數值：作為判斷非同步成功與否的條件
//  @param {Number} [time=500] 數值：非同步所執行的時間長度
//  @returns 如果 num 為真則套用 resolve；失敗則套用 reject

function promiseFn(num, time = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num ? resolve(`${num}, 成功`) : reject('失敗');
    }, time);
  });
}

//--------------------------------------------------------//
// 請求平行發出，回應統一列出

// Promise.all + async/await 可搭配此語法
// 一次得到所有回應
// (取得結果與送出的陣列順序相同)

async function promiseAll() {
  const data = await Promise.all([promiseFn(1, 3000), promiseFn(2)]);
  console.log(data);
}
promiseAll(); // ["1, 成功", "2, 成功"]

//--------------------------------------------------------//
// 依序發出請求的方式

// for...loop 是依序執行的陳述式，當for內含await時，就必須等待await取得回應後，才能執行下一個迴圈

// 1.本範例中先建立一個陣列 arrayData，其中包含數值及執行時間。

const arrayData = [
  { num: 1, time: 500 },
  { num: 2, time: 3000 },
  { num: 3, time: 1500 },
  { num: 4, time: 1000 },
];

// 2.for迴圈 + async/await
async function seriesFn() {
  const data = [];

  // 依序執行
  for (let i = 0; i < arrayData.length; i++) {
    const item = arrayData[i];
    data.push(await promiseFn(item.num, item.time));
    console.log(item.num, '執行完畢');
  }
  console.log(data); // ["1, 成功", "2, 成功", "3, 成功", "4, 成功"]
}
seriesFn();

//--------------------------------------------------------//

// 請求平行發出、回應依序列出
// forEach 無法被中斷，並且會「幾乎同時運行」所有的迴圈內容。

// 本範例是使用 map 取代 forEach 的方法（兩者概念是接近的）。雖然請求幾乎在同一個時間執行，但執行的時間順序是不確定的，還是會等待執行完成後才統一列出。

async function parallelFn() {
  const data = arrayData.map(async (item) => {
    const res = await promiseFn(item.num, item.time); // 此行的 await 不會暫停函式運行
    return res;
  });
  console.log(data);

  for (const res of data) {
    console.log(await res);
  }
}
parallelFn();

// map 會在執行時就取得結果，此時 data 內的 promise 是尚未 resolve 的狀態，因此需要在後續使用 for...of 等待回應的內容。
// 時間順序上分別為 500, 3000, 1500, 1000，其中第二個所花的時間較長，因此在第二個執行完成後，剩下以後也會統一列出。
