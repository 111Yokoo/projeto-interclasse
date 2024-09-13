import React, { useState } from "react";
import "./DestaquesSemana.css";
import Masculino from "../../assets/userMasculino.jpeg";

function DestaquesSemana() {
  return (
    <section class="destaquesSessao">
        <section>
            <img src={Masculino} alt="Destaque Masculino" class="imgDestaque"/>
            <h2>Guilherme Suith 3ºB</h2>
        </section>
        <section>
            <img src={Masculino} alt="Destaque Feminino" class="imgDestaque"/>
            <h2>Eduarda Oliveira 3ºB</h2>
        </section>
    </section>
  );
}

export default DestaquesSemana;
