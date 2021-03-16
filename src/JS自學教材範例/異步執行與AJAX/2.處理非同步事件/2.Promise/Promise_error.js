const p1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve('aaa');
    // reject('error-1');
  }, Math.random() * 2000);
});

p1.then((r) => {
  console.log(r);
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // resolve('bbb');
      reject('error-2');
    }, Math.random() * 2000);
  });
})
  .then((r2) => {
    console.log(r2);
  })
  .catch((ex) => {
    console.log('ex:', ex);
  });

console.log('--- 1 ---');
