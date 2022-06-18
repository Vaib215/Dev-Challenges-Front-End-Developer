import Buttons from "./pages/Buttons";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
        </Routes>
    </div>
  );
}

export default App;
