import "./App.css";
import { useState } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const handleinputChange = (event) => {
    setInput(event.target.value);
  };

  const Uploadinput = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <div className="App">
      <input value={input} onChange={handleinputChange} />
      <button onClick={Uploadinput}>Upload</button>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default App;
