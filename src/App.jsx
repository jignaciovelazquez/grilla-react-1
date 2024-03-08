import { useState } from "react";
import "./App.css";
import Model from "./components/model";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <ToolBar />
      <section>
        <canvas id="canvas"></canvas>
      </section>
      <Footer />
    </div>
  );
}

export default App;
