import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import NavBar2 from "./component/NavBar2";
import New from "./component/New";
function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Navbar/>
                    <NavBar2 />
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <New key="general"
                                            category="general" />}
                                    />
                                    <Route
                                        path="/entertainment"
                                        element={
                                            <New key="entertainment"
                                            category="entertainment" />
                                        }
                                    />
                                    <Route
                                        path="/Technology"
                                        element={
                                            <New key="technology"
                                            category="technology" />}
                                    />
                                    <Route
                                        path="/Sports"
                                        element={
                                            <New key="sports"
                                            category="sports" />}
                                    />
                                    <Route
                                        path="/business"
                                        element={
                                            <New key="business"
                                            category="business" />}
                                    />
                                    <Route
                                        path="/health"
                                        element={
                                            <New key="health"
                                            category="health" />}
                                    />
                                    <Route
                                        path="/science"
                                        element={
                                            <New key="science"
                                            category="science" />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
