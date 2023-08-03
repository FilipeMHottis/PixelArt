import { useState, useEffect } from "react";
import { 
  getCanvasDataFromLocalStorage, 
  setCanvasDataToLocalStorage, 
  CanvasData, 
} from "../utils/localStorageFunctions";
import { listColor } from "../utils/randomColor";
import Pixel from "../styles/Pixel.style";

function Palette() {
  const [colors, setColors] = useState<string[]>(['white', 'black']);
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [canvasData, setCanvasData] = useState<CanvasData | null>(getCanvasDataFromLocalStorage() || null);

  const handleColor = (setColor?:string) => {
    try {
    const newCanvasData = {
      ...canvasData,
      colors: [...colors],
      selectedColor: setColor || selectedColor,
    } as CanvasData;
    setCanvasData(newCanvasData);

    if (newCanvasData) {
      setCanvasDataToLocalStorage(newCanvasData);
    }
    } catch (error) {
    console.log(error);
    };
  }
  const handleClick = (color: string) => {
    setSelectedColor(color);
    handleColor(color);
  }
  const updateData = () => {
    setColors(canvasData?.colors || colors);
    setSelectedColor(canvasData?.selectedColor || selectedColor);
  }

  useEffect(() => {
    handleColor();
    if (colors.length === 2) setColors(listColor());
    updateData();
  }, []);

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

      <button
        onClick={() => {setColors(listColor())}}
      >
        Random Collors
      </button>
    </div>
  );
}

export default Palette;
