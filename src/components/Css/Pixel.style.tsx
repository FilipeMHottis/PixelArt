import styled from 'styled-components';

interface PixelProps {
  color: string;
  padding: number;
}

const Pixel = styled.div<PixelProps>`
  padding-top: ${props => props.padding}%;
  background-color: ${props => props.color};
  border: 1px solid #000;
`;

export default Pixel;
