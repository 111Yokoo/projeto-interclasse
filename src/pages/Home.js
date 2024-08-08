import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import Header from "../components/Header/Index";
import imagem from "../assets/teste.jpg"

function Home() {
  return (
    <div className="home">
      <Header />
      <img class="banner" src={imagem}/>

      <section class="section">
        teste
      </section>
    </div>
  );
}

export default Home;
