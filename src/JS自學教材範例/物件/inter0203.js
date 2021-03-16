/*
將cid出現四次以上的skuid組合起來成為兩個object，
第一個出現的skuid保留在原來的位置，
後面接著剩下所有skuid組合的array，
其餘不到四次的object留在原本的位置。
不限使用語言

input:
var items = [
  { cid: 3, skuid: 123 },
  { cid: 7, skuid: 133 },
  { cid: 7, skuid: 22212 },
  { cid: 4, skuid: 3223 },
  { cid: 4, skuid: 12133 },
  { cid: 3, skuid: 4543 },
  { cid: 3, skuid: 222 },
  { cid: 4, skuid: 444 },
  { cid: 3, skuid: 233232 },
  { cid: 4, skuid: 44445 }
];

output:
[
  { "cid": 3, "skuid": 123 },
  { "cid": 3, "skuid": [4543, 222, 233232] },
  { "cid": 7, "skuid": 133 },
  { "cid": 7, "skuid": 22212 },
  { "cid": 4, "skuid": 3223 },
  { "cid": 4, "skuid": [12133, 444, 44445] }
]
*/
var items = [
  { cid: 3, skuid: 123 },
  { cid: 7, skuid: 133 },
  { cid: 7, skuid: 22212 },
  { cid: 4, skuid: 3223 },
  { cid: 4, skuid: 12133 },
  { cid: 3, skuid: 4543 },
  { cid: 3, skuid: 222 },
  { cid: 4, skuid: 444 },
  { cid: 3, skuid: 233232 },
  { cid: 4, skuid: 44445 },
];

const test = (input) => {
  //超過4次的cid整理成陣列
  const handleAppearFourTimesID = (data) => {
    //所有cid的值，組成陣列
    const cidValueArray = data.map((item) => item.cid);
    //判斷資料出現過幾次的函式
    const countOccurrences = (value) =>
      cidValueArray.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
    //過濾出超過4次的cid
    const appearFourTimes = cidValueArray.filter(
      (item) => countOccurrences(item) >= 4
    );
    // 去除重複
    const mySet = new Set();
    appearFourTimes.forEach((e) => {
      mySet.add(e);
    });

    // 物件轉陣列
    return [...mySet];
  };

  const appearFourTimesID = handleAppearFourTimesID(input);

  const newItems = input.reduce((accumulator, item) => {
    // 其餘不到四次的object留在原本的位置
    if (!appearFourTimesID.includes(item.cid)) {
      accumulator.push(item);
    } else if (
      // 將cid出現四次以上的skuid組合起來成為兩個object
      appearFourTimesID.includes(item.cid) &&
      // 排除掉處理過的cid
      !accumulator.map((e) => e.cid).includes(item.cid)
    ) {
      //有出現4次以上的cid，其skuid彙整成陣列
      const skuidArray = input
        .filter((e) => e.cid === item.cid)
        .map((e) => e.skuid);

      // 第一個出現的skuid保留在原來的位置
      const skuidFirst = {
        cid: item.cid,
        skuid: skuidArray[0],
      };
      // 後面接著剩下所有skuid組合的array
      const skuidOthers = {
        cid: item.cid,
        skuid: skuidArray.slice(1),
      };
      //  改好的資料塞進 newItems
      accumulator.push(skuidFirst);
      accumulator.push(skuidOthers);
    }
    return accumulator;
  }, []);
  return newItems;
};
console.log('output', test(items));
