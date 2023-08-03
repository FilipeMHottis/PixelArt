import styled from 'styled-components';

interface GridProps {
  rows: number;
  columns: number;
}

const Grid = styled.div<GridProps>`
  max-width: 90vw;
  max-height: 90vh;
  border: 1px solid #000;
  display: grid;
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 4px;
  border: 1px solid #000;
  padding: 5px;
`;

export default Grid;
