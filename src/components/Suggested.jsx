import React from 'react';
import ItemListContainer from './ItemListContainer';
import {cargarDataLocal} from '../utils/functions.js';


const Suggested = () => {
    
    let compras = cargarDataLocal("Compra");
    let itemsIdList = [];

    compras.length > 0 && compras.forEach( (item) => {
        itemsIdList.find(itemId => itemId === item.id) ?? itemsIdList.push(item.id);
    })
    
    compras.length === 0 && (itemsIdList.push('NoHayCompra'));

    return (
        <div>
            <hr />
            <h1>Sugerencias</h1>
                <p>Sugerencias basadas en sus <code>compras</code> anteriores.</p>
                <ItemListContainer itemsIdList={itemsIdList}/>
            <hr />
        </div>)
}

export default Suggested;