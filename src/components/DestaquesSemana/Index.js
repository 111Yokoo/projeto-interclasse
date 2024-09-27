import React, { useState } from "react";
import "./DestaquesSemana.css";
import Masculino from "../../assets/user.jpg";
import Feminino from "../../assets/userFeminino.jpg";

function DestaquesSemana() {
  return (
    <section class="destaquesSessao">
        <section>
            <img src={Masculino} alt="Destaque Masculino" class="imgDestaque"/>
            <h2>Leonardo Simões 2ºB</h2>
        </section>
        <section>
            <img src={Feminino} alt="Destaque Feminino" class="imgDestaque"/>
            <h2>Eduarda Oliveira 3ºB</h2>
        </section>
    </section>
  );
}

export default DestaquesSemana;
