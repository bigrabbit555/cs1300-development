import './KittyItem.css';

function KittyItem(props) {
    const cat = props.cat;

    // Format tags string with commas and such
    let tags = "";
    for (let elt in cat.tags) {
        tags += (cat.tags[elt] + ", ");
    }
    tags = tags.slice(0, -2);
    return (
        <div className="kittyItem">
            <img src={cat.image}/>
            <p>{cat.name}, age {cat.age}</p>
            <p>Tags: {tags}</p>
            <p><i>${cat.price}</i></p>
            <button onClick={() => {props.cart(cat.name, cat.price)}}>Add to cart</button>
        </div>
    );
}

export default KittyItem;