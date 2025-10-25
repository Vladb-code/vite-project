import './App.css'
import { useState } from 'react'
import MyComponent1 from './MyComponent1'
import MyComponent2 from './MyComponent2'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
function App() {
  return (
    <>
      <MyComponent1 title={'кнопка, которая увеличивает значение'} />
      <MyComponent2 title={'скрывает или показывает текст'} />
      <MyComponent3 title={'поле ввода, которое обновляет значение state'} />
      <MyComponent4 title={'меняет цвет текста при каждом нажатии'} />
    </>
  )
}

export default App
