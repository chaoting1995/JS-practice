async function test() {
  console.log('a');

  // 包成promis物件延後等3秒執行
  // eslint-disable-next-line no-unused-vars
  const resolvedValue = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve('b'), 3000);
  });

  console.log(resolvedValue);

  console.log('c');
}

test();

//-----------------------------------------------------//

const getDataFromServer = async () => {
  try {
    // 連接伺服器，同一台電腦上，得到回應值
    const response = await fetch('http://127.0.0.1:5500/public/data.json');

    // 由response物件，剖析出json資料
    const data = await response.json();

    // 得到data資料，顯示在網頁上
    document.getElementById('data-list').innerHTML = data
      .map((v) => `<li>${v.text}</li>`)
      .join('');
  } catch (error) {
    console.log(error);
  }
};

getDataFromServer();

// // 連接伺服器，同一台電腦上
// fetch('http://127.0.0.1:5500/public/data.json', { method: 'GET' })
//   .then((response) => {
//     console.log(response)

//     // 得到response物件，回傳剖折出json資料
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)

//     // 得到data資料，顯示在網頁上
//     document.getElementById('data-list').innerHTML = data
//       .map((v) => {
//         return `<li>${v.text}</li>`
//       })
//       .join('')
//   })
//   .catch((error) => {
//     // 有錯誤在這裡處理
//     console.log(error)
//   })
