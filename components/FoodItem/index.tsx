import Image from "next/image";
import React from "react";
import { ItemDetails } from "..";
import Styles from "./styles.module.css";

type FoodItemProps = {
  name: string;
  imageUrl: string;
  deliveryFee: string;
  rating: number;
  reviews: number;
  category: string;
  deliveryTime: string;
};

export function FoodItem({ ...props }: FoodItemProps) {
  return (
    <div>
      <div className={Styles.thumbnail}>
        <Image src={props.imageUrl} width={336} height={176} alt={props.name} />
      </div>
      <div className={Styles.header}>
        <h3>{props.name}</h3>
        <span>{props.deliveryFee}</span>
      </div>
      <ItemDetails
        rating={props.rating}
        reviews={props.reviews}
        category={props.category}
        deliveryTime={props.deliveryTime}
      />
    </div>
  );
}
