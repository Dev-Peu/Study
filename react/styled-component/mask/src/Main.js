import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import "./main.css";

export default function Main() {
  const [v, setV] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const inputMasked = document.querySelector(".inputMasked");
      console.log(inputMasked.value);
    }
  }, [clicked]);
  return (
    <div className="container">
      <InputMask
        className="inputMasked"
        onChange={(e) => setV(e.target.value)}
        value={v}
        mask={"9 9 9 9"}
        placeholder="numeros que vc recebeu"
      />
      <button onClick={() => setClicked(!clicked)}>Clique</button>
    </div>
  );
}
