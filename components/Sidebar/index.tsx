import Link from "next/link";
import React from "react";
import Styles from "./styles.module.css";

export function Sidebar() {
  return (
    <div>
      <div className={Styles.sidebar}>
        <div className={Styles.header}>
          <p>
            <span>[icon]</span>
            Nibble
          </p>
        </div>
        <ul className={Styles.menu}>
          <li className={Styles.active}>
            <Link href="/">
              <a>
                <span>[icon]</span>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>[icon]</span>Explorar
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>[icon]</span> Favoritos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>[icon]</span>Pedidos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>[icon]</span>Mensagens
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>[icon]</span>Configurações
              </a>
            </Link>
          </li>
        </ul>
        <div className={Styles.footer}>
          <div>componente usuário</div>
        </div>
      </div>
    </div>
  );
}
