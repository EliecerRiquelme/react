import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
export default function ItemList({ productos }) {
  return (
    <div >
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}