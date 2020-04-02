import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const Object = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  height: ${({ elHeight }) => elHeight}px;
  position: absolute;
  top: 0;
  transform: rotate(${({ elRotate }) => elRotate}deg) scale(0.8);
  left: 0;
  width: ${({ elWidth }) => elWidth}px;
`;

function Element({ image, height, width, rotate, position }) {
  return (
    <Draggable defaultPosition={position}>
      <div>
        <Object
          image={image}
          elWidth={width}
          elHeight={height}
          elRotate={rotate}
        />
      </div>
    </Draggable>
  );
}

export default Element;
