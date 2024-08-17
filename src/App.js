import React from "react";
import { Article, Brand, CTA, Navbar, Feature } from "./components";
import "./App.css";
import "./index.css";
import {
  Footer,
  Blog,
  Features,
  WhatGPT3,
  Header,
  Possibility,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
