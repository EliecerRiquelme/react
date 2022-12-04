import React, {useState, useEffect, useContext} from 'react';
import sumLogo from '../assets/images/plus.png'
import substractLogo from '../assets/images/minus.png'
import {CartContext} from './CartContext';
import {toastMsgPopUp} from '../utils/functions.js'

const ItemCount = ({item, quantity, setQuantity, setItemCountOff}) => {

    const [seleccionados, setSeleccionados] = useState(0);
    const [availableStock, setAvailableStock] = useState(item.Disponibles);
    const [SumarOff, setSumarOff] = useState(true);
    const [RestarOff, setRestarOff] = useState(true);
    const [agregarOff, setAgregarOff] = useState(true);
    const [claseResta, setClaseResta] = useState("col-md-3")
    const [claseSuma, setClaseSuma] = useState("col-md-3")

    const {cartItems, addItem} = useContext(CartContext);
    let Cantidad = item.Disponibles;
    let selectedItems = cartItems.find((cartItem) => cartItem.id === item.id);

    useEffect (() => {
        let selectedItems = cartItems.find((cartItem) => cartItem.id === item.id);
        selectedItems !== undefined && (setAvailableStock(Cantidad - selectedItems.seleccionados - seleccionados));
        selectedItems ?? setAvailableStock(Cantidad);
        setearSumarOff(!(Cantidad !== undefined && Cantidad>0));
        selectedItems !== undefined && setearSumarOff(!(Cantidad >0 && (Cantidad - selectedItems.seleccionados - seleccionados>0)));
        setearRestarOff(true);
    }, [])

    useEffect(() =>{
        setAgregarOff(!(Cantidad>0 && quantity>0));
        selectedItems !== undefined && (setAvailableStock(Cantidad - selectedItems.seleccionados - seleccionados));
        selectedItems ?? setAvailableStock(Cantidad - seleccionados);
    }, [quantity])

    function setearSumarOff (flag) {
        setSumarOff(flag);
        setClaseSuma("col-md-3" + (flag ? " opacidad" : ""));
    }

    function setearRestarOff (flag) {
        setRestarOff(flag);
        setClaseResta("col-md-3" + (flag ? " opacidad" : ""));
    }
    
    function CambiarSeleccionados (num) {
        setSeleccionados(seleccionados + num);
        setQuantity(seleccionados + num);
    }

    function Sumar () {
        if(Cantidad > 0 && seleccionados < Cantidad){
            CambiarSeleccionados(1);
            setearRestarOff(false);
            setearSumarOff((seleccionados + 1 === Cantidad || availableStock - 1 === 0) ? true : false);
        }else{
            setearSumarOff(true);
        }
    }
     
    function Restar () {
        if(seleccionados > 0){
            CambiarSeleccionados(-1);
            setearSumarOff(false);
            setearRestarOff(seleccionados - 1 === 0 ? true : false);
        }else{
            setearRestarOff(true);
        }
    }

    function onAdd(){

        if(!agregarOff){
            toastMsgPopUp('',"Se ha agregado el producto.",'success',1000);
            setItemCountOff(true);
            addItem(item, seleccionados);
        }
    }

  return (
    <>
        <div className="Item-Quantity">
            <div id="Restar" className={claseResta} onClick={Restar} >
                <button disabled={RestarOff}><img src={substractLogo} className="Substract-logo" alt="logo"/></button>
            </div>
            <div className="col-md-6">
                <input  id="NumeroAComprar" type="text" className="form-control Item-Number" placeholder="Stock" aria-label="Stock" value = {seleccionados} disabled/>
            </div>
            <div id="Sumar" className={claseSuma} onClick={Sumar}>
                <button disabled={SumarOff}><img src={sumLogo} className="Sum-logo" alt="logo"/></button>
            </div>
        </div>
        <div id="Agregar" onClick={onAdd} >
            <button className="btn btn-outline-primary" disabled={agregarOff}>Agregar</button>
        </div>
    </>
  );
}

export default ItemCount;