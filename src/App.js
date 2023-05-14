import React from 'react';
import Banner from './components/Banner';
import Pannel from './components/Pannel';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';

const App = () => {

  const [activeCategory, setActiveCategory] = useState('')

  
	const [cart, updateCart] = useState([])
	 

  return (
    <div>
      <Banner />
      <Pannel activeCategory={activeCategory} setActiveCategory={setActiveCategory} cart={cart} updateCart={updateCart} />
      <ShoppingList activeCategory={activeCategory} cart={cart} updateCart={updateCart} />
    </div>
  );
};

export default App;