import Carousel from "./Carousel";
import styled from "styled-components";
import Item from "./Item";

const ConteinerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  width: 66rem;
  gap: 2rem;
`;


const Hero = () => {
  return (
    <ConteinerFlex>
      <Div>
        <Carousel />

        <Item />
      </Div>
    </ConteinerFlex>
  );
};

export default Hero;
