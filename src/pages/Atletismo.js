import React from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import "./pageStyles/Esportes.css";
import Banner1 from "../assets/BannerFutsal.jpg";
import Banner2 from "../assets/Futsal2.png";
import Angola from "../assets/Angola.png";
import Alemanha from "../assets/Alemanha.png";
import Belgica from "../assets/Belgica.png";
import Brasil from "../assets/Brasil.png";
import Canada from "../assets/Canadá.png";
import Inglaterra from "../assets/Inglaterra.png";
import Italia from "../assets/Italia.png";
import RepTcheca from "../assets/RepTcheca.png";
import XVermelho from "../assets/xVermelho.png";
import Futsalfoot from "../assets/futfem.jpg"

function Futsal() {
    return (
        <div className="body">
            <Header />
            <img class="banner1" src={Banner1} />

            <div className="line"></div>
            <section>
            <section className="info1">
                    <img class="banner2" src={Banner2} />
                    <section class="infosBanner">
                        <section>
                            <article className="ProximoJogo1">
                                <h1>Próximo Jogo</h1>
                            </article>
                            <article className="ProximoJogo2">
                                <h1>sss X zzz</h1>
                            </article>
                        </section>
                        <section>
                            <article className="Destaque1">
                                <h1>Destaque</h1>
                            </article>
                            <article className="Destaque2">
                                <h1>Jogador1</h1>
                            </article>
                        </section>
                    </section>
                </section>
                <section className="info2">
                <strong><h1  class="titulosection">Masculino</h1></strong>
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
                                        <img src={Angola}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">2º</td>
                                    <td className="td1">
                                        <img src={Alemanha}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">3º</td>
                                    <td className="td2">
                                        <img src={Italia}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">4º</td>
                                    <td className="td1">
                                        <img src={Brasil}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">5º</td> 
                                    <td className="td2">
                                        <img src={RepTcheca}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">6º</td>
                                    <td className="td1">
                                        <img src={Inglaterra}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">7º</td>
                                    <td className="td2">
                                        <img src={Canada}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">8º</td>
                                    <td className="td1">
                                        <img src={Belgica}></img>
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
                    <strong><h1  class="titulosection">Feminino</h1></strong>
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
                                        <img src={Angola}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">2º</td>
                                    <td className="td1">
                                        <img src={Alemanha}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">3º</td>
                                    <td className="td2">
                                        <img src={Italia}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">4º</td>
                                    <td className="td1">
                                        <img src={Brasil}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">5º</td> 
                                    <td className="td2">
                                        <img src={RepTcheca}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">6º</td>
                                    <td className="td1">
                                        <img src={Inglaterra}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                                <tr>
                                    <td className="td2">7º</td>
                                    <td className="td2">
                                        <img src={Canada}></img>
                                    </td>
                                    <td className="td2">0</td>
                                    <td className="td2">0</td>
                                </tr>
                                <tr>
                                    <td className="td1">8º</td>
                                    <td className="td1">
                                        <img src={Belgica}></img>
                                    </td>
                                    <td className="td1">0</td>
                                    <td className="td1">0</td>
                                </tr>
                            </table>
                        </article>
                </section>
                    <h1 class="titulosection">SemiFinal</h1>
                </section>
                {/* pode colar normal COMEÇO */}
                <section className="SemiFinal">
                    <table className="SemiFinal1">
                        <td className="td3">
                            <article className="SemiFinal2">
                                <p>SemiFinal 1</p>
                            </article>
                            <article class="tabelaSemiFinal">
                                <h1>1° Colocado grupo 1</h1>
                                <img class="xVermelho" src={XVermelho}></img>
                                <h1>2° Colocado grupo 2</h1>
                            </article>
                        </td>
                        <td className="td3">
                        <article className="SemiFinal2">
                                <p>SemiFinal 2</p>
                            </article>
                            <article class="tabelaSemiFinal">
                                <h1>1° Colocado grupo 2</h1>
                                <img class="xVermelho" src={XVermelho}></img>
                                <h1>2° Colocado grupo 1</h1>
                            </article>
                        </td>
                    </table>
                </section>
                <section className="Final">
                    <strong><h1 class="titulosection">Final</h1></strong>
                    <article className="td4">
                        <aside className="finalista"><p>Finalista 1</p></aside>
                        <img src={XVermelho}></img>
                        <aside className="finalista"><p>Finalista 2</p></aside>
                    </article>

                </section>
                {/* pode colar normal FIM */}
                <section className="bannerInferior">
                    <article className="imagemfooter"><img src={Futsalfoot}></img></article>
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

