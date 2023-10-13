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
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Protected from "./Routes/Protected";
import Protectedauth from "./Routes/Protectedauth";

function App() {
  // this is a test to see if commit works
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/messages" element={<Messages />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/reels" element={<Profilereels />} />
        <Route
          path="/signin"
          element={
            <Protectedauth>
              <Signin />{" "}
            </Protectedauth>
          }
        />
        <Route
          path="/signup"
          element={
            <Protectedauth>
              <Signup />
            </Protectedauth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
