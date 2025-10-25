import { useState } from 'react'
const MyComponent3 = ({ title }) => {
  const [state, setState] = useState('введи текст')
  const handleChange = (event) => {
    setState(event.target.value)
  }
  return (
    <>
      <h2>{title}</h2>
      <input type="text" value={state} onChange={handleChange} />
      <p>{state}</p>
    </>
  )
}

export default MyComponent3
