import styled from 'styled-components';

interface PixelProps {
  color: string;
}

const Pixel = styled.div<PixelProps>`
  padding-top: 100%;
  background-color: ${props => props.color};
  border: 1px solid #000;
`;

export default Pixel;
