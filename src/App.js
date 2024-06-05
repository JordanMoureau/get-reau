import "./styles.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FromNovPhoto from "./pages/FromNovPhoto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fromnov" element={<FromNovPhoto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
