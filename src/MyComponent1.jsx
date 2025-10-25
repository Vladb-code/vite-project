import { useState } from 'react'
const MyComponent1 = ({ title }) => {
  const [state, setState] = useState(0)
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setState((oldState) => oldState + 1)}>
        КНОПКА : {state}
      </button>
    </>
  )
}

export default MyComponent1
