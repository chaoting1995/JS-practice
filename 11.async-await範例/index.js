async function test() {
  console.log('a')

  // 包成promis物件延後等3秒執行
  const resolvedValue = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve('b'), 3000)
  })

  console.log(resolvedValue)

  console.log('c')
}

test()
