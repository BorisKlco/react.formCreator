import { createRoot } from "react-dom/client";
import Form from "./Form";

const App = () => {
  return (
    <>
      <header>
        <h1>React - FormCreator</h1>
      </header>
      <div className="formContainer">
        <Form />
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
