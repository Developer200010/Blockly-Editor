import { useState } from 'react'
import BlockyEditor from './components/blockyEditor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BlockyEditor/>
    </>
  )
}

export default App
