import React from "react";
import { FaMedal } from "react-icons/fa";
import "./TabelaHome.css";

function TabelaHome() {
  return (
    //Testar automatizar colocação dos times
    <table>
        <thead>
            <tr>
                <th>Classificação Geral</th>
                <th>Pontuação</th>
                <th><FaMedal class="ouro"/></th>
                <th><FaMedal class="prata"/></th>
                <th><FaMedal class="bronze"/></th>
            </tr>
        </thead>
        <tbody>
            <tr class="par">
                <td><strong>Angola 3ºA</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr>
                <td><strong>República Tcheca 3ºB</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr class="par">
                <td><strong>Alemanha 2ºA</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr>
                <td><strong>Inglaterra 2ºB</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr class="par">
                <td><strong>Itália 1ºA</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr>
                <td><strong>Canadá 1ºB</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr class="par">
                <td><strong>Brasil 9ºA</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
            <tr>
                <td><strong>Bélgica 9ºB</strong></td>
                <td class="quantity">0</td>{/*Pontuação Geral8*/}
                <td class="quantity">0</td>{/*Ouro*/}
                <td class="quantity">0</td>{/*Prata*/}
                <td class="quantity">0</td>{/*Bronze*/}
            </tr>
        </tbody>
    </table>
  );
}

export default TabelaHome;
