import React from "react";
import ItemCount from "./ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemDetail({ producto }) {
  function addItem(x) {
    alert("quiere agregar " + x + " de este item: " + producto.name);
  }
  return (
    <div >


      {producto.id ? (
        <>

          ID: {producto.id}
          <br />
          PRODUCTO: {producto.name}
          <br />
          CATEGORIA: {producto.category}
          <br />
          PRECIO: {producto.precio}
          <br />
          SOTCK: {producto.stock}
          <br />
          <ItemCount ini={1} max={producto.stock} addItem={addItem} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}