import React from "react";
import "./Sobrenos.css";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import imggrupo from "../assets/exemplo.jpg";
import Pereira from "../assets/Pereira.png";
import japa from "../assets/japa.jfif";
import henrique from "../assets/henrique.enc";
import caue from "../assets/cauezao.enc";
import giovanna from "../assets/giovanna.enc";
import lara from "../assets/lara.enc";
import martuccio from "../assets/martuccio.enc";
import otavio from "../assets/otavio.enc";

function Sobrenos() {
  return (
    <div className="example">
      <Header/>
      <img class="exemplo" src={imggrupo}/>
      <main>
        <section class="titulo">
          <h1>DEV</h1>
        </section>

        <div class="alinhamento">
          <div class="imgesquerda">
          <div>
            <img class="img" src={Pereira}/>
            <h2>Pedro Pereira</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
          <div class="imgdireita">
          <div>
            <img class="img" src={henrique}/>
            <h2>Henrique Ganeko</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
        </div>

        <div class="alinhamento">
          <div class="imgesquerda">
          <div>
            <img class="img" src={japa}/>
            <h2>Matheus Yokoo</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
          <div class="imgdireita">
          <div>
            <img class="img" src={caue}/>
            <h2>Cauê Pacheco</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
        </div>

        <section class="titulo">
          <h1>Multi mídia</h1>
        </section>

        <div class="alinhamento">
          <div class="imgesquerda">
          <div>
            <img class="img" src={giovanna}/>
            <h2>Giovanna Quinalia</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
          <div class="imgdireita">
          <div>
            <img class="img" src={lara}/>
            <h2>Lara Vitória</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
        </div>

        <div class="alinhamento">
          <div class="imgesquerda">
          <div>
            <img class="img" src={martuccio}/>
            <h2>Pedro Martuccio</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
          <div class="imgdireita">
          <div>
            <img class="img" src={otavio}/>
            <h2>Otávio Cardoso</h2>
          </div>
          <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </div>
        </div>
      </main>
      <Footer/>
      
    </div>
  );
}

export default Sobrenos;
