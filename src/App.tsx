import Canvas from "./components/Canvas"

function App() {
  return (
    <>
    <header>
      <h1>PixelArt</h1>
    </header>
    <main>
      {/* Palette */}
      <div className="palette">
        <div className="color-black"></div>
        <div className="color-white"></div>
      </div>

      {/* Size */}
      <div className="size">
        <input type="number" placeholder="5" />
        x
        <input type="number" placeholder="5" />
        <button>Resize</button>
      </div>

      {/* Bord */}
      <Canvas />
    </main>
    </>
  )
}

export default App
