import { createContext, useContext } from "react";
import App from "../App";
import { useState } from "react";
const usecontext = createContext("");

function Modalcontext() {
  const [open, setOpen] = useState(false);

  return (
    <usecontext.Provider value={setOpen}>
      <App />
    </usecontext.Provider>
  );
}

export default Modalcontext;
