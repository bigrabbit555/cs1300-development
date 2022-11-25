import './Cart.css';

function Cart(props) {
    const cart = props.cart;
    const cost = props.cost;

    return (
        <div className="Cart">
            <h2>Cart</h2>
            {Object.keys(cart).map((k, i) => (
                <div className="Entry">
                    <p key={i}>{cart[k]}x {k}</p>
                    <button onClick={() => {props.delete(k)}}>Delete</button>
                </div>
            ))}
            <p>Total Price: ${props.totalPrice}</p>
            <button onClick={() => {props.emptyCart()}}>Empty Cart</button>
        </div>
    );
}

export default Cart;