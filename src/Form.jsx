import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputWidth = `${inputValue.length}ch`;

  return (
    <div>
      <form>
        <label>
          <input type="text" />
          <input
            type="text"
            onChange={handleInputChange}
            style={{ width: inputWidth }}
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
