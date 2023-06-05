console.log('start')
// const asyncTest = () => 1

const asyncTest = async () => {
    console.log(3)
    const a = new Promise((resolve) => {
      console.log(4)
      resolve(5)
    })
    const b = await a
    console.log(b)
  }

const call = () => {
    asyncTest()
}

console.log(1)
call()
console.log(2)