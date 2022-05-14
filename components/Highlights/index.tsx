import Link from "next/link";
import React from "react";
import { HighlightsItem, IconBase } from "..";
import Styles from "./styles.module.css";

type HighlightsProps = {
  title?: string;
};

export function Highlights({ title }: HighlightsProps) {
  const highlights = [
    {
      id: "1",
      name: "Burger King",
      brandUrl: "/brands/burger-king.svg",
      rating: 4.5,
      category: "Hambúrguer",
      reviews: 1883,
      price: 1,
      bonus: "Entrega grátis",
      distance: 4.3,
    },
    {
      id: "2",
      name: "McDonalds",
      brandUrl: "/brands/mcdonalds.svg",
      rating: 4.5,
      category: "Hambúrguer",
      reviews: 1883,
      price: 1,
      bonus: "R$5,00 de entrega",
      distance: 5,
    },
    {
      id: "3",
      name: "Domino's Pizza",
      brandUrl: "/brands/dominos-pizza.svg",
      rating: 5,
      category: "Pizza",
      reviews: 583,
      price: 2,
      bonus: "Entrega grátis",
      distance: 2.2,
    },
    {
      id: "4",
      name: "Pizza Hut",
      brandUrl: "/brands/pizza-hut.svg",
      rating: 5,
      category: "Pizza",
      reviews: 583,
      price: 2,
      bonus: "Entrega grátis",
      distance: 6.5,
    },
    {
      id: "5",
      name: "Carrows Restaurant",
      brandUrl: "/brands/carrows-restaurant.svg",
      rating: 5,
      category: "Peixe",
      reviews: 283,
      price: 2,
      bonus: "Entrega grátis",
      distance: 8.3,
    },
    {
      id: "6",
      name: "KFC",
      brandUrl: "/brands/kfc.svg",
      rating: 4.4,
      category: "Frango",
      reviews: 1123,
      price: 1,
      bonus: "Compre 2 e ganhe 1",
      distance: 1.1,
    },
  ];

  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <div className="flex flex-col justify-center items-center"></div>
        <h2>{title ? title : "Destaques"}</h2>
        <Link href="/destaques">
          <a>
            Ver todos
            <IconBase iconName="chevron-right" color="#5b4aa3" size={12} />
          </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between flex-wrap">
        {highlights.map((highlight, index) => {
          return <HighlightsItem key={index} {...highlight} />;
        })}
      </div>
    </div>
  );
}
