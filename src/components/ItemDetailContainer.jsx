import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const querybd = getFirestore();
    const queryDoc = doc(querybd, "productos", `${detalleId}`);
    getDoc(queryDoc).then((res) => {
      console.log(res)
      if(res.exists()){
        setProducto({ id: res.id, ...res.data() });
        setLoading(false)
      }
    });
  }, [detalleId]);

  return(
    <div>
      { loading ? "loading"
      :
      <ItemDetail item={producto} />};
    </div>
  ) 
};

export default ItemDetailContainer;
