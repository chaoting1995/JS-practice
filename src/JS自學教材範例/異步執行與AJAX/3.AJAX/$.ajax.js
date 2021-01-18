// XMLHttpRequest 在製作時每次都要新建一個請求的實體，而 AJAX 的網站，通常也不會只做一次請求而已，為了讓程式碼更容易維護及開發，大多開發者都會使用框架來包裝這類行為
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function (data) {
    console.log(data);
    // 取得的遠端資料
  },
});
