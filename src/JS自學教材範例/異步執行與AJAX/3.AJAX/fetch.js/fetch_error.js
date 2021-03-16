// 請求失敗
// 在 Fetch 中，請求失敗時不會有像 $.ajax 中有 error 可以直接捕捉，取而代之的是要
// 1.以 response 的 status 的屬性值判斷，當 status 的值不等於 200 時
// 2.將在 .then 中使用 throw 創建一個錯誤
// 3.並由 .catch 接收錯誤內容處理

fetch('https://httpbin.org/status/500', {})
  .then((response) => {
    if (response.status !== 200) throw new Error(response.status);
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  })
  .catch((error) => {
    console.log(`錯誤代碼為${error}`);
  });
