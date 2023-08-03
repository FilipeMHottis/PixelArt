import { useState } from "react";
import Pixel from "../styles/Pixel.style";

function Palette() {
  const [colors, setColors] = useState<string[]>(['white', 'black', 'red', 'blue', 'green']);
  const [selectedColor, setSelectedColor] = useState<string>('black');

  const handleClick = (color: string) => {
    setSelectedColor(color);
  }

  return (
    <div className="palette">
      { colors.map((color, index) => (
        <Pixel
        key={ index }
        color={ color }
        onClick={ () => handleClick(color) }
        selected={ color === selectedColor }
        style={{ 
          width: '50px', 
          paddingTop: '50px', 
          margin: '5px' 
        }}
        />
      ))}
    </div>
  );
}

export default Palette;
