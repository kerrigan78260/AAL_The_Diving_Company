import React from 'react';
import { useEffect } from 'react';

const Card = ({cart, updateCart}) => {
    
    const total = cart.reduce(
		(acc, modele) => acc + modele.amount * modele.prix,
		0
	)
	useEffect(() => {
		document.modele = `LMJ: ${total}€ d'achats`
	}, [total])
    

    return (
        <div className='pannier'>
            {cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ modele, prix, amount }, index) => (
							<div key={`${modele}-${index}`}>
								{modele} {prix} € x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total} €</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
        </div>
    );
};

export default Card;