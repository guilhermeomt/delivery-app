import React from "react";
import Link from "next/link";
import { IconBase, SearchBar } from "..";
import { useFilter } from "stores";
import Styles from "./styles.module.css";

export function Navbar() {
  const { toggleModal } = useFilter((store) => store);

  return (
    <div className={Styles.navbar}>
      <ul className={Styles.nav}>
        <li>
          <Link href="/">
            <a>
              <IconBase iconName="target-location" size={24} color="#503e9d" />
              San Francisco, California
              <IconBase iconName="arrow-top-down" size={16} color="#000" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <IconBase iconName="shopping-bag" color="#fb6d3a" />
              Retirar
              <IconBase iconName="arrow-top-down" size={16} color="#000" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <IconBase iconName="coupon" color="#facd5d" />
              Ofertas
              <IconBase iconName="arrow-top-down" size={16} color="#000" />
            </a>
          </Link>
        </li>
      </ul>
      <SearchBar />
      <div className="flex gap-4">
        <button className={Styles.filter_button} onClick={toggleModal}>
          <IconBase iconName="filter" size={20} color="#fff" />
        </button>
        <button className={Styles.cart_button}>
          <IconBase iconName="shopping-cart" size={20} color="#fff" />
        </button>
      </div>
    </div>
  );
}
