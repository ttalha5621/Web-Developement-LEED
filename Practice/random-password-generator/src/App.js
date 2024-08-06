import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { useState } from "react";
import { LC, NC, SC, UC } from "./Data/PassChar";

function App() {
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passowrdLen, setPasswordLen] = useState(10);
  let [fPass, setPass] = useState("");

  let createPassowrd = () => {
    let finalPass = "";
    let charSet = "";
    if (upperCase || lowerCase || number || symbol) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < passowrdLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      alert("Please Select One Checkbox...");
    }
  };

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }

  return (
    <>
      <div className="passowrdBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxIn">
          <input type="text" value={fPass} readOnly />
          <button onClick={copyPass}>
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            min="8"
            max="20"
            value={passowrdLen}
            onChange={(event) => setPasswordLen(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label>Including UpperCase</label>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
          />
        </div>

        <div className="passLength">
          <label>Including LoverCase</label>
          <input
            type="checkbox"
            checked={lowerCase}
            onChange={() => setLowerCase(!lowerCase)}
          />
        </div>

        <div className="passLength">
          <label>Including Symbols</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="passLength">
          <label>Including Symbols</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <button className="btn" onClick={createPassowrd}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
