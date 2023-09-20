import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
const [active, setActive] = useState(false)
const userNumber = localStorage.length;

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (res) => {
    if (res) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return unsubscribe;
}, [userNumber]);

  return (
    <>
  
      <Routes>
      <Route path="/" element={<Login />} />
        {active &&  <Route path="/home" element={<Home />} />}
        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
        transition={Zoom}
      />
        </>
  );

  
}

export default App;


