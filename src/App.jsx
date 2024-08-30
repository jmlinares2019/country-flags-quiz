import { useState } from 'react';
import Navbar from './components/Navbar'

function App() {

  const [input, setInput] = useState("")

  function handleInput(e){
    setInput(e.target.value)
    console.log(input)
  }

  function searchWord(e){
    e.preventDefault();
    console.log("search!");
  }

  return (
    <div className="App">
      <Navbar
        handleChange={handleInput}
        handleSearch={searchWord}
      />
      Results here
    </div>
  )
}

export default App
