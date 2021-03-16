// setTimeout( ()=> {
//   console.log('三秒過後執行');
// }, 3000);

// console.log('在Timeout之後執行');

//1 在Timeout之後執行
//2 三秒過後執行  //非同步事件被延後執行
//------------------------------------------------//

var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('三秒過後執行');
  }, 3000);
});
promise.then((result) => {
  console.log(result);
  console.log('在Timeout之後執行');
});

//1 三秒過後執行
//promise物件執行完(resolved/rejected)，「回傳值」從resolve()傳進.then的傳入參數
//2 在Timeout之後執行
