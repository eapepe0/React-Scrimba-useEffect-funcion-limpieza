import React from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
  const [show, setShow] = React.useState(true); //useState show  verdadero

  function cambiar() {
    setShow((prevShow) => !prevShow); // cambia de verdadero a falso
  }

  return (
    <div className="container">
      <button onClick={cambiar}>Toggle WindowTracker</button>
      {show && <WindowTracker />}{" "}
      {/* si show es verdadero se monta el windowtracker */}
    </div>
  );
}
