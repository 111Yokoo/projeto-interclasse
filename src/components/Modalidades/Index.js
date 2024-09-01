import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Modalidades.css";
import Slider from "react-slick";
import FutsalImage from "../../assets/futsal.jpeg";
import HandbolImage from "../../assets/handbol.jpeg";
import VoleiImage from "../../assets/volei.jpeg";
import BasqueteImage from "../../assets/basquete.jpeg";
import QueimadaImage from "../../assets/queimada.jpeg";
import TenisMesaImage from "../../assets/tenisdemesa.jpeg";
import AtletismoImage from "../../assets/atletismo.jpeg";
import FutmesaImage from "../../assets/futmesa.jpeg";
import FootballPlayer from "../../assets/football-field.png"
import HandballPlayer from "../../assets/handball.png"
import VoleiPlayer from "../../assets/volley-ball.png"
import BasketballPlayer from "../../assets/basketball.png"
import AtletismoPlayer from "../../assets/athletism.png"
import QueimadaPlayer from "../../assets/queimada.png"
import TenisMesaPlayer from "../../assets/pingue-pongue.png"
import FutMesaPlayer from "../../assets/futmesa.png"
import { PrevArrow, NextArrow } from "./Arrow";

// Configurações do carrossel
const carouselSettings = {
  dots: false, // Mostrar indicadores de ponto
  infinite: false, // Habilita rotação infinita
  speed: 500, // Velocidade de transição
  slidesToShow: 5, // Número de slides mostrados por vez
  slidesToScroll: 2, // Número de slides movidos por vez
  prevArrow: <PrevArrow />, // Adiciona a flecha anterior
  nextArrow: <NextArrow />, // Adiciona a flecha próxima
  responsive: [
    {
      breakpoint: 1024, // Para telas menores que 1024px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 852, // Para telas menores que 852px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600, // Para telas menores que 676px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 450, // Para telas menores que 600px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function Modalidades() {
  return (
    <section className="modalidadesItens">
      <Slider {...carouselSettings}>
        <a href="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={FutsalImage} alt="Futsal imagem" />
            <img className="gifImage" src={FootballPlayer} alt="Futsal icon" />
            <h2>Futsal</h2>
          </article>
        </a>
        <a href="/handbol">
          <article className="bannerModalidade">
            <img className="imageFundo" src={HandbolImage} alt="Handball imagem" />
            <img className="gifImage" src={HandballPlayer} alt="Handball icon" />
            <h2>Handbal</h2>
          </article>
        </a>
        <a href="/volei">
          <article className="bannerModalidade">
            <img className="imageFundo" src={VoleiImage} alt="volei imagem" />
            <img className="gifImage" src={VoleiPlayer} alt="volei icon" />
            <h2>Vôlei</h2>
          </article>
        </a>
        <a href="/basquete">
          <article className="bannerModalidade">
            <img className="imageFundo" src={BasqueteImage} alt="basquete imagem" />
            <img className="gifImage" src={BasketballPlayer} alt="basquete icon" />
            <h2>Basquete</h2>
          </article>
        </a>
        <a href="/queimada">
          <article className="bannerModalidade">
            <img className="imageFundo" src={QueimadaImage} alt="queimada imagem" />
            <img className="gifImage" src={QueimadaPlayer} alt="queimada icon" />
            <h2>Queimada</h2>
          </article>
        </a>
        <a href="/tenisdemesa">
          <article className="bannerModalidade">
            <img className="imageFundo" src={TenisMesaImage} alt="tenisdemesa imagem" />
            <img className="gifImage" src={TenisMesaPlayer} alt="tenisdemesa icon" />
            <h2>Tênis de Mesa</h2>
          </article>
        </a>
        <a href="/atletismo">
          <article className="bannerModalidade">
            <img className="imageFundo" src={AtletismoImage} alt="atletismo imagem" />
            <img className="gifImage" src={AtletismoPlayer} alt="atletismo icon" />
            <h2>Atletismo</h2>
          </article>
        </a>
        <a href="/futmesa">
          <article className="bannerModalidade">
            <img className="imageFundo" src={FutmesaImage} alt="futmesa imagem" />
            <img className="gifImage" src={FutMesaPlayer} alt="futmesa icon" />
            <h2>FutMesa</h2>
          </article>
        </a>
      </Slider>
    </section>
  );
}

export default Modalidades;
