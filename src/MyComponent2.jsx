import { useState } from 'react'
const MyComponent2 = ({ title }) => {
  const [state, setState] = useState('text')
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setState('')}>КНОПКА: {state}</button>
    </>
  )
}

export default MyComponent2
