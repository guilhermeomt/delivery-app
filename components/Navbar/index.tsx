import React from "react";
import Styles from "./styles.module.css";

export function Navbar() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.list}>
        <div>San Francisco, California</div>
        <div>Retirar</div>
        <div>Ofertas</div>
      </div>
      <input
        className={Styles.input_search}
        placeholder="Pesquise aqui..."
        type="text"
      />
      <div>
        <button>Fil</button>
        <button>Ckt</button>
      </div>
    </div>
  );
}
