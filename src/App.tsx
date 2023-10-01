import { useState } from 'react'
import './App.css'
import Search from './Components/Search'

function App() {

  const [postCode, setPostCode] = useState<string>("");

  return (
    <>
      <Search 
        postCodeValue = {postCode}
        onPostCodeValueChange = {setPostCode}/>
    </>
  )
}

export default App
