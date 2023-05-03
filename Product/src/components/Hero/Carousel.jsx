import { useState } from "react";
import styled from "styled-components";

const imgs = [
  { id: 0, value: "image-product-1.jpg" },
  { id: 1, value: "image-product-2.jpg" },
  { id: 2, value: "image-product-3.jpg" },
  { id: 3, value: "image-product-4.jpg" },
];

const Conteiner = styled.div`
    

    img:hover {
        border: 2px solid hsl(26, 100%, 55%);
    }
`;

const Thumbnail = styled.img`
    height: 260px;
    width: 260px;
    border-radius: 4%;
`;

const Div = styled.div`
    justify-content: space-between;
`;

const Tiny = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 12%;
`;

const Carousel = () => {
  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <Conteiner>

      <Thumbnail src={sliderData.value}/>

      <Div>
        {imgs.map((data, i) => (
          <Tiny
            src={data.value}
            key={data.id}
            onClick={() => handleClick(i)}
            height="70"
            width="100"
          />
        ))}
      </Div>
    </Conteiner>
  );
};

export default Carousel;
