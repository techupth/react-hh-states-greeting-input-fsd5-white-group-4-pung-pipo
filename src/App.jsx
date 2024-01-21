import "./App.css";
import { useState } from "react";

function App() {
  const [greetingDefault, setDefault] = useState("Greeting Message");
  const [greetingType, setType] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{greetingDefault}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setType(event.target.value);
          }}
          value={greetingType}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setDefault(greetingType);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
