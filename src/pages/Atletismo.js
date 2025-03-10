import React, { useState, useEffect } from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import "./pageStyles/Esportes.css";
import Banner1 from "../assets/banner-Atletismo.png";
import Banner1Small from "../assets/banner-Atletismo-Small.png";
import Banner2 from "../assets/Atletismo2.png";
import Angola from "../assets/Angola.png";
import Alemanha from "../assets/Alemanha.png";
import Belgica from "../assets/Belgica.png";
import Brasil from "../assets/Brasil.png";
import Canada from "../assets/Canadá.png";
import Inglaterra from "../assets/Inglaterra.png";
import Italia from "../assets/Italia.png";
import RepTcheca from "../assets/RepTcheca.png";
import XVermelho from "../assets/xVermelho.png";
import Futsalfoot from "../assets/atletismofooter.png"

function Futsal() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 860);
    useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth < 860);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const banner1 = isSmallScreen ? Banner1Small : Banner1;
    return (
        <div className="body">
            <Header />
            <img className="banner1" src={banner1} alt="Banner de Atletismo"/>

            <div className="line"></div>
            <section>
            <section className="info1">
                    <img className="banner2" src={Banner2} alt="Banner de Atletismo no meio" />
                    <section className="infosBanner">
                    <section>
                            <article className="ProximoJogo1">
                            <h1>Campeão Feminino</h1>
                            </article>
                            <article className="ProximoJogo2">
                                <h1></h1>
                            </article>
                        </section>
                        <section>
                            <article className="Destaque1">
                            <h1>Campeão Masculino</h1>
                            </article>
                            <article className="Destaque2">
                                <h1></h1>
                            </article>
                        </section>
                    </section>
                </section>
                <section className="info2">
                <strong><h1  className="titulosection">Masculino</h1></strong>
                        <article className="tabela">
                            <table>
                                <tr>
                                    <td className="td0"><strong>Posição </strong></td>
                                    <td className="td0"><strong>Pais</strong></td>
                                    <td className="td0"><strong>Tempo</strong></td>
                                    <td className="td0"><strong>Pontos</strong></td>
                                </tr>
                                <tr>
                                    <td className="td2">1º</td>
                                    <td className="td2">
                                        <img src={Angola} alt="Bandeira de Angola"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">2º</td>
                                    <td className="td1">
                                        <img src={Alemanha} alt="Bandeira da Alemanha"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">3º</td>
                                    <td className="td2">
                                        <img src={Italia} alt="Bandeira da Itália"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">4º</td>
                                    <td className="td1">
                                        <img src={Brasil} alt="Bandeira do Brasil"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">5º</td> 
                                    <td className="td2">
                                        <img src={RepTcheca} alt="Bandeira da República Tcheca"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">6º</td>
                                    <td className="td1">
                                        <img src={Inglaterra} alt="Bandeira da Inglaterra"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">7º</td>
                                    <td className="td2">
                                        <img src={Canada} alt="Bandeira do Canadá"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">8º</td>
                                    <td className="td1">
                                        <img src={Belgica} alt="Bandeira da Bélgica"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                            </table>
                        </article>
                        
                </section>
                {/* pode colar normal FIM */}
                <div className="line2"></div>
                <section className="info2">
                    <strong><h1  className="titulosection">Feminino</h1></strong>
                    <section className="tabelas">
                        <article className="tabela">
                           <table>
                                <tr>
                                    <td className="td0"><strong>Posição </strong></td>
                                    <td className="td0"><strong>Pais</strong></td>
                                    <td className="td0"><strong>Tempo</strong></td>
                                    <td className="td0"><strong>Pontos</strong></td>
                                </tr>
                                <tr>
                                    <td className="td2">1º</td>
                                    <td className="td2">
                                        <img src={Angola} alt="Bandeira de Angola"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">2º</td>
                                    <td className="td1">
                                        <img src={Alemanha} alt="Bandeira da Alemanha"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">3º</td>
                                    <td className="td2">
                                        <img src={Italia} alt="Bandeira da Itália"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">4º</td>
                                    <td className="td1">
                                        <img src={Brasil} alt="Bandeira do Brasil"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">5º</td> 
                                    <td className="td2">
                                        <img src={RepTcheca} alt="Bandeira da República Tcheca"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">6º</td>
                                    <td className="td1">
                                        <img src={Inglaterra} alt="Bandeira da Inglaterra"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">7º</td>
                                    <td className="td2">
                                        <img src={Canada} alt="Bandeira do Canadá"></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">8º</td>
                                    <td className="td1">
                                        <img src={Belgica} alt="Bandeira da Bélgica"></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                            </table>
                        </article>
                </section>
                    <h1 className="titulosection">SemiFinal</h1>
                </section>
                {/* pode colar normal COMEÇO */}
                <section className="SemiFinal">
                    <table className="SemiFinal1">
                        <td className="td3">
                            <article className="SemiFinal2">
                                <p>SemiFinal 1</p>
                            </article>
                            <article className="tabelaSemiFinal">
                                <h1>1° Colocado grupo 1</h1>
                                <img className="xVermelho" src={XVermelho} alt="Ícone X vermelho"></img>
                                <h1>2° Colocado grupo 2</h1>
                            </article>
                        </td>
                        <td className="td3">
                        <article className="SemiFinal2">
                                <p>SemiFinal 2</p>
                            </article>
                            <article className="tabelaSemiFinal">
                                <h1>1° Colocado grupo 2</h1>
                                <img className="xVermelho" src={XVermelho} alt="Ícone X vermelho"></img>
                                <h1>2° Colocado grupo 1</h1>
                            </article>
                        </td>
                    </table>
                </section>
                <section className="Final">
                    <strong><h1 className="titulosection">Final</h1></strong>
                    <article className="td4">
                        <aside className="finalista"><p>Finalista 1</p></aside>
                        <img src={XVermelho} alt="Ícone X vermelho"></img>
                        <aside className="finalista"><p>Finalista 2</p></aside>
                    </article>

                </section>
                {/* pode colar normal FIM */}
                <section className="bannerInferior">
                    <article className="imagemfooter"><img src={Futsalfoot} alt="Imagem de atletismo no footer"></img></article>
                    <article className="textFooter">
                        <h2>O Atletismo</h2>
                        <p >O atletismo no interclasse é uma competição escolar com provas de corrida, salto e arremesso. O objetivo é promover integração, espírito esportivo e desenvolvimento de habilidades físicas. As provas em formato de torneio oferecem um ambiente competitivo e estimulante para os alunos se destacarem e fortalecerem amizades.</p>
                    </article>
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default Futsal;
