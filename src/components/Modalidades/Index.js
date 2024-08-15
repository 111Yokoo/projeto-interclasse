import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Modalidades.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import FutsalImage from "../../assets/futsalImage.jfif";
import HandbolImage from "../../assets/handbolImage.jpg";
import VoleiImage from "../../assets/futsalImage.jfif";
import BasqueteImage from "../../assets/futsalImage.jfif";
import QueimadaImage from "../../assets/futsalImage.jfif";
import TenisMesaImage from "../../assets/futsalImage.jfif";
import AtletismoImage from "../../assets/futsalImage.jfif";
import FutmesaImage from "../../assets/futsalImage.jfif";
import FootballPlayerGif from "../../assets/football-field.png"
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
      breakpoint: 1024, // Para telas maiores que 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600, // Para telas menores que 600px
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
        <Link to="/futsal">
            <article className="bannerModalidade">
              <img className="imageFundo" src={FutsalImage} alt="Futsal" />
              <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
              <h2>Futsal</h2>
            </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={HandbolImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>Handbal</h2>
          </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={VoleiImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>Vôlei</h2>
          </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={BasqueteImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>Basquete</h2>
          </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={QueimadaImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>Queimada</h2>
          </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={TenisMesaImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>Tênis de Mesa</h2>
          </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={AtletismoImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>Atletismo</h2>
          </article>
        </Link>
        <Link to="/futsal">
          <article className="bannerModalidade">
            <img className="imageFundo" src={FutmesaImage} alt="Futsal" />
            <img className="gifImage" src={FootballPlayerGif} alt="Futsal Gif" />
            <h2>FutMesa</h2>
          </article>
        </Link>
      </Slider>
    </section>
  );
}

export default Modalidades;
