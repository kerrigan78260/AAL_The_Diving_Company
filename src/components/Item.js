import React from 'react';
import '../styles/item.css'




const Item = ({id, marque, modele, cover, prix, cart, updateCart}) => {

    function addToCart(modele, prix) {
        const currentItemAdded = cart.find((item) => item.modele === modele)
        //On vérifie si la plante est déjà présente et soit on l'ajoute, soit on ajoute 1 à celle déjà présente
        if (currentItemAdded) {
            const cartFilteredCurrentItem = cart.filter(
                (item) => item.modele !== modele
            )
            updateCart([
                ...cartFilteredCurrentItem,
                { modele, prix, amount: currentItemAdded.amount + 1 }
            ])
        } else {
            updateCart([
                ...cart, 
                { modele, prix, amount: 1 }])
        }
    }

    return (
        <div className='item' key={id}>
            <h4>{marque} - {modele}</h4>
            <img className='imageitem' src={cover} alt={id} />
            <p>{prix} €</p>
            <button onClick={()=>addToCart(modele, prix)} >Ajouter</button>
        </div>
    );
};

export default Item;