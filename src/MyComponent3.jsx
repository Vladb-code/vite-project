import React from 'react'
const MyComponent3 = ({ num, str, bool, obj, arr, fn }) => {
  const result = fn(obj, bool, num, str, arr)
  if (result !== false) {
    obj.age++
    return <h3>Результат: {String(result)}</h3>
  } else {
    return <h3>Результат: Не подходите!</h3>
  }
}

export default MyComponent3
