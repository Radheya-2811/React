import { useState } from "react"
import Home  from "./components/Home"
import GamePage from "./components/GamePage";

function App() {

  const [isGameStarted,setGameStarted]=useState(false)
  const toogleGamePlay=()=>{
    setGameStarted((prev)=>!prev);
  }
  return (
    <>
      {
        isGameStarted ? <GamePage/>:<Home
          toggle={toogleGamePlay}
        />
      }
    </>
  )
}

export default App
