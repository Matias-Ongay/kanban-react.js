import { useState } from 'react'
import './App.css'
import {Kanban} from "./components/kanban/Kanban"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{padding:"50px"}}>
      <h1 style={{marginBottom:"20px"}}>KanbanUI</h1>
      <Kanban></Kanban>
    </div>
      
  )
}

export default App
