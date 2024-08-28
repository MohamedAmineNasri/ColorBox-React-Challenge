import { useState } from "react"
import Input from "./components/Input"
import Square from "./components/Square"


function App() {
  const [colorValue, setColorValue] = useState('')
  return (
    <div className="App">
      <Square colorValue={colorValue}/>
      <Input colorValue={colorValue} setColorValue={setColorValue}/>
    </div>
  )
}

export default App
