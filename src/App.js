import React from "react";
import Navbar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Analytics from "./Components/Analysics/Analysis";
import Cards from "./Components/Cards/Card";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
