/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
// exportの場合は波カッコ　defalt exportの場合はカッコ不要
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const switchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //[変数名,set変数名] = useState(値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  //useEffectを使うと再レンダリングする変数を指定できる
  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      //faceShoFlagがfalseでもtrueでも実行
      faceShowFlag || setFaceShowFlag(true);
    } else {
      //faceShoFlagがtrueの時実行
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={switchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^○^)</p>}
    </>
  );
};

export default App;
