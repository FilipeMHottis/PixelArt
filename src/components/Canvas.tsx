import Pixel from "./Css/Pixel.style";
import Grid from "./Css/Grid.style";

function Canvas() {
  const rows = 10; // Defina o número de linhas desejado
  const columns = 10; // Defina o número de colunas desejado

  return (
    <div className="canvas">
      <Grid rows={rows} columns={columns}>
        {Array.from({ length: rows * columns }).map((_, index) => (
          <Pixel key={index} padding={100} color="white" />
        ))}
      </Grid>
    </div>
  );
}

export default Canvas;
