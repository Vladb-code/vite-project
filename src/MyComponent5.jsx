import React from 'react'
const MyComponent5 = ({ num, str, bool, obj, arr, fn }) => {
  const result = fn(obj, bool, num, str, arr)
  if (result !== false) {
    obj.age++
    return <h5>Результат: {String(result)}</h5>
  } else {
    return <h5>Результат: Не подходите!</h5>
  }
}

export default MyComponent5
