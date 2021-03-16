// 列出排序過的 property，並以 , 串接所有 property

let letterCount = { b: 2, a: 5, c: 3 };
let letters = Object.keys(letterCount).sort().join(', ');

console.log(letters); // a, b, c
//--------------------------------------------//

// 此物件有幾個 property，可用 Object.keys() 搭配 Array.length 取得：
let object = { a: 1, b: 2, c: 3 };
let propertyCount = Object.keys(object).length;
console.log(propertyCount); // 3
//--------------------------------------------//

// 計算水果總數
//  Object.values() +reduce()
let fruits = {
  apple: 2,
  banana: 3,
  orange: 1,
};
const fruitTotal = Object.values(fruits).reduce(
  (accumulator, fruitCount) => accumulator + fruitCount
);

console.log(fruitTotal); // 6
//--------------------------------------------//
// 更改資料結構：property轉成物件
const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};
// 將object中的每個property，改成物件 {keyName: "key", valueName: 'value'},
const obj2 = Object.entries(obj).map(([key, value]) => {
  return { keyName: key, valueName: value };
});
console.log(obj2);
// [
//   {keyName: "key1", valueName: 'value1'},
//   {keyName: "key2", valueName: 'value2'},
//   {keyName: "key3", valueName: 'value3'}
// ]

//--------------------------------------------//
// Object 物件轉 Map 物件
// 可用 Object.entries() 將物件轉成 Map 物件，將 Object.entries() 回傳的可迭代 entries 傳給 new Map() constructor 即可：

let fruits1 = {
  apple: 2,
  banana: 3,
  orange: 1,
};

let fruitMap = new Map(Object.entries(fruits1));

console.log(fruitMap);
// Map(3) {"apple" => 2, "banana" => 3, "orange" => 1}

console.log(fruitMap.get('orange')); // 1
