import { useState } from "react";
import Lines from "./Lines";

const Form = () => {
  const [lines, setLines] = useState([]);

  const addLine = () => {
    setLines((lines) => [...lines, lines.length]);
  };

  return (
    <div>
      <form>
        {lines.map((line) => {
          <Lines key={line} />;
        })}
      </form>
      <button onClick={addLine}>
        <span className="material-symbols-outlined">list_alt_add</span>
      </button>
    </div>
  );
};

export default Form;
