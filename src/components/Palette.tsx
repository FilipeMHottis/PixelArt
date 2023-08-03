import { useState, useEffect } from "react";
import { 
  setCanvasDataToLocalStorage,
  CanvasData, 
} from "../utils/localStorageFunctions";
import { listColor } from "../utils/randomColor";
import Pixel from "../styles/Pixel.style";

interface PaletteProps {
  canvasData: CanvasData;
  updatePaletteData: (updatedCanvasData: CanvasData) => void;
}

function Palette({ canvasData, updatePaletteData }: PaletteProps) {
  const [colors, setColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('black');

  // Carregar os dados do localStorage se estiverem disponíveis
  useEffect(() => {
    setColors(canvasData.colors);
    setSelectedColor(canvasData.selectedColor);
  }, [canvasData]);

  // Mudanças de Cores
  const handleClick = (color: string) => {
    setSelectedColor(color);
  };

  const addColor = () => {
    setColors(listColor());
  };

  useEffect(() => {
    updatePaletteData({
      ...canvasData,
      colors,
      selectedColor,
    });
    setCanvasDataToLocalStorage({
      ...canvasData,
      colors,
      selectedColor,
    });
  }, [colors, selectedColor]);

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
        onClick={addColor}
      >
        Random Collors
      </button>
    </div>
  );
}

export default Palette;
