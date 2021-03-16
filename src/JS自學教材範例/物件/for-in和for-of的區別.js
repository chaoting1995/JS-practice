// 建議：在迭代物件屬性時，使用 for...in；在迭代陣列時，使用 for...of。
// for...in 輸出的是屬性名稱(key)，for...of 輸出的是值(value)
// for...of 是 ES6 的新語法。修復了ES5 for…in 的不足
// for...of 不能迭代物件，需要透過和 Object.keys() 搭配使用

//-------------------------------------------------//
// 單純迭代陣列的話，for...in 輸出的是屬性名稱(key)，for...of 輸出的是值(value)
let iterable1 = [3, 5, 7];

// 回傳「key」
for (let i in iterable1) {
  console.log(i); // "0", "1", "2"
}

// 回傳「value」
for (let i of iterable1) {
  console.log(i); // 3, 5, 7
}

//-------------------------------------------------//
//新增陣列的屬性
// 再來我們在原本的陣列，新增一個屬性 foo，可看到 for...in 有將此屬性 foo 也輸出
let iterable2 = [3, 5, 7];
iterable2.foo = 'hello'; //新增foo屬性名稱

// 回傳「key」，且會讀取到陣列新增的屬性名稱
for (let i in iterable2) {
  console.log(i); // "0", "1", "2", "foo"
}

// 回傳「value」
for (let i of iterable2) {
  console.log(i); // 3, 5, 7
}

//-------------------------------------------------//
// 在 原型鍊上 新增function
Object.prototype.objCustom = function () {}; //物件 原型鋉
Array.prototype.arrCustom = function () {}; //陣列 原型鋉

let iterable = [3, 5, 7];
iterable.foo = 'hello';

// 回傳「key」，且同時會讀取到 物件、陣列 原型鍊上的function
for (let i in iterable) {
  console.log(i); // "0", "1", "2", "foo", "arrCustom", "objCustom"
}

// 回傳「值」
for (let i of iterable) {
  console.log(i); // 3, 5, 7
}

//-------------------------------------------------//
// 由上面三個案例來看，如果只是想單純的迭代取出陣列值的話，建議使用 for...of 會比較好，不過注意此語法為 ES6 新語法。
//-------------------------------------------------//
// for..of 迭代 物件(object)
// 如果想用 for...of 來遍歷物件的屬性的話，可以通過和 Object.keys() 搭配使用，先取得物件的所有key的數組，然後再遍歷。
var student = {
  name: 'kanboo',
  age: 16,
  locate: {
    country: 'tw',
    city: 'taipei',
    school: 'CCC',
  },
};

for (var key of Object.keys(student)) {
  //使用Object.keys()方法取得物件的Key的陣列
  console.log(key + ': ' + student[key]);
}

// "name: kanboo"
// "age: 16"
// "locate: [object Object]"
