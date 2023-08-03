import { useState, useEffect } from "react"
import Canvas from "./components/Canvas"
import Palette from "./components/Palette"
import "./styles/normalize.css"
import {
  getCanvasDataFromLocalStorage, 
  setCanvasDataToLocalStorage,
} from "./utils/localStorageFunctions"

const initialCanvasData = getCanvasDataFromLocalStorage() || {
  colors: ['white', 'black', 'red', 'blue', 'green'],
  selectedColor: 'black',
  sizeGrid: {
    rows: 5,
    columns: 5,
  },
  canvas: Array.from({ length: 5 * 5 }, () => 'white'),
}

function App() {
  const [size, setSize] = useState({
    rows: initialCanvasData.sizeGrid.rows,
    columns: initialCanvasData.sizeGrid.columns,
  })

  function handleResizeCanvas(rows:number, columns:number) {
    const newCanvasData = {
      ...initialCanvasData,
      sizeGrid: {
        rows,
        columns,
      },
      canvas: Array.from({ length: 5 * 5 }, () => 'white'),
    }

    setCanvasDataToLocalStorage(newCanvasData)
  }
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    handleResizeCanvas(size.rows, size.columns)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setSize({
      ...size,
      [name]: Number(value),
    })
  }
  
  useEffect(() => {
    handleResizeCanvas(size.rows, size.columns)
  }, [])

  return (
    <>
      <header>
        <h1>PixelArt</h1>
      </header>

      <main>
        {/* Palette */}
        <Palette />

        {/* Size */}
        <div className="size">
          <input 
            type="number" 
            placeholder="5"
            onChange={ handleChange }
          />
          x
          <input 
            type="number" 
            placeholder="5" 
            onChange={ handleChange }
          />
          <button onClick={ handleClick }>Resize</button>
        </div>

        {/* Bord */}
        <Canvas />
      </main>
    </>
  )
}

export default App
