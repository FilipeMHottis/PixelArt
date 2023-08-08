import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Palette from "./components/Palette";
import "./styles/normalize.css";
import {
  getCanvasDataFromLocalStorage, 
  setCanvasDataToLocalStorage,
  CanvasData,
} from "./utils/localStorageFunctions";

type Size = {
  rows: number;
  columns: number;
};

function App() {
  const [size, setSize] = useState<Size>({ rows: 5, columns: 5 });

  // Carregar os dados do localStorage se estiverem disponíveis
  const [canvasData, setCanvasData] = useState<CanvasData>(getCanvasDataFromLocalStorage());

  function handleResizeCanvas(rows: number, columns: number) {
    const newCanvasData = {
      ...canvasData,
      rows,
      columns,
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

  // Função para atualizar os dados do Palette
  function updatePaletteData(updatedCanvasData: CanvasData) {
    setCanvasData(updatedCanvasData);
  }

  useEffect(() => {
    const data = getCanvasDataFromLocalStorage();
    handleResizeCanvas(data.rows, data.columns);
  }, []);

  return (
    <>
      <header>
        <h1>PixelArt</h1>
      </header>

      <main>
        {/* Palette */}
        <Palette
          canvasData={canvasData}
          updatePaletteData={updatePaletteData}
        />

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
        <Canvas 
          canvasData={canvasData}
          updatePaletteData={updatePaletteData}
        />
      </main>
    </>
  );
}

export default App;
