import Auth from "./pages/Auth";
import BadRequest from "./pages/BadRequest";
import Broadcast from "./pages/Broadcast";
import Guest from "./pages/Guest";
import Home from "./pages/Home";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#d9d8d7" highlightColor="#faf8f5">
        <Router>
          <Routes>
            <Route path="/" element={<Guest />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/broadcast" element={<Broadcast />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/*" element={<BadRequest />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </>
  );
}

export default App;
