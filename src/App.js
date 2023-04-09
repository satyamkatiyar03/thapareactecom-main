import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Contact from "./Contact";
import Footer from "./components/Footer"
import Products from "./Products";
import Error from "./Error";
import SingleProduct from "./SingleProduct";

const App = () => {
  const theme={
    colors:{
      heading:"rbg(24 24 29)",
      text:"rgba(29,29,29, .8)",
      white:"#fff",
      black:"#212529",
      helper:"#00ffff",

      bg:"#F6F8FA",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243, 0.5)",
      hr:"#ffffff",
      gradient:
        "Linear-gradient(0deg,rbg(132 144 255)0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.16)0px 1px 3px 0px,rgba(27,31,35,0.15)0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16)0px 1px 4px",
    },
    media:{
      mobile:"768px",
      tab: "998px",
    }
  }
  return (
  <ThemeProvider theme={theme}>
  <Router>
  <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
  </Router>
  </ThemeProvider>
  )
};

export default App;
