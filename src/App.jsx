import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [greetingInput, setGreetingInput] = useState("");

  const handleMesageChange = (event) => {
    setGreetingInput(event.target.value);
  };

  const handleClick = () => {
    setGreetingMessage(greetingInput);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleMesageChange}
          value={greetingInput}
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
