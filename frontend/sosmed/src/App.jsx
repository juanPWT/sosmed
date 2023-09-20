import Broadcast from "./pages/Broadcast";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardcast" element={<Broadcast />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
