import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import Header from "../components/Header/Index";
import TabelaHome from "../components/TabelaHome/Index";
import imagem from "../assets/banner-home.png"

function Home() {
  return (
    <div className="home">
      <Header />
      <img class="banner" src={imagem}/>
      <section class="section">
        <h2>Pontuação Geral</h2>
        <TabelaHome />
      </section>
    </div>
  );
}

export default Home;
