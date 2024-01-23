import React, { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./modules/NavBar.js";
import Battle from "./pages/Battle.js";
import ChessBoard from "./modules/ChessBoard.js";
import "./App.css";
import Store from "./pages/Store.js";
import Profile from "./pages/Profile.js";
import Home from "./pages/Home.js";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  // const [userId, setUserId] = useState(undefined);

  // useEffect(() => {
  //   get("/api/whoami").then((user) => {
  //     if (user._id) {
  //       // they are registed in the database, and currently logged in.
  //       setUserId(user._id);
  //     }
  //   });
  // }, []);

  // const handleLogin = (credentialResponse) => {
  //   const userToken = credentialResponse.credential;
  //   const decodedCredential = jwt_decode(userToken);
  //   console.log(`Logged in as ${decodedCredential.name}`);
  //   post("/api/login", { token: userToken }).then((user) => {
  //     setUserId(user._id);
  //     post("/api/initsocket", { socketid: socket.id });
  //   });
  // };

  // const handleLogout = () => {
  //   setUserId(undefined);
  //   post("/api/logout");
  // };

  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <Skeleton
    //         path="/"
    //         handleLogin={handleLogin}
    //         handleLogout={handleLogout}
    //         userId={userId}
    //       />
    //     }
    //   />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>

    <div className="App-container">
      <Battle />
    </div>
  );
};

export default App;
