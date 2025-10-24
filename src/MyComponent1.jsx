import React from 'react'
const MyComponent1 = ({ num, str, bool, obj, arr, fn }) => {
  const result = fn(obj, bool, num, str, arr)

  if (result !== false) {
    obj.age++
    console.log(obj.age)

    return <h1>Результат: {String(result)}</h1>
  } else {
    return <h1>Результат: Не подходите!</h1>
  }
}

export default MyComponent1
