import React, { useState, useEffect } from "react";
import "../Home.css";
import Header from "../components/Header/Index";
import TabelaHome from "../components/TabelaHome/Index";
import DestaquesSemana from "../components/DestaquesSemana/Index";
import Modalidades from "../components/Modalidades/Index";
import Footer from "../components/Footer/Index";
import imagemOne from "../assets/banner-home-one.png";
import imagemTwo from "../assets/banner-home-two.png";
import imagemTree from "../assets/banner-home-tree.png";
import imagemOneSmall from "../assets/banner-home-one-small.png"; // Imagem para tamanhos menores
import imagemTwoSmall from "../assets/banner-home-two-small.png"; // Imagem para tamanhos menores
import imagemTreeSmall from "../assets/banner-home-tree-small.png"; // Imagem para tamanhos menores
import Slider from "react-slick";

// Importar os arquivos CSS do Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 550); // Ajuste o breakpoint conforme necessário

  // Atualiza o estado com base na largura da tela
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 550);

    window.addEventListener("resize", handleResize);

    // Limpeza do listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Imagens a serem exibidas
  const images = isSmallScreen
    ? [imagemOneSmall, imagemTwoSmall, imagemTreeSmall]
    : [imagemOne, imagemTwo, imagemTree];

  return (
    <div className="home">
      <Header />
      
      {/* Carrossel Slick */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img className="banner" src={img} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
      
      <main>
        <section className="primeiraSessao">
          <section className="sectionTabela">
            <h2>Destaques da Semana</h2>
            <DestaquesSemana />
          </section>
          <section className="sectionTabela">
            <h2>Pontuação Geral</h2>
            <TabelaHome />
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
