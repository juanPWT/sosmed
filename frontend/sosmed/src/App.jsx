import Auth from "./pages/Auth";
import BadRequest from "./pages/BadRequest";
import Broadcast from "./pages/Broadcast";
import Guest from "./pages/Guest";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Guest />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<BadRequest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
