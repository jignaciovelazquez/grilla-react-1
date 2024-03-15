
import "./App.css";
// import Model from "./components/model";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <>
      <NavBar />
      <ToolBar />
      <section>
        <canvas id="canvas"></canvas>
      </section>
      <Footer />
    </>
  );
}

export default App;
