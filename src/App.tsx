import Canvas from "./components/Canvas"
import Palette from "./components/Palette"

function App() {
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
