import React from "react";
import { useState } from "react";
import { useCartContext } from "./CartContex";
import Form from "./Form";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();

  const [orderId, setOrderId] = useState("");

  const handleId = (numeroDeOrden) => {
    setOrderId(numeroDeOrden);
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="col-md-12">
          <h1 className="text-center">No tienes ningún producto agregado</h1>
          <Link to="/">
            <button className="btn btn-primary">Ir al Inicio</button>
          </Link>
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Gracias por tu compra! </h1>
            <h3 className="text-center mt-3">
              Te dejamos el código de seguimiento : {orderId}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Form handleId={handleId} />
        </div>
        <div className="col-md-6">
          {/* {cart.map((producto) => (
            <CartItem key={producto.id} producto={producto} />
          ))} */}
          <p className="text-center">
            <b>El Total a pagar es : ${totalPrice()}</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;