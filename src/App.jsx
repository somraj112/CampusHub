import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import LostFound from "./pages/LostFound";
import Marketplace from "./pages/Marketplace";
import Notes from "./pages/Notes";
import Schedule from "./pages/Schedule";
import ClickSpark from "./animations/ClickSpark";

function App() {
  return (
    <>
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/lostfound" element={<LostFound />} />
        <Route path="/market" element={<Marketplace />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      </ClickSpark>
    </>
  );
}

export default App
