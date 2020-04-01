import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const Object = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  height: ${({ height }) => height}px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
`;

function Element({ image, height, width, rotate, position }) {
  const handleStart = e => {};
  const handleDrag = e => {};
  const handleStop = e => {};

  return (
    <Draggable
      defaultPosition={position}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <Object image={image} width={width} height={height} />
    </Draggable>
  );
}

export default Element;
