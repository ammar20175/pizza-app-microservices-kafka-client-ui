"use client";
import { ShoppingBasket } from "lucide-react";

const CartCounter = () => {
  return (
    <>
      <div className="relative">
        <ShoppingBasket className="hover:text-primary" />
        <span className="absolute -top-3 -right-5 h-5 w-5 flex items-center justify-center rounded-full bg-primary font-bold text-white">
          3
        </span>
      </div>
    </>
  );
};

export default CartCounter;
