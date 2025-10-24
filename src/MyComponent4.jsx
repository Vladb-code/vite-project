import React from 'react'
const MyComponent4 = ({ num, str, bool, obj, arr, fn }) => {
  const result = fn(obj, bool, num, str, arr)
  if (result !== false) {
    obj.age++
    return <h4>Результат: {String(result)}</h4>
  } else {
    return <h4>Результат: Не подходите!</h4>
  }
}
export default MyComponent4
