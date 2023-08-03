import Pixel from "./Css/Pixel.style";
import Grid from "./Css/Grid.style";
import { useState } from "react";

function Canvas() {
  // Deleta depois, já que os dados devem vir do localStorage
  const rows = 5;
  const columns = 5;
  const defaultColor = 'white';
  const color = 'black';
  // ----------------------------------------------------------
  
  const [pixelsColor, setPixelsColor] = useState<string[]>(Array.from({ length: rows * columns }, () => defaultColor));

  function handleClick(index: number) {
    const newPixelsColor = [...pixelsColor];
    newPixelsColor[index] = color;
    setPixelsColor(newPixelsColor);
  }

  return (
    <div className="canvas">
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
