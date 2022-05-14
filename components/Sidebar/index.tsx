import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IconBase, UserProfile } from "..";
import Styles from "./styles.module.css";

export function Sidebar() {
  return (
    <div>
      <div className={Styles.sidebar}>
        <div className={Styles.header}>
          <Image
            src="/logo.png"
            width={40}
            height={32}
            alt="Nibble Restaurantes"
          />
          <h3>Nibble</h3>
        </div>
        <ul className={Styles.menu}>
          <li className={Styles.active}>
            <Link href="/">
              <a>
                <span>
                  <IconBase iconName="home" color="#fff" />
                </span>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>
                <span>
                  <IconBase iconName="feed" color="#a3a3a4" />
                </span>
                Explorar
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>
                  <IconBase iconName="bookmark" color="#a3a3a4" />
                </span>
                Favoritos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>
                  <IconBase iconName="document" color="#a3a3a4" />
                </span>
                Pedidos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>
                  <IconBase iconName="letter" color="#a3a3a4" />
                </span>
                Mensagens
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <span>
                  <IconBase iconName="gear" color="#a3a3a4" />
                </span>
                Configurações
              </a>
            </Link>
          </li>
        </ul>
        <div className={Styles.footer}>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
