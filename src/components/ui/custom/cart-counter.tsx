"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { ShoppingBasket } from "lucide-react";

const CartCounter = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <>
      <div className="relative">
        <ShoppingBasket className="hover:text-primary" />
        <span className="absolute -top-3 -right-5 h-5 w-5 flex items-center justify-center rounded-full bg-primary font-bold text-white">
          {cartItems.length}
        </span>
      </div>
    </>
  );
};

export default CartCounter;
