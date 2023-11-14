import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import cross_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
    const { totalcartamount,all_product, cartItem, removeToCart  } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-main'>
                                <img src={e.image} className='carticon-product-icon' alt={e.name} />
                                <p>{e.name}</p>
                                <p>Rs{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>Rs{e.new_price * cartItem[e.id]}</p>
                                <img className='remove-icon' src={cross_icon} alt='Remove' onClick={() => { removeToCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                 <div className='cartitems-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitem-totalitem'>
                             <p>Subtotal</p>
                             <p>Rs{totalcartamount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-totalitem'>
                            <p>Shiping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className='cartitem-totalitem'>
                            <h3>Total</h3>
                            <h3>Rs{totalcartamount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                 </div>
            </div>
        </div>
    );
};
