import React from "react";
import { Link } from 'react-router-dom';  

const Item = ({ info }) => {
    return (
        <div className="col-md-3 mt-3 card card-product">
        <Link to={`/product/${info.id}`}>
          <img src={ "./../img/"+info.imagen} className="card-img-top" alt={info.Titulo} />
        </Link>
        <div className="card-body">
          <h4 className="card-title text-center">
            <b>{info.Titulo}</b>
          </h4>
          <p className="card-text">${info.precio}</p>
          <p>#{info.category}</p>
          <Link to={`/product/${info.tid}`}>
            <button className="btn btn-primary">Ver detalle del producto</button>
          </Link>
        </div>
      </div>
  );
};

export default Item;
 