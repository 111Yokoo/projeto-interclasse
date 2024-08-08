import React from "react";
import { Link } from "react-router-dom";
import imagem from "../../assets/teste.jpg"

function Header() {
  return (
    <header class="header">
      <section>
          <Link to="/"><img class="logo" src={imagem}/></Link>
          <span>Não lembro também</span>
      </section>
        <nav>
            <ol>
                <li>
                    Home
                </li>
                <li>
                    Esportes*mexer*
                </li>
                <li>
                    Não lembro
                </li>
            </ol>
        </nav>
    </header>
  );
}

export default Header;
