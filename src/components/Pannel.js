import React from 'react';
import '../styles/pannel.css'
import Cart from "./Cart"

import {listItems} from '../assets/listItems';

const Pannel = ({activeCategory, setActiveCategory, cart, updateCart}) => {

    

    //Création de la liste de catégories à partir de listItems en supprimant les doublons
    const listCategories = listItems.reduce((acc, currentValue) => acc.includes(currentValue.type) ? acc : acc.concat(currentValue.type), [])

    //affichage du composant dans un formulaire type select rempli par un map de listCategories
    return (
        <div className='pannel'>
            <div className='categories'>
                <p>Catégories :</p>
                <select 
                    value={activeCategory}
				    onChange={(e) => setActiveCategory(e.target.value)}
                >
                <option value=''>Tout</option>
                    { listCategories.map((cat)=><option value={cat} >{cat}</option>)}
                </select>
            </div>
            <Cart cart={cart} updateCart={updateCart} />
        </div>
    );
};

export default Pannel;