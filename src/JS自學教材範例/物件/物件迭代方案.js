// 物件迭代方案一：for-in statement
// 專門用於讀取物件所有屬性(舊方法)，會迭代物件中每個 enumerable property
// 讀取出的資料順序!==儲存順序
// 讀取for-in必須用「obj [key] 」；用obj.key，程式會誤會key是屬性名稱，非變數
// 會忽略 key 為 Symbol 的 property

// eslint-disable-next-line no-unused-vars
const example1 = () => {
  const obj = { a: 1, b: 2, c: 3 };

  for (const key in obj) {
    console.log(key, obj[key]);
  }
  // a 1
  // b 2
  // c 3
};
// example1();

// for-in 陳述句也會迭代到繼承的 enumerable property

// eslint-disable-next-line no-unused-vars
const example2 = () => {
  const obj = { a: 1, b: 2, c: 3 };

  let obj2 = Object.create(obj);
  obj2.x = 99;
  obj2.y = 100;

  for (const key in obj2) {
    console.log(key, obj2[key]);
  }
  // x 99
  // y 100
  // a 1
  // b 2
  // c 3
};
// example2();

// 若不想列舉繼承的 property (即只列舉 own property)，要用 Object.prototype.hasOwnProperty()
// eslint-disable-next-line no-unused-vars
const example3 = () => {
  const obj = { a: 1, b: 2, c: 3 };
  let obj2 = Object.create(obj);
  obj2.x = 99;
  obj2.y = 100;

  for (const key in obj2) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj2.hasOwnProperty(key)) {
      console.log(key, obj2[key]);
    }
  }
  // x 99
  // y 100
};
// example3();
//--------------------------------------------//
// 物件迭代方案二：Object.keys() + for-of statement
// eslint-disable-next-line no-unused-vars
const example4 = () => {
  let object = { a: 1, b: 2, c: 3 };

  for (const key of Object.keys(object)) {
    console.log(key);
  }
  // a
  // b
  // c
};
// example4();
//--------------------------------------------//
// 物件迭代方案三：Object.keys() + forEach()

// eslint-disable-next-line no-unused-vars
const example5 = () => {
  let object = { a: 1, b: 2, c: 3 };
  Object.keys(object).forEach((key) => {
    console.log(key);
  });
  // a
  // b
  // c
};
// example5();

// 補充：Object.keys()，會自動忽略 繼承而來的property
// eslint-disable-next-line no-unused-vars
const example6 = () => {
  let obj = { a: 1, b: 2, c: 3 };
  let obj2 = Object.create(obj);
  obj2.x = 99;
  obj2.y = 100;

  Object.keys(obj2).forEach((key) => {
    console.log(key, obj2[key]);
  });
  // x 99
  // y 100
};
// example6();

//--------------------------------------------//
// 物件迭代方案四：Object.entries() + for-of statement
// 搭配解構賦值[key, value]
// eslint-disable-next-line no-unused-vars
const example7 = () => {
  let obj = { a: 1, b: 2, c: 3 };

  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
  // a 1
  // b 2
  // c 3
};
// example7();
//--------------------------------------------//
// 物件迭代方案五：Object.entries() + forEach()
// 搭配解構賦值[key, value]
// eslint-disable-next-line no-unused-vars
const example8 = () => {
  let obj = { a: 1, b: 2, c: 3 };

  Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
  });
  // a 1
  // b 2
  // c 3
};
// example8();
//--------------------------------------------//
