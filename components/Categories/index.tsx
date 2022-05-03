import Link from "next/link";
import React from "react";
import { Category } from "..";

export function Categories() {
  const categories = [
    {
      name: "Popular",
      legend: "+286 opções",
      iconName: "fire",
    },
    {
      name: "Delivery",
      legend: "+1856 opções",
      iconName: "bike",
    },
    {
      name: "Alta classe",
      legend: "+25 opções",
      iconName: "wallet",
    },
    {
      name: "Jantar",
      legend: "+182 opções",
      iconName: "cutlery",
    },
    {
      name: "Retirada",
      legend: "+3542 opções",
      iconName: "store",
    },
    {
      name: "Mais próximo",
      legend: "+55 opções",
      iconName: "map",
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
      <div className="flex gap-6">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>
    </>
  );
}
