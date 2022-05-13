import React from "react";
import { FoodItem } from "..";
import Styles from "./styles.module.css";

export function Foods() {
  const foods = [
    {
      name: "Gigantic Rodeo Burger",
      imageUrl: "/foods/burger.jpg",
      deliveryFee: "Entrega grátis",
      rating: 4.6,
      reviews: 77,
      category: "Hambúrguer",
      deliveryTime: "30 min - 45 min",
    },
    {
      name: "Pizza de Queijo Deliciosa",
      imageUrl: "/foods/pizza.jpg",
      deliveryFee: "R$ 3,00 de entrega",
      rating: 4.5,
      reviews: 35,
      category: "Pizza",
      deliveryTime: "25 min - 35 min",
    },
    {
      name: "Espetos de Legumes",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: "R$ 4,00 de entrega",
      rating: 4.8,
      reviews: 57,
      category: "Espetos",
      deliveryTime: "15 min - 25 min",
    },
    {
      name: "Pizza de Pepperoni",
      imageUrl: "/foods/pizza-peperoni.jpg",
      deliveryFee: "R$ 1,00 de entrega",
      rating: 4.7,
      reviews: 136,
      category: "Pizza",
      deliveryTime: "50 min - 55 min",
    },
    {
      name: "Chef’s Burger Deluxe",
      imageUrl: "/foods/chef-burger.jpg",
      deliveryFee: "Entrega grátis",
      rating: 4.5,
      reviews: 121,
      category: "Hambúrguer",
      deliveryTime: "35 min - 45 min",
    },
    {
      name: "Arroz Natural de Legumes",
      imageUrl: "/foods/vegetable.jpg",
      deliveryFee: "R$ 5,00 de entrega",
      rating: 5,
      reviews: 20,
      category: "Vegano",
      deliveryTime: "30 min - 55 min",
    },
  ];

  return (
    <div>
      <div className={Styles.header}>
        <h2>Pedidos populares</h2>
        <div>
          <p>Hoje</p>
        </div>
      </div>
      <div className="flex gap-6 justify-between flex-wrap">
        {foods.map((food, index) => (
          <FoodItem key={index} {...food} />
        ))}
      </div>
    </div>
  );
}
