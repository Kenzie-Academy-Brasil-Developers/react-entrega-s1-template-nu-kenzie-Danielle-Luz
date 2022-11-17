import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";

export default function App() {
  const [isLogged, setLogged] = useState(false);

  return isLogged ? (
    <Home setLogged={setLogged} />
  ) : (
    <Login setLogged={setLogged} />
  );
}
