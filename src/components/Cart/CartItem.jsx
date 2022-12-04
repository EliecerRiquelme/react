import React from "react";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ producto }) => {
  const { removeItem } = useCartContext();

  const subtotal = producto.precio * producto.quantity;
  return (
    <div className="row">
      <div className="col-md-3">
        <img
          src={"./../img/"+producto.imagen}
          alt={producto.Titulo}
          className="img-carrito"
        />
      </div>
      <div className="col-md-3">
        <p>
          <b>{producto.Titulo}</b> <b>({producto.quantity})</b>{" "}
        </p>
      </div>

      <div className="col-md-3">
        <p>
          <b>Precio: ${subtotal}</b>
        </p>
      </div>
      <div className="col-md-3">
        <button
          onClick={() => removeItem(producto.id)}
          className="btn btn-primary"
        >
          Eliminar del carrito
        </button>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default CartItem;