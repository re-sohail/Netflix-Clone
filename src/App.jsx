import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tv-programmes"
          element={<h1 style={{ color: "white" }}>TV Programmes</h1>}
        />
        <Route
          path="/films"
          element={<h1 style={{ color: "white" }}>Films</h1>}
        />
        <Route
          path="/originals"
          element={<h1 style={{ color: "white" }}>Originals</h1>}
        />
        <Route
          path="/recently-added"
          element={<h1 style={{ color: "white" }}>Recently Added</h1>}
        />
        <Route
          path="/list"
          element={<h1 style={{ color: "white" }}>List</h1>}
        />
        <Route path="/play/:id" element={<Player />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
