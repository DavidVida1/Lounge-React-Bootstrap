import createGlobalStyle from "./globalStyles";
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <globalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
