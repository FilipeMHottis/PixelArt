import styled from 'styled-components';

const Pixel = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border: 1px solid #000;
`;

export default Pixel;
