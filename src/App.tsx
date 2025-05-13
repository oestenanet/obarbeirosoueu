import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/menu";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Schedule from "./screens/schedule";
import Footer from "./components/footer";
import Contact from "./screens/contact";
import FloatingButtons from "./components/floatingButtons";

function App() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsNavbarHidden(true); // Adiciona a classe de desvanecimento após o scroll
    } else {
      setIsNavbarHidden(false); // Remove a classe de desvanecimento quando voltar ao topo
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpeza do event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <FloatingButtons />
      <Navbar className={isNavbarHidden ? "navbar hidden" : "navbar"} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
