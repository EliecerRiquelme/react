import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <NavLink to="/cart">
      <p className="text-center mt-4">
      <i className="bi bi-cart2 carro"></i>
        <span className="badge rounded-pill text-bg-primary">
          {totalProducts() || ""}
        </span>
      </p>
    </NavLink>
  );
};

export default CartWidget;