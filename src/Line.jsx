const Line = () => {
  return (
    <div  className="formLine">
      <div className="lineName">
        <input type="text" placeholder="Label Name" />
      </div>
      <div className="lineContent">
        <button>
          Text:
          <input  type="text" placeholder="input Text" disabled />{" "}
        </button>
        <button>
          Radio: <input type="radio" value="radio" disabled />{" "}
        </button>
      </div>
      <span className="material-symbols-outlined">close</span>
    </div>
  );
};

export default Line;
