const Lines = (line) => {
  return (
    <div key={line}>
      <label htmlFor={`input-${line}`}>Label {line + 1}: </label>
      <input type="text" id={`input-${line}`} />
    </div>
  );
};

export default Lines;
