import { useState } from "react";
import "./App.css";
import Model from "./components/model";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <section>
        <h1>Hola react!!!!!????????'</h1>
        <Model />
      </section>
      <Footer />
    </div>
  );
}

export default App;
