import styled from 'styled-components';

interface PixelProps {
  color: string;
  selected?: boolean; // Adicione a propriedade selected
}

const Pixel = styled.div<PixelProps>`
  padding-top: 100%;
  background-color: ${props => props.color};
  border: 1px solid #000;
  opacity: ${props => (props.selected ? '0.7' : '1')};
`;

export default Pixel;
