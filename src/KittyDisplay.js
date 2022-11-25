import './KittyDisplay.css';
import KittyItem from './KittyItem';

function KittyDisplay(props) {
    let mData = props.data;
    // console.log(props.data);
    // console.log(Array.isArray(props.data));
    // console.log(mData);
    // console.log(Array.isArray(mData));
    if (props.priceFilterOn) {
        console.log("Filtering!");
        mData = mData.filter(kitty => kitty.price >= props.priceMin && kitty.price <= props.priceMax);
    }

    if (props.ageFilterOn) {
        mData = mData.filter(kitty => kitty.age >= props.ageMin && kitty.age <= props.ageMax);
    }
    // console.log(mData);
    
    return (
        <div className='KittyDisplay'>
            {mData.map((item, index) => (
                <KittyItem cat={item} cart={props.addToCart}/>
            ))}
        </div>
    );
}

export default KittyDisplay;