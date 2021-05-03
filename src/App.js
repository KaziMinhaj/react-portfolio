import Particles from "react-particles-js";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            numbers: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      ></Particles>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
