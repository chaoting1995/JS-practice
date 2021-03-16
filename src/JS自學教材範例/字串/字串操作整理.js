// 字串反轉
// split() 將字串轉成陣列
// reverse() 反轉陣列
// join() 將陣列合併字串
const str = 'Mom Get The Camera';
const result = str.split('').reverse().join('');
console.log(result);
//--------------------------------------------------------//

const input =
  'http://laptopbibi.cf/image/ZenBook_S_UX393EA_1.jpg\nhttp://laptopbibi.cf/image/ZenBook_S_UX393EA_2.jpg\nhttp://laptopbibi.cf/image/ZenBook_S_UX393EA_3.jpg\nhttp://laptopbibi.cf/image/ZenBook_S_UX393EA_4.jpg\n';

const output = input.split('\n');
output.pop();
console.log('output', output);
