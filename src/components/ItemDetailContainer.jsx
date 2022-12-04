import React, {useEffect, useState, useContext} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {CartContext} from './CartContext';
import {toastMsgPopUpNoTimer} from '../utils/functions.js'
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [selectedItem, setSelectedItem] = useState([]);
    const [buscando, setBuscando] = useState();
    const {id} = useParams();
    const {selectedItemId} = useContext(CartContext);

    let selection = selectedItemId;
    
    useEffect( () => {
        let toast = toastMsgPopUpNoTimer('',"Cargando productos",'info')

        async function doFetch(id){
            const db = getFirestore();
            const document = doc(db,"stock_MarketPlace", id);
            let mensaje;
                try {
                    const data = await getDoc(document);
                    let productSelected =data.data();
                    data.exists() && setSelectedItem({id,...productSelected});
                    return productSelected;
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }finally{
                    toast.close();
                    setBuscando(false);
                }
        }
        doFetch(id);
        setBuscando(selection +1 ? true: false);
    },[selectedItemId]);

    return (
        <div className="container detailContainer animate__animated animate__headShakertBeat ">
            {(buscando) ? (
            <div id="Spinner" className="spinner-border text-primary" role="status">
            </div> ):
            <div className="animate__animated animate__headShake">
                <ItemDetail {...selectedItem} />
            </div>}
        </div>
    );
}

export default ItemDetailContainer;
