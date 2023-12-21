import { useContext, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { ContextApi } from "./context/app.context";
import Name from "./Name";
function App() {
  const res = useContext(ContextApi);

  const [input, setInput] = useState<string>("");

  return (
    <>
      <div>
        <Counter />
        <button type="button" onClick={res.handleCounter}>
          Counter
        </button>
      </div>
      <div>
        <Name />
        <input
          type="text"
          placeholder="Enter Name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            res.handleName(input);
          }}
        >
          set Name
        </button>
      </div>
    </>
  );
}

export default App;
