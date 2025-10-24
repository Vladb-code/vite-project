import React from 'react'
const MyComponent6 = ({ num, str, bool, obj, arr, fn }) => {
  const result = fn(obj, bool, num, str, arr)
  if (result !== false) {
    obj.age++
    return <h6>Результат: {String(result)}</h6>
  } else {
    return <h6>Результат: Не подходите!</h6>
  }
}

export default MyComponent6
