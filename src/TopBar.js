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

    // Tag filtering
    const [tags, setTags] = useState([]);

    const handleChange = (tag) => {
        if (tags.includes(tag)) {
            removeTag(tag);
        }
        else addTag(tag);
    }

    const addTag = (tag) => {
        let mTags = tags;
        mTags.push(tag);
        setTags(mTags);
    }

    const removeTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    }


    return (
        <div className='TopBar'>
            <div className='Filter'>
                <h2>Filter</h2>
                <div className='Row'>
                    <h4>Price</h4>
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
                    <h4>Age</h4>
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
                    <h4>Tags</h4>
                    <div className='tagHolder'>
                        <span><input type="checkbox" onChange={() => {handleChange("hypoallergenic")}}/>Hypoallergenic</span>
                        <span><input type="checkbox" onChange={() => {handleChange("friendly")}}/>Friendly</span>
                        <span><input type="checkbox" onChange={() => {handleChange("playful")}}/>Playful</span>
                        <span><input type="checkbox" onChange={() => {handleChange("solitary")}}/>Solitary</span>
                        <span><input type="checkbox" onChange={() => {handleChange("adventurous")}}/>Adventurous</span>
                        <span><input type="checkbox" onChange={() => {handleChange("kitten")}}/>Kitten</span>
                        <span><input type="checkbox" onChange={() => {handleChange("enigma")}}/>Enigma</span>
                        <span><input type="checkbox" onChange={() => {handleChange("untrained")}}/>Untrained</span>
                        <span><input type="checkbox" onChange={() => {handleChange("lazy")}}/>Lazy</span>
                        <span><input type="checkbox" onChange={() => {handleChange("wise")}}/>Wise</span>
                        <span><input type="checkbox" onChange={() => {handleChange("active")}}/>Active</span>
                        <span><input type="checkbox" onChange={() => {handleChange("baskingball")}}/>Baskingball</span>
                        <span><input type="checkbox" onChange={() => {handleChange("trusting")}}/>Trusting</span>
                        <span><input type="checkbox" onChange={() => {handleChange("affectionate")}}/>Affectionate</span>
                        <span><input type="checkbox" onChange={() => {handleChange("miserly")}}/>Miserly</span>
                        <span><input type="checkbox" onChange={() => {handleChange("hostile")}}/>Hostile</span>
                        <span><input type="checkbox" onChange={() => {handleChange("dapper")}}/>Dapper</span>
                    </div>
                    <button onClick={() => {console.log(tags);props.activateTagsFilter(tags)}}>Filter by tags</button>
                    <button onClick={() => {props.clearTagsFilter()}}>Clear tags filter</button>
                </div>
                <div className='Row'>
                    <button onClick={() => {props.clearAllFilters()}}>Clear all filters</button>
                </div>
            </div>
            <div className='Sort'>
                <h2>Sort</h2>
                <button onClick={() => {props.activateAscendingPrice()}}>Ascending price</button>
                <button onClick={() => {props.activateDescendingPrice()}}>Descending price</button>
                <button onClick={() => {props.clearSorts()}}>Clear price sort</button>
            </div>
        </div>
    );
}

export default TopBar;