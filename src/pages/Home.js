import React from "react";
import "../Home.css";
import Header from "../components/Header/Index";
import TabelaHome from "../components/TabelaHome/Index";
import DestaquesSemana from "../components/DestaquesSemana/Index";
import Modalidades from "../components/Modalidades/Index";
import Footer from "../components/Footer/Index";
import imagem from "../assets/banner-home.png";

function Home() {
  return (
    <div className="home">
      <Header />
      <img class="banner" src={imagem}/>
      <main>
        <section class="primeiraSessao">
          <section class="sectionTabela">
            <h2>Pontuação Geral</h2>
            <TabelaHome />
          </section>
          <section class="sectionTabela">
            <h2>Destaques da Semana</h2>
            <DestaquesSemana />
          </section>
        </section>
        <section class="modalidadesSessao">
          <h2>Modalidades</h2>
          <Modalidades />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
