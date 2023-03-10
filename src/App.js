import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';

export default function App() {
  return (
    <>
      <React.StrictMode>
        <Header />
        <Main />
        <Footer />
      </React.StrictMode>
    </>
  )
}