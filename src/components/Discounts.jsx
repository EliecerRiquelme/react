import React from 'react';
import ItemListContainer from './ItemListContainer';

const Discounts = () => {

    return (
        <div>
            <hr />
            <h1>Descuentos</h1>
            <hr />
            <ItemListContainer discounts={true}/>
        </div>)
}

export default Discounts;