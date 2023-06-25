import { useState } from "react";
import Line from "./Line";

const Form = () => {
  const [lines, setLines] = useState([]);

  const addLine = () => {
    setLines(lines => [...lines, <Line />]);
  };

  return (
    <div>
      <form>
        <Line />
        {lines.map(line => (line))}
      </form>
      <button onClick={addLine}>
        <span className="material-symbols-outlined">list_alt_add</span>
      </button>
    </div>
  );
};

export default Form;
