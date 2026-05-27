import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detection from "./pages/Detection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/detection" element={<Detection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
