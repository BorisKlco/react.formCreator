const Line = (line) => {
  return (
    <div key={line} className="formLine">
      <div className="lineName">
        <input type="text" placeholder="Label Name" />
      </div>
      <div className="lineContent">
        <button>
          Text:
          <input id={line} type="text" placeholder="input Text" disabled />{" "}
        </button>
        <button>
          Radio: <input id={line} type="radio" value="radio" disabled />{" "}
        </button>
      </div>
      <span className="material-symbols-outlined">close</span>
    </div>
  );
};

export default Line;
