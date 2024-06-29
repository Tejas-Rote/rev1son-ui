import "./App.css";
import AlertExample from "./examples/AlertExample";
import AccordianExample from "./examples/AccordianExample";

function App() {
  return (
    <div className="app">
      <div className="content">
        <AlertExample />
        {/* <TextInputExample /> */}
        <AccordianExample />
      </div>
    </div>
  );
}

export default App;
