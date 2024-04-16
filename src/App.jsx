import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App