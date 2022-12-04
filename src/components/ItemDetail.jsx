import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

const ItemDetail = (props) => {

  const [itemSelected, setItemSelected] = useState(false);
  const [itemCountOff, setItemCountOff] = useState(false);
  const [quantity, setQuantity] = useState(0);

  let detalles = [];

  
  useEffect(() => {
    setItemSelected(props === undefined);
  }, [props])
  
  Object.keys(props.Detalle ?? []).map((key) => {
        let info =<li key={key}><strong>{key}:</strong> {props.Detalle[key]}<br/></li>;
        detalles.push(info);
  })

  return (
    <div className="card centered">
      {(itemSelected) ? "" : 
          (
          <div className="card-body">
              <p className="card-text">
                {detalles.map((item) => item)}
              </p>
            {!itemCountOff ? (
              <ItemCount item={props} quantity={quantity} setQuantity={setQuantity} itemCountOff= {itemCountOff} setItemCountOff={setItemCountOff} /> ): (
                <div id="Agregar" >
                  <Link to={'/cart'} ><button className="btn btn-outline-primary" >Finalizar</button></Link>
                </div>)
            }
          </div>
          )
      }
    </div>
  );
}

export default ItemDetail;
