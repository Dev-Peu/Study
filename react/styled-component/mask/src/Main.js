import { useState } from "react";
import Input from "./components/Input";
import "./main.css";

export default function Main() {
  let [v, setV] = useState("");

  function handleChange(e) {
    if (e.nativeEvent.data === " ") {
      return;
    }

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setV(e.target.value);
      return;
    }

    setV(e.target.value + " ");
  }

  function enviar() {
    if (v.length !== 8) {
    }

    v = v.split(" ");
    console.log(v);
    v = v.join("");
    console.log(v);
  }

  return (
    <div className="container">
      {/* <InputMask
        className="inputMasked"
        onChange={(e) => setV(e.target.value)}
        value={v}
        mask={"9 9 9 9"}
        placeholder="numeros que vc recebeu"
      /> */}
      <Input
        className="inputStyled"
        type="tel"
        placeholder="_ _ _ _"
        maxLength={7}
        value={v}
        onChange={handleChange}
      />
      <button onClick={enviar}>enviar</button>
    </div>
  );
}
