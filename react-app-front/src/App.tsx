import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Customers from "./routes/customers";
import Splash from "./components/Splash";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="customers" element={<Customers />} />
            </Routes>
        </div>
    );
}

export default App;
