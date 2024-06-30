import "./App.css";
import AlertExample from "./examples/AlertExample";
import AccordianExample from "./examples/AccordianExample";
import TextInputExample from "./components/Inputs/TextInput/TextInputExample";

function App() {
  return (
    <div className="app">
      <div className="content">
        <AlertExample />
        <TextInputExample />
        <AccordianExample />
      </div>
    </div>
  );
}

export default App;
