import { useState } from "react";
import Lines from "./Lines";

const Form = () => {
  const [lines, setLines] = useState([]);

  const addLine = () => {
    setLines(lines => [...lines, <Lines />]);
  };

  return (
    <div>
      <form>
        <Lines />
        {lines.map(line => {
          {line}
        })}
      </form>
      <button onClick={addLine}>
        <span className="material-symbols-outlined">list_alt_add</span>
      </button>
    </div>
  );
};

export default Form;
