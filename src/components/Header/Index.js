import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import Logo from "../../assets/logo.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <img src={Logo} alt="Logo" className="logo"/>
          </Link>
          Jogos Escolares SESI
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
            <FaHome /> Home
            </a>
          </li>
          <li className="navbar-item navbar-item-esporte">
            <button className="dropdown-button navbar-link">
            <MdOutlineSportsBasketball /> Modalidades
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="/futsal" className="dropdown-link">
                  Futsal
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/handbol" className="dropdown-link">
                  Handbol
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/volei" className="dropdown-link">
                  Vôlei
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/queimada" className="dropdown-link">
                  Queimada
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/basquete" className="dropdown-link">
                  Basquete
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/futmesa" className="dropdown-link">
                  Futmesa
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/tenisdemesa" className="dropdown-link">
                  Tênis de Mesa
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/atletismo" className="dropdown-link">
                  Atletismo
                </a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="/sobrenos" className="navbar-link">
              <MdGroups2 /> Sobre Nós
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
