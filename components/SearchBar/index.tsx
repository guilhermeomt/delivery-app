import React from "react";
import { IconBase } from "..";
import Styles from "./styles.module.css";

export function SearchBar() {
  return (
    <div className={Styles.search_bar}>
      <input placeholder="Pesquise aqui..." type="text" />
      <IconBase iconName="search" color="#000" />
    </div>
  );
}
