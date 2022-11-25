import { useState } from 'react';
import './TopBar.css';

function TopBar(props) {

    // Price filtering
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    
    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    }

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    }

    // Age filtering
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(0);
    
    const handleMinAgeChange = (event) => {
        setMinAge(event.target.value);
    }

    const handleMaxAgeChange = (event) => {
        setMaxAge(event.target.value);
    }

    return (
        <div className='TopBar'>
            <div className='Row'>
                <p>
                    Min price:
                    <input type="text" onChange={handleMinPriceChange}/>
                </p>
                <p>
                    Max price:
                    <input type="text" onChange={handleMaxPriceChange}/>
                </p>
                <button onClick={() => {props.activatePriceFilter(minPrice, maxPrice)}}>Filter by price</button>
                <button onClick={() => {props.clearPriceFilter()}}>Clear price filter</button> 
            </div>
            <div className='Row'>
                <p>
                    Min age:
                    <input type="text" onChange={handleMinAgeChange}/>
                </p>
                <p>
                    Max age:
                    <input type="text" onChange={handleMaxAgeChange}/>
                </p>
                <button onClick={() => {props.activateAgeFilter(minAge, maxAge)}}>Filter by age</button>
                <button onClick={() => {props.clearAgeFilter()}}>Clear age filter</button> 
            </div>
            <div className='Row'>
                <button onClick={() => {props.clearAllFilters()}}>Clear all filters</button>
            </div>
        </div>
    );
}

export default TopBar;