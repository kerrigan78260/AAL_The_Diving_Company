import React from 'react';

import {listItems} from '../assets/listItems';
import Item from './Item'
import '../styles/shoppingList.css'


const ShoppingList = ({activeCategory, cart, updateCart}) => {

    

    return (
        <div className='shoppinglist'>
           
            <div className='listing'>
                {listItems.map(({id, marque, modele, prix, cover, type})=>(
                !activeCategory || activeCategory===type?
                <div key={id}>
                <Item 
                    id={id} 
                    marque={marque} 
                    modele={modele} 
                    prix={prix} 
                    cover={cover} 
                    cart={cart}
                    updateCart={updateCart}
                    />
                    
                </div>
                :null
                ))}
            </div>
        </div>
    );
};

export default ShoppingList;