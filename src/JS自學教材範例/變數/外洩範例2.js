let arr = [100, 2000, 3000];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log('i h a w f ' + arr[i] + ' ms');
  }, arr[i]);
}
// var 改成let，即可正常顯示
