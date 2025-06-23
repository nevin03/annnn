import React from "react";
import MainNavbar from "./components/MainNavbar";
import CarouselPage from "./components/CarousalPage";
import "../src/App.css";
import AboutPage from "./components/AboutPage";
import NewsUpdates from "./components/NewsUpdates";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MainNavbar />
      <CarouselPage />
      <AboutPage />
      <NewsUpdates />
      <Footer />
    </div>
  );
}

export default App;
