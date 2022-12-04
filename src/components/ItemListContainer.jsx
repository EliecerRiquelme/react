import React from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

  const {categoryId} = useParams();
  
  return (
    <div className="container imgContainer">
        <ItemList type={categoryId} discounts={props.discounts} itemsIdList={props.itemsIdList}/>
    </div>
  );
}

ItemListContainer.defaultProps = {
  discounts : false,
  itemsIdList : [] 
}

export default ItemListContainer;
