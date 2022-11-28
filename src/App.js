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
  const [totalPrice, setTotalPrice] = useState(Number(0).toFixed(2));
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
    setPriceFilterActive(true);
    setPriceFilterMin(min);
    setPriceFilterMax(max);
  }

  // const deactivatePriceFilter = () => {
  //   setPriceFilterActive(false);
  // }

  // Age filtering
  const [ageFilterActive, setAgeFilterActive] = useState(false);
  const [ageFilterMin, setAgeFilterMin] = useState(0);
  const [ageFilterMax, setAgeFilterMax] = useState(Infinity);

  const activateAgeFilter = (min, max) => {
    setAgeFilterActive(true);
    setAgeFilterMin(min);
    setAgeFilterMax(max);
  }

  // const deactivateAgeFilter = () => {
  //   setAgeFilterActive(false);
  // }

  const clearAllFilters = () => {
    setPriceFilterActive(false);
    setAgeFilterActive(false);
    setTagsFilterActive(false);
  }

  // Tags filtering
  const [tagsFilterActive, setTagsFilterActive] = useState(false);
  const [tags, setTags] = useState([]);
  
  const activateTagsFilter = (mTags) => {
    setTags(mTags);
    setTagsFilterActive(true);
  }

  // ----------------------------------------------------------------------------------------------------------
  // Sorting stuff
  const [priceSortActive, setPriceSortActive] = useState(false);
  const [priceSortAscending, setPriceSortAscending] = useState(true);  // true for ascending, false for descending

  const clearAllSorts = () => {
    setPriceSortActive(false);
  }

  const activateAscendingPrice = () => {
    setPriceSortActive(true);
    setPriceSortAscending(true);
  }

  const activateDescendingPrice = () => {
    setPriceSortActive(true);
    setPriceSortAscending(false);
  }


  return (
    <div className="App">
      <h1>Kitty Kingdom</h1>
      <TopBar
        priceFilterOn={priceFilterActive}
        priceMin={priceFilterMin}
        priceMax={priceFilterMax}
        activatePriceFilter={activatePriceFilter}
        clearPriceFilter={() => {setPriceFilterActive(false)}}
        activateAgeFilter={activateAgeFilter}
        clearAgeFilter={() => {setAgeFilterActive(false)}}
        activateTagsFilter={activateTagsFilter}
        clearTagsFilter={() => {setTagsFilterActive(false)}}
        clearAllFilters={clearAllFilters}
        activateAscendingPrice={activateAscendingPrice}
        activateDescendingPrice={activateDescendingPrice}
        clearSorts={clearAllSorts}/>
      <KittyDisplay
        data={kittyData}
        addToCart={addToCart}
        priceFilterOn={priceFilterActive}
        priceMin={priceFilterMin}
        priceMax={priceFilterMax}
        ageFilterOn={ageFilterActive}
        ageMax={ageFilterMax}
        ageMin={ageFilterMin}
        tagsFilterOn={tagsFilterActive}
        tagsSelected={tags}
        priceSort={priceSortActive}
        priceAscending={priceSortAscending}/>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        delete={removeFromCart}
        emptyCart={() => {setCart({}); setTotalPrice(Number(0).toFixed(2))}}/>
    </div>
  );
}

export default App;
