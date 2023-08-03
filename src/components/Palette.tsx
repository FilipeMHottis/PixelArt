import Pixel from "./Css/Pixel.style";

function Palette() {
  return (
    <div className="palette">
        <Pixel
          color="white" 
          style={{
            width: '50px',
            paddingTop: '50px',
            margin: '5px' 
          }} />
        
        <Pixel 
          color="black" 
          style={{ 
            width: '50px', 
            paddingTop: '50px', 
            margin: '5px' 
          }} />
    </div>
  );
}

export default Palette;
