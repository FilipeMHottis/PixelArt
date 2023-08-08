import { useEffect, useState } from "react";
import { CanvasData, setCanvasDataToLocalStorage } from "../utils/localStorageFunctions";
import Pixel from "../styles/Pixel.style";
import Grid from "../styles/Grid.style";

type Props = {
  canvasData: CanvasData;
  updatePaletteData: (updatedCanvasData: CanvasData) => void
};

function Canvas(props: Props) {
  const { canvasData, updatePaletteData } = props;
  const { rows, columns, selectedColor } = canvasData;
  const defaultColor = "white";
  
  const [pixelsColor, setPixelsColor] = useState<string[]>(canvasData.canvas);

  function updateCanvasDataAndLocalStorage() {
    const newCanvasData = {
      ...canvasData,
      canvas: pixelsColor,
    };
    updatePaletteData(newCanvasData);
    setCanvasDataToLocalStorage(newCanvasData);
  }

  function clearCanvas() {
    const newPixelsColor = [...pixelsColor];
    newPixelsColor.fill(defaultColor);
    setPixelsColor(newPixelsColor);
  }

  function handleClick(index: number) {
    const newPixelsColor = [...pixelsColor];
    newPixelsColor[index] = selectedColor;
    setPixelsColor(newPixelsColor);
  }

  useEffect(() => {
    updateCanvasDataAndLocalStorage();
  }, [pixelsColor]);

  return (
    <div className="canvas">
      <button onClick={clearCanvas}>Clear All</button>

      <Grid rows={rows} columns={columns}>
        {Array.from({ length: rows * columns }).map((_, index) => (
          <Pixel
            key={ index } 
            onClick={ () => handleClick(index) } 
            color={ pixelsColor[index] }
          />
        ))}
      </Grid>
    </div>
  );
}

export default Canvas;
