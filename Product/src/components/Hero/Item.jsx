import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 50%;
  height: 30rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 875px) {
    width: 100%;
  }
`;

const P = styled.p`
  color: hsl(26, 100%, 55%);
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
`;

const About = styled.p`
  color: grey;
  font-size: 0.9rem;
`;

const Div = styled.div`
  color: black;
  display: flex;
  gap: 1rem;
  font-weight: 700;
  font-size: 1.6rem;
  padding-top: 1rem;

  span {
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    font-size: 1rem;
    background-color: rgb(222, 125, 39, 0.1);
    padding: 2.8px 6px;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Discont = styled.p`
  color: #a4a0a0;
  text-decoration: line-through;
  margin-top: 2px;
`;

const Btns = styled.div`
  border-radius: 6px;
  background-color: rgba(180, 179, 179, 0.1);
  width: 35%;
  justify-content: space-between;
  display: flex;
  padding: 1px;
`;

const Counter = styled.span`
  font-weight: 700;
  align-self: center;
`;

const AddRemove = styled.button`
  margin: 0 6px 6px;
  padding: 0 0.5rem;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 32px;
  color: hsl(26, 100%, 55%);
  cursor: pointer;
`;

const AddCart = styled.button`
  width: 65%;
  padding: 14px 1px;
  color: white;
  font-weight: 700;
  font-size: 1.1em;
  background-color: hsl(26, 100%, 55%);
  border-color: transparent;
  box-shadow: 0px 10px 5px hsl(25, 100%, 94%, 0.8);
  border-radius: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;

const Item = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <Container>
      <div>
        <P>Sneaker Company</P>
        <h1>Fall Limited Edition Sneakers</h1>
        <About>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </About>

        <div>
          <Div>
            <div>$125.00</div> <span>50%</span>
          </Div>
          <Discont>$250.00</Discont>
        </div>

        <Center>
          <Btns>
            <AddRemove onClick={decrease}>-</AddRemove>
            <Counter>{counter}</Counter>
            <AddRemove onClick={increase}>+</AddRemove>
          </Btns>

          <AddCart>
            <span>Add to cart</span>
          </AddCart>
        </Center>
      </div>
    </Container>
  );
};

export default Item;
