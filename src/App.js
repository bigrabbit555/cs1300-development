import './App.css';
import kittyData from './kitties.json';
import KittyItem from './KittyItem';
import { useState } from 'react';
import Cart from './Cart';
import TopBar from './TopBar';
import KittyDisplay from './KittyDisplay';

function App() {

  // ----------------------------------------------------------------------------------------------------------
  // Cart and aggregator stuff
  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [costs, setCosts] = useState({});

  const addToCart = (name, price) => {
    let mCart = {...cart};
    if (name in cart) {
      mCart[name]++;
    } else {
      mCart[name] = 1;
    }
    setCart(mCart);
    incrementTotalPrice(price);
    updateCosts(name, price);
  }

  const removeFromCart = (name) => {
    let mCart = {...cart};
    if (name in cart) {
      if (cart[name] > 1) {
        mCart[name]--;
      } else {
        delete mCart[name];
      } 
    } 
    setCart(mCart);
    incrementTotalPrice(-1 * costs[name]);
  }

  const incrementTotalPrice = (addition) => {
    setTotalPrice((Number(totalPrice) + Number(addition)).toFixed(2));
  }

  const updateCosts = (name, cost) => {
    let mCosts = {...costs};
    mCosts[name] = cost;
    setCosts(mCosts);
  }

  // ----------------------------------------------------------------------------------------------------------
  // Filtering stuff
  // Price filtering
  const [priceFilterActive, setPriceFilterActive] = useState(false);
  const [priceFilterMin, setPriceFilterMin] = useState(0);
  const [priceFilterMax, setPriceFilterMax] = useState(Infinity);

  const activatePriceFilter = (min, max) => {
    console.log(min, max);
    console.log("price filter activating");
    setPriceFilterActive(true);
    setPriceFilterMin(min);
    setPriceFilterMax(max);
  }

  const deactivatePriceFilter = () => {
    // console.log("price filter deactivating");
    setPriceFilterActive(false);
  }

  // Age filtering
  const [ageFilterActive, setAgeFilterActive] = useState(false);
  const [ageFilterMin, setAgeFilterMin] = useState(0);
  const [ageFilterMax, setAgeFilterMax] = useState(Infinity);

  const activateAgeFilter = (min, max) => {
    console.log(min, max);
    console.log("age filter activating");
    setAgeFilterActive(true);
    setAgeFilterMin(min);
    setAgeFilterMax(max);
  }

  const deactivateAgeFilter = () => {
    // console.log("age filter deactivating");
    setAgeFilterActive(false);
  }

  const clearAllFilters = () => {
    setPriceFilterActive(false);
    setAgeFilterActive(false);
  }

  // ----------------------------------------------------------------------------------------------------------
  // Sorting stuff


  return (
    <div className="App">
      <h1>Kitty Kingdom</h1>
      <TopBar
        priceFilterOn={priceFilterActive}
        priceMin={priceFilterMin}
        priceMax={priceFilterMax}
        activatePriceFilter={activatePriceFilter}
        clearPriceFilter={deactivatePriceFilter}
        activateAgeFilter={activateAgeFilter}
        clearAgeFilter={deactivateAgeFilter}
        clearAllFilters={clearAllFilters}/>
      <KittyDisplay
        data={kittyData}
        addToCart={addToCart}
        priceFilterOn={priceFilterActive}
        priceMin={priceFilterMin}
        priceMax={priceFilterMax}
        ageFilterOn={ageFilterActive}
        ageMax={ageFilterMax}
        ageMin={ageFilterMin}/>
      <Cart cart={cart} totalPrice={totalPrice} delete={removeFromCart} emptyCart={() => {setCart({}); setTotalPrice(0)}}/>
    </div>
  );
}

export default App;
