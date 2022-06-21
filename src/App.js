
import "./App.css";
import Header from "./Header";
import { useState } from "react";
import UserForm from "./UserForm";

function App() {
  const [parentCount, setParentCount] = useState(0);
  function addOneToCount() {
    setParentCount(parentCount + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Total: {parentCount}</h1>
        <Header title={"First counter"} onButtonClick={addOneToCount} />
        <Header title={"Second counter"} onButtonClick={addOneToCount} />
      </header>
      <UserForm />
    </div>
  );
}

export default App;
