import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ItemDetails } from "..";
import Styles from "./styles.module.css";

type FoodItemProps = {
  id: string;
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
      <Link href={`/product/${props.id}`}>
        <a>
          <div className={Styles.thumbnail}>
            <Image
              src={props.imageUrl}
              width={336}
              height={176}
              alt={props.name}
              loading="lazy"
            />
          </div>
        </a>
      </Link>
      <div className={Styles.header}>
        <Link href={`/product/${props.id}`}>
          <a>
            <h3>{props.name}</h3>
          </a>
        </Link>
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
