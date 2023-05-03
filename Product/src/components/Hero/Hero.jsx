import Carousel from "./Carousel";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hero = () => {
  return (
    <Div>
      <Carousel />
      <div></div>
    </Div>
  )
}

export default Hero
