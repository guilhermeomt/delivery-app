import Link from "next/link";
import React from "react";
import { Category, IconBase } from "..";
import Styles from "./styles.module.css";

export function Categories() {
  const categories = [
    {
      name: "Popular",
      legend: "+286 opções",
      iconName: "fire",
      backgroundColor: "#fb6d3a",
    },
    {
      name: "Delivery",
      legend: "+1.856 opções",
      iconName: "bike",
      backgroundColor: "#503e9d",
    },
    {
      name: "Alta classe",
      legend: "+25 opções",
      iconName: "wallet",
      backgroundColor: "#facd5d",
    },
    {
      name: "Jantar",
      legend: "+182 opções",
      iconName: "cutlery",
      backgroundColor: "#fb6d3a",
    },
    {
      name: "Retirada",
      legend: "+3.542 opções",
      iconName: "store",
      backgroundColor: "#503e9d",
    },
    {
      name: "Mais próximos",
      legend: "+55 opções",
      iconName: "map",
      backgroundColor: "#facd5d",
    },
  ];

  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <h2 className="grow">Explorar Categorias</h2>
        <Link href="/categories">
          <a>
            Ver todas
            <IconBase iconName="chevron-right" color="#5b4aa3" size={12} />
          </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
}
