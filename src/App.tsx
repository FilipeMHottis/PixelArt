import { useState, useEffect } from "react"
import Canvas from "./components/Canvas"
import Palette from "./components/Palette"
import "./styles/normalize.css"
import {
  getCanvasDataFromLocalStorage, 
  setCanvasDataToLocalStorage,
  CanvasData,
} from "./utils/localStorageFunctions"

function App() {
  const [size, setSize] = useState({
    rows: 5,
    columns: 5,
  });

  const [canvasData, setCanvasData] = useState<CanvasData>(() => {
    const initialCanvasData = getCanvasDataFromLocalStorage() || {
      colors: ['white', 'black', 'red', 'blue', 'green'],
      selectedColor: 'black',
      sizeGrid: {
        rows: size.rows,
        columns: size.columns,
      },
      canvas: Array.from({ length: size.rows * size.columns }, () => 'white'),
    };
    return initialCanvasData;
  });

  function handleResizeCanvas(rows: number, columns: number) {
    const newCanvasData = {
      ...canvasData,
      sizeGrid: {
        rows,
        columns,
      },
      canvas: Array.from({ length: rows * columns }, (_, index) => {
        if (index < canvasData.canvas.length) {
          return canvasData.canvas[index];
        }
        return 'white';
      }),
    };

    setCanvasData(newCanvasData);
    setCanvasDataToLocalStorage(newCanvasData);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    handleResizeCanvas(size.rows, size.columns);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setSize((prevSize) => ({
      ...prevSize,
      [name]: Number(value),
    }));
  }

  useEffect(() => {
    handleResizeCanvas(size.rows, size.columns);
  }, []);

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
            name="rows"
            onChange={handleChange}
          />
          x
          <input 
            type="number" 
            placeholder="5" 
            name="columns"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Resize</button>
        </div>

        {/* Bord */}
        <Canvas />
      </main>
    </>
  );
}

export default App;
