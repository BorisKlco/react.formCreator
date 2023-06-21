import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit");
        }}
      >
        <div className="formLine">
          <div className="lineName">
            <input type="text" placeholder="Label Name" />
          </div>
          <div className="lineContent">
            <button>
              Text:
              <input type="text" placeholder="input Text" disabled />{" "}
            </button>
            <button>
              Radio: <input type="radio" value="radio" disabled />{" "}
            </button>
          </div>
          <span className="material-symbols-outlined">close</span>
        </div>
      </form>
      <button>
        <span className="material-symbols-outlined">list_alt_add</span>
      </button>
    </div>
  );
};

export default Form;
