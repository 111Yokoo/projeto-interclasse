import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleSports = () => {
    setIsSportsOpen(!isSportsOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src="" alt="Logo" />
          </Link>
          Jogos Escolares SESI
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item navbar-item-esporte">
            <button
              onClick={toggleSports}
              className="dropdown-button navbar-link"
            >
              Esportes
            </button>
            {isSportsOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#futsal" className="dropdown-link">
                    Futsal
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#handebol" className="dropdown-link">
                    Handebol
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#volei" className="dropdown-link">
                    Vôlei
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#queimada" className="dropdown-link">
                    Queimada
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#basquete" className="dropdown-link">
                    Basquete
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#futmesa" className="dropdown-link">
                    Futmesa
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#tenisdemesa" className="dropdown-link">
                    Tênis de Mesa
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#atletismo" className="dropdown-link">
                    Atletismo
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <a href="#sobrenos" className="navbar-link">
              Sobre Nós
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
