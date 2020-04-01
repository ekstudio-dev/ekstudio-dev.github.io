import React from "react";
import styled from "styled-components";

import bg from "./../../assets/blueprint-bg.png";
import logotext from "./../../assets/logo-text.png";
import asset1 from "./../../assets/blueprint-asset1.png";
import asset2 from "./../../assets/blueprint-asset2.png";
import asset3 from "./../../assets/blueprint-asset3.png";
import pencil from "./../../assets/blueprint-pencil.png";
import ruler from "./../../assets/blueprint-ruler.png";

import Element from "./Element";

const Background = styled.div`
  background-color: #466bf8;
  background-image: url(${bg});
  background-repeat: repeat;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const LogoText = styled.div`
  background-image: url(${logotext});
  background-repeat: no-repeat;
  background-size: 80% auto;
  background-position: center center;
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 720px;
  margin: auto;
  left: 0;
  right: 0;
  opacity: 0.8;
`;

function Blueprint() {
  const rand = (min, max) => Math.floor(Math.random() * max) + min;
  const pos = (width, height) => {
    const maxX = window.innerWidth - width;
    const maxY = window.innerHeight - height;

    return { x: rand(0, maxX), y: rand(0, maxY) };
  };

  return (
    <Background>
      <LogoText />
      <Element
        image={asset1}
        width={200}
        height={155}
        position={pos(200, 155)}
      />
      <Element
        image={asset2}
        width={140}
        height={190}
        position={pos(140, 190)}
      />
      <Element image={asset3} width={120} height={78} position={pos(120, 78)} />
      <Element
        image={pencil}
        width={100}
        height={135}
        position={pos(100, 135)}
      />
      <Element
        image={ruler}
        width={300}
        height={201}
        position={pos(300, 201)}
      />
    </Background>
  );
}

export default Blueprint;
