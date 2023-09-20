import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
const [user, setUser] = useState(localStorage.getItem("user"))

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser(localStorage.getItem("user"))
      } 
    });
  },[])

  return (
    <>
    <BrowserRouter>
      <Routes>
        {user &&  <Route path="/" element={<Home />} />}
        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
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


