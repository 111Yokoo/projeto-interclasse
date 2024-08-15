import React from "react";
import "../Home.css";
import Header from "../components/Header/Index";
import TabelaHome from "../components/TabelaHome/Index";
import DestaquesSemana from "../components/DestaquesSemana/Index";
import Modalidades from "../components/Modalidades/Index";
import Footer from "../components/Footer/Index";
import imagemOne from "../assets/banner-home-one.png";
import imagemTwo from "../assets/banner-home-two.png";
import imagemTree from "../assets/banner-home-tree.png";
import Slider from "react-slick";

// Importar os arquivos CSS do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Adiciona autoplay ao carrossel
    autoplaySpeed: 3000, // Tempo de intervalo entre as transições (em milissegundos)
  };

  return (
    <div className="home">
      <Header />
      
      {/* Carrossel Slick */}
      <Slider {...settings}>
        <div>
          <img className="banner" src={imagemOne} alt="Banner 1" />
        </div>
        <div>
          <img className="banner" src={imagemTwo} alt="Banner 2" />
        </div>
        <div>
          <img className="banner" src={imagemTree} alt="Banner 3" />
        </div>
      </Slider>
      
      <main>
        <section className="primeiraSessao">
          <section className="sectionTabela">
            <h2>Pontuação Geral</h2>
            <TabelaHome />
          </section>
          <section className="sectionTabela">
            <h2>Destaques da Semana</h2>
            <DestaquesSemana />
          </section>
        </section>
        <section className="modalidadesSessao">
          <h2>Modalidades</h2>
          <Modalidades />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
