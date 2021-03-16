const data1 = [{ a: 1 }];
console.log('data1', data1);

const data2 = [...data1];
const object2 = { ...data2[0] };
object2.a = 2;
data2[0] = object2;

console.log('data1', data1);
console.log('data2', data2);
// 不停展開
