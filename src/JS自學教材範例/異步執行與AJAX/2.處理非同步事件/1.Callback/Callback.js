function logWord(word) {
  setTimeout(
    () => {
      console.log(word);
    },
    Math.floor(Math.random() * 100) + 1
    // return value between 1 ~ 100
  );
}

function logAll() {
  //隨機執行
  logWord('A');
  logWord('B');
  logWord('C');
}
logAll();
//------------------------------------------------------//

// 靠Callbacks律定執行順序
function logWord1(word, callback) {
  setTimeout(function () {
    console.log(word);
    callback();
  }),
    Math.floor(Math.random() * 100) + 1;
}

// Callback Hell
function logAll1() {
  logWord1('A', () => {
    logWord1('B', () => {
      logWord1('C', () => {});
    });
  });
}

logAll1();

//------------------------------------------------------//

// Promises
function logWord2(word) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(word);
      resolve(); //callback()換掉;
    }, Math.floor(Math.random() * 100) + 1);
  });
}

// 攤平好維護
function logAll2() {
  logWord2('A')
    .then(() => logWord2('B'))
    .then(() => logWord2('C'));
}

logAll2();

// resolve, reject名稱可自訂
// 用.then()取得回傳結果 resolve()
// 用.catch()取得失敗結果 reject()
