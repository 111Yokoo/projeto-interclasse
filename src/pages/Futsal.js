import React from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import "../Esportes.css";
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

            <div className="info1">
                <img class="banner2" src={Banner2} />
                <div className="ProximoJogo1">
                    <h1>Próximo Jogo</h1>
                </div>
                <div className="ProximoJogo2">
                    <h1>sss X zzz</h1>
                </div>

                <div className="Destaque1">
                    <h1>Jogador Destaque</h1>
                </div>
                <div className="Destaque2">
                    <h1>Jogador1</h1>
                </div>
            </div>

            <div className="info2">

                <strong><h1>Masculino</h1></strong>
                <div className="Tabelas">
                    <div className="Tabela1">
                        <table>
                            <tr>
                                <td className="td0"><strong>Grupo 1</strong></td>
                                <td className="td0"><strong>Pontos</strong></td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={Angola}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Alemanha}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={Italia}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Brasil}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                        </table>
                    </div>
                    <div className="Tabela2">
                        <table>
                            <tr>
                                <td className="td0"><strong>Grupo 2</strong></td>
                                <td className="td0"><strong>Pontos</strong></td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={RepTcheca}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Inglaterra}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={Canada}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Belgica}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <h1>SemiFinal</h1>
            </div>
            <div className="SemiFinal">
                <table className="SemiFinal1">
                    <td className="td3">
                        <div className="SemiFinal2">
                            <p>SemiFinal1</p>
                        </div>
                        <h1>1° Colocado grupo 1</h1>
                        <br></br>
                        <br></br>
                        <img src={XVermelho}></img>
                        <br></br>
                        <br></br>
                        <h1>2° Colocado grupo 2</h1>
                    </td>
                    <td className="td3">
                        <div className="SemiFinal2">
                            <p>SemiFinal2</p>
                        </div>
                        <h1>1° Colocado grupo 2</h1>
                        <br></br>
                        <br></br>
                        <img src={XVermelho}></img>
                        <br></br>
                        <br></br>
                        <h1>2° Colocado grupo 1</h1>
                    </td>
                </table>
            </div>
            <div className="Final">
            <strong><h1>Final</h1></strong>
            <div className="td4">
            
                    <div className="finalista"><p>Finalista 1</p></div>
                    <img src={XVermelho}></img> 
                    <div className="finalista"><p>Finalista 2</p></div>
            </div>
            </div>
            <div className="line2"></div>
            
            <div className="info2">

                <strong><h1>Feminino</h1></strong>
                <div className="Tabelas">
                    <div className="Tabela1">
                        <table>
                            <tr>
                                <td className="td0"><strong>Grupo 1</strong></td>
                                <td className="td0"><strong>Pontos</strong></td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={Angola}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Alemanha}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={Italia}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Brasil}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                        </table>
                    </div>
                    <div className="Tabela2">
                        <table>
                            <tr>
                                <td className="td0"><strong>Grupo 2</strong></td>
                                <td className="td0"><strong>Pontos</strong></td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={RepTcheca}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Inglaterra}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                            <tr>
                                <td className="td2">
                                    <img src={Canada}></img>
                                </td>
                                <td className="td2">0</td>
                            </tr>
                            <tr>
                                <td className="td1">
                                    <img src={Belgica}></img>
                                </td>
                                <td className="td1">0</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <h1>SemiFinal</h1>
            </div>
            <div className="SemiFinal">
                <table className="SemiFinal1">
                    <td className="td3">
                        <div className="SemiFinal2">
                            <p>SemiFinal1</p>
                        </div>
                        <h1>1° Colocado grupo 1</h1>
                        <br></br>
                        <br></br>
                        <img src={XVermelho}></img>
                        <br></br>
                        <br></br>
                        <h1>2° Colocado grupo 2</h1>
                    </td>
                    <td className="td3">
                        <div className="SemiFinal2">
                            <p>SemiFinal2</p>
                        </div>
                        <h1>1° Colocado grupo 2</h1>
                        <br></br>
                        <br></br>
                        <img src={XVermelho}></img>
                        <br></br>
                        <br></br>
                        <h1>2° Colocado grupo 1</h1>
                    </td>
                </table>
            </div>
            <div className="Final">
            <strong><h1>Final</h1></strong>
            <div className="td4">
            
                    <div className="finalista"><p>Finalista 1</p></div>
                    <img src={XVermelho}></img> 
                    <div className="finalista"><p>Finalista 2</p></div>
            </div>
           
            </div>
            <div className="oque">
            <div className="imagemfooter"><img src={Futsalfoot}></img></div>
            <p className="textFooter">O jogo de futsal no interclasse é uma competição entre turmas de uma escola, onde equipes de alunos disputam partidas seguindo as regras do futsal. O evento promove integração, espírito esportivo e diversão, além de ser uma oportunidade para os alunos demonstrarem suas habilidades e fortalecerem laços de amizade em um ambiente competitivo e saudável.</p>
            </div>
           <Footer/>
        </div>
    );
}

export default Futsal;

