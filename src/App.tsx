import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Check this in mobile view to know how mixin works in smaller screen
      </p>
    </>
  );
}

export default App;
