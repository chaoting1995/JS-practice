// 首先建立了一個 XMLHttpRequest 物件，並使用 .open() 開啟一個 URL，最後使用 .send() 發出 request。
function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://www.example.org/example.txt');
oReq.send();




// ㄧ個基礎的XMLHttpRequest物件如下

function makeARequest(){
    // 建立一個新 XHR Object
    var xhr = new XMLHttpRequest();
    
    // 用.open() method 開始一個 request
    // 必須傳入兩個參數，第一個是 HTTP method，第二個是 request 要傳向的目的地 url 
    // 也就是放你得到的 api url 的地方
    xhr.open("GET", "http://www.example.org/example.txt");
    
    // 當 request 成功完成之後，會執行的 callback
    xhr.onload() = function(){
     // Do something with the retrieved data
    };
    
    // 送出 request
    xhr.send();
    
  }