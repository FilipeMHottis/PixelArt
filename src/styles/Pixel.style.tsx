import styled from 'styled-components';

interface PixelProps {
  color: string;
  selected?: boolean; // Adicione a propriedade selected
}

const Pixel = styled.div<PixelProps>`
  width: 50px;
  padding-top: 50px;
  background-color: ${props => props.color};
  border: 1px solid #000;
  opacity: ${props => (props.selected ? '0.7' : '1')};
`;

export default Pixel;
