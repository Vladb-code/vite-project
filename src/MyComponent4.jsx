import { useState } from 'react'

const MyComponent4 = ({ title }) => {
  const letters = '0123456789ABCDEF'
  const [state, setState] = useState('#000000')

  const handleClick = () => {
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    setState(color)
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <button onClick={handleClick}>Сменить цвет</button>
        <p style={{ color: state }}>
          <h1>Этот текст может быть любого цвета </h1>
        </p>{' '}
      </div>
    </>
  )
}

export default MyComponent4
