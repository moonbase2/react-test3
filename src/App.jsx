import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import logo from "./marcury-logo-b.png";

const App = () => {
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setFaceShowFlag(!FaceShowFlag);
  };

  const [num, setNum] = useState(0);
  const [FaceShowFlag, setFaceShowFlag] = useState(true);

  const contentStyle = {
    color: "pink",
    fontSize: "14px"
  };
  const contentStoryStyle = {
    color: "black",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "blue" }}>marcury vision</h1>
      <p style={contentStyle}>simulation go</p>
      <ColorfulMessage color="black" message="future story session" />
      <p style={contentStoryStyle}>future story session</p>
      <button onClick={onClickCountup}>count up!</button>
      <button onClick={onClickSwitchFlag}>on/off</button>
      <img src={logo} alt="" />

      {FaceShowFlag && <p>!(^^)!</p>}
    </>
  );
};
export default App;
