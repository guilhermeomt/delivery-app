import Link from "next/link";
import React from "react";
import { Category } from "..";

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
    <>
      <div className="flex">
        <h2 className="grow">Explorar Categorias</h2>
        <Link href="/categories">
          <a href="">Ver todas</a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>
    </>
  );
}
