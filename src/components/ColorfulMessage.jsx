import React from "react";

const ColorFulMessage = (props) => {
  console.log(props);

  const contentStoryStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentStoryStyle}>{props.children}</p>;
};

export default ColorFulMessage;
