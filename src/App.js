import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Profilereels from "./pages/Profilereels";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile/reels" element={<Profilereels/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
