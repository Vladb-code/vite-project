import React from 'react'
const MyComponent2 = ({ num, str, bool, obj, arr, fn }) => {
  const result = fn(obj, bool, num, str, arr)
  if (result !== false) {
    obj.age++
    return <h2>Результат: {String(result)}</h2>
  } else {
    return <h2>Результат: Не подходите!</h2>
  }
}

export default MyComponent2
