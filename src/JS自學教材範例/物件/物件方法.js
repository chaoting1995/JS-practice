let object = { a: 1, b: 2, c: 3 };
//-------------------------------------------------//
// Object.keys()
// 可直接取得所有 property name
console.log(Object.keys(object)); // ["a", "b", "c"]

//-------------------------------------------------//
// for-of 陳述句來迭代：
for (const key of Object.keys(object)) {
  console.log(key);
}
// a
// b
// c

//-------------------------------------------------//
// forEach() 來迭代
Object.keys(object).forEach((key) => {
  console.log(key);
});
// a
// b
// c

//-------------------------------------------------//

// 若想知道此物件有幾個 property，可用 Object.keys() 搭配 Array.length 取得：

let propertyCount = Object.keys(object).length;
console.log(propertyCount); // 3

//-------------------------------------------------//
// Object.values()
//是直接取得所有 property value，並以陣列回傳

let object1 = { a: 1, b: 2, c: 3 };
console.log(Object.values(object1)); // [1, 2, 3]

//-------------------------------------------------//
// Object.entries()
// 是直接取得所有 property 的 name 和 value，並以陣列回傳

let object2 = { a: 1, b: 2, c: 3 };

console.log(Object.entries(object2));
// [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]

// https://ithelp.ithome.com.tw/articles/10239942
