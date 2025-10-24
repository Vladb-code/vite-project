import './App.css'
import MyComponent1 from './MyComponent1'
import MyComponent2 from './MyComponent2'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'
import MyComponent6 from './MyComponent5'

function App() {
  const myNumber = 2
  const myString = 'Вы подходите!'
  const myBoolean = false
  const myObject = { name: 'Алиса', age: 20 }
  const myArray = [20, 21, 22, 23, 24, 25]
  const myFunction = (obj, bool, num, str, arr) => {
    if (arr.includes(obj.age) && obj.name.length > num) {
      return str
    } else {
      return bool
    }
  }

  return (
    <>
      <MyComponent1
        num={myNumber}
        str={myString}
        bool={myBoolean}
        obj={myObject}
        arr={myArray}
        fn={myFunction}
      />

      <MyComponent2
        num={myNumber}
        str={myString}
        bool={myBoolean}
        obj={myObject}
        arr={myArray}
        fn={myFunction}
      />

      <MyComponent3
        num={myNumber}
        str={myString}
        bool={myBoolean}
        obj={myObject}
        arr={myArray}
        fn={myFunction}
      />

      <MyComponent4
        num={myNumber}
        str={myString}
        bool={myBoolean}
        obj={myObject}
        arr={myArray}
        fn={myFunction}
      />

      <MyComponent5
        num={myNumber}
        str={myString}
        bool={myBoolean}
        obj={myObject}
        arr={myArray}
        fn={myFunction}
      />

      <MyComponent6
        num={myNumber}
        str={myString}
        bool={myBoolean}
        obj={myObject}
        arr={myArray}
        fn={myFunction}
      />
    </>
  )
}

export default App
