import './KittyDisplay.css';
import KittyItem from './KittyItem';

function KittyDisplay(props) {
    let mData = [];

    // Do filtering as needed
    const filterFunc = (kitty) => {
        let ret = true;
        if (ret && props.priceFilterOn) ret = kitty.price >= props.priceMin && kitty.price <= props.priceMax;
        if (ret && props.ageFilterOn) ret = kitty.age >= props.ageMin && kitty.age <= props.ageMax;
        if (ret && props.tagsFilterOn) {
            console.log(props.tagsSelected)
            for (let t in props.tagsSelected) {
                console.log(t + " is not included in " + props.tagsSelected);
                if (!kitty.tags.includes(props.tagsSelected[t])) ret = false;
            }
        }
        return ret;
    }
    mData = props.data.filter(filterFunc);
     

     
    // Do sorting as needed
    if (props.priceSort) {
        if (props.priceAscending) {
            mData = mData.sort((a, b) => { return a.price - b.price });
        } else {
            mData = mData.sort((a, b) => { return b.price - a.price });
        }
    } 
    // else {
    //     mData = mData;
    //     console.log("womba bomba");
    // }

    console.log("oo ee oo ah ah ting tang walla walla bing bang");

    return (
        <div className='KittyDisplay'>
            {mData.map((item, index) => (
                <KittyItem cat={item} cart={props.addToCart}/>
            ))}
        </div>
    );
}

export default KittyDisplay;