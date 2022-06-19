import Buttons from "./pages/Buttons";
import { Routes, Route } from "react-router-dom";
import Inputs from "./pages/Inputs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </div>
  );
}

export default App;
