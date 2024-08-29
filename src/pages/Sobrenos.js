import React from "react";
import { FaGithub } from "react-icons/fa";
import "./pageStyles/Sobrenos.css";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import banner from "../assets/banner-sobrenos.png";
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
    <section>
      <Header />
      <img class="banner" src={banner} />
      <main class="sobrenos">
        <section class="titulo">
          <h1>DEV</h1>
        </section>
        <section class="alinhamento">
          <article class="imgesquerda">
            <aside>
              <img class="img" src={Pereira} />
              <h2>Pedro Pereira</h2>
              <a href="" target="_blank">
                <FaGithub />
              </a>
            </aside>
            <div class="texto">Com um olhar atento para análise e desenvolvimento de sistemas, Pedro Pereira é também conhecido por sua liderança. Seus colegas e amigos frequentemente o descrevem como prefeito, destacando a empatia, criatividade, e liderança.</div>
          </article>
          <article class="imgdireita">
            <aside>
              <img class="img" src={henrique} />
              <h2>Henrique Ganeko</h2>
              <a href="https://github.com/HenriqueGaneko" target="_blank">
                <FaGithub />
              </a>
            </aside>
            <div class="texto">Sou Henrique, um desenvolvedor de software com ampla experiência em programação e resolução de problemas. Tenho uma forte habilidade em escrever código limpo e eficiente e sou conhecido por conseguir trabalhar bem sob pressão. Gosto de colaborar com os membros da equipe para alcançar os objetivos do projeto e estou sempre disposto a enfrentar novos desafios técnicos. Tenho conhecimento sólido em diversas linguagens de programação e frameworks modernos, e estou sempre em busca de soluções inovadoras para aprimorar nossos projetos.</div>
          </article>
        </section>
        <section class="alinhamento">
          <article class="imgesquerda">
            <aside>
              <img class="img" src={japa} />
              <h2>Matheus Yokoo</h2>
              <a href="https://github.com/111Yokoo" target="_blank">
                <FaGithub />
              </a>
            </aside>
            <div class="texto">Sou desenvolvedor full stack com experiência abrange tanto no front-end quanto no back-end, permitindo-me construir interfaces intuitivas e sistemas robustos simultaneamente. Gosto de enfrentar desafios complexos e encontrar maneiras inovadoras de resolver problemas, sempre buscando entregar produtos de alta qualidade que superem as expectativas.</div>
          </article>
          <article class="imgdireita">
            <aside>
              <img class="img" src={caue} />
              <h2>Cauê Pacheco</h2>
              <a href="https://github.com/Caue-Mattos" target="_blank">
                <FaGithub />
              </a>
            </aside>
            <div class="texto">Sou Cauê, especializado em front end. Sou conhecido por minha habilidade em criar interfaces de usuário intuitivas e responsivas, utilizando HTML, CSS e JavaScript. Minha abordagem prática e minha capacidade de aprender e me adaptar rapidamente às novas tendências fazem de mim um membro essencial da equipe, contribuindo significativamente para a criação de experiências de usuário excepcionais.</div>
          </article>
        </section>
        <section class="titulo">
          <h1>Multmídia</h1>
        </section>
        <section class="alinhamento">
          <article class="imgesquerda">
            <aside>
              <img class="img" src={giovanna} />
              <h2>Giovanna Quinalia</h2>
            </aside>
            <div class="texto">No desenvolvimento deste projeto, minha principal responsabilidade como designer foi trabalhar a junção de cores e tipografia da Home page e dos banners, garantindo que o resultado final fosse não apenas esteticamente agradável, mas também funcional e intuitivo para o usuário.</div>
          </article>
          <article class="imgdireita">
            <aside>
              <img class="img" src={lara} />
              <h2>Lara Vitória</h2>
            </aside>
            <div class="texto">No desenvolvimento deste projeto, minha principal responsabilidade como designer foi desenvolver o design das páginas de cada esporte, o que envolveu a organização das informações de forma clara e acessível, garantindo que o resultado final fosse não apenas esteticamente agradável, mas também funcional e intuitivo para o usuário.</div>
          </article>
        </section>
        <section class="alinhamento">
          <article class="imgesquerda">
            <aside>
              <img class="img" src={martuccio} />
              <h2>Pedro Martuccio</h2>
            </aside>
            <div class="texto">Me chamo Pedro, sou responsável por parte da edição visual no nosso grupo no trabalho do Inter Classe. Busquei e selecionei imagens de 8 diferentes esportes, garantindo que cada uma representasse fielmente a modalidade. Realizei edições de acordo com o que foi pedido e adequação das imagens ao nosso tema, contribuindo para um visual mais atraente e informativo na apresentação.</div>
          </article>
          <article class="imgdireita">
            <aside>
              <img class="img" src={otavio} />
              <h2>Otávio Cardoso</h2>
            </aside>
            <div class="texto">Com um olhar atento para [área de interesse ou hobby], [Seu Nome] é também conhecido(a) por [alguma característica pessoal ou realização significativa]. Seus colegas e amigos frequentemente o/la descrevem como [adjetivo positivo], destacando a [qualidade específica, como empatia, criatividade, ou liderança].</div>
          </article>
        </section>
        <section class="titulo">
          <h1>Figma</h1>
          <a class="figma" href="https://www.figma.com/design/F4aRVHmiMW9woTLJYPtftp/Untitled?node-id=0-1&t=CXeLfNAHOw8b0SR4-0">Veja o Figma do nosso site</a>
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Sobrenos;
