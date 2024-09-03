// import React, { useContext } from 'react'
// import './CartItem.css'
// import { ShopContext } from '../../context/ShopContext'
// import remove_icon from '../data/cart_cross_icon.png'

// function CartItem() {
 
//     const {getTotalCartAmount , all_product , cartItems , removeFromCart} = useContext(ShopContext)
//     return (
//     <div className='cartitems'>
//         <div className='cartitems-format-main'>
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//         </div>
//         <hr/>
//         {
//             all_product.map((e)=>{
//                 if(cartItems[e.id] > 0)
//                 {
//                     return <div>
//                                  <div className='cartitems-format cartitems-format-main'>
//                                 <img className='cartitems-product-icon' src={e.image} alt=''/>
//                                  <p>{e.name}</p>
//                                  <p>${e.new_price}</p>
//                                 <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                                  <p className='pop'>${e.new_price*cartItems[e.id]}</p>
//                                 <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
//                             </div>
//                      <hr/>
//                 </div>
//         }
//             return null ; 
//             })
//         }
//         <div className='cartitems-down'>
//             <div className='cartitems-total'>
//                 <h1>Cart Totals</h1>
//                 <div>
//                     <div className='cartitems-total-item'>
//                         <p>Subtotal</p>
//                         <p>${getTotalCartAmount()}</p>
//                     </div>
//                     <hr/>
//                     <div className='cartitems-total-item'>
//                         <p>Shipping Fee</p>
//                         <p>Free</p>
//                     </div>
//                     <hr/>
//                     <div className='cartitems-total-item'>
//                         <h3>Total</h3>
//                         <h3>${getTotalCartAmount()}</h3>
//                     </div>
//                 </div>
//                 <button>PROCEED TO CHECKOUT</button>
//             </div>
//             <div className='cartitems-promocode'>
//                 <p>
//                      Promo Codes - Enter here
//                 </p>
//                 <div className='cartitems-promobox'>
//                     <input type='text' placeholder='promo-code'/>
//                     <button>Submit</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CartItem







import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../data/cart_cross_icon.png';

const stripePromise = loadStripe();

function CartItem() {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // const handleCheckout = async () => {
    //     const stripe = await stripePromise;

    //     const items = all_product.filter(e => cartItems[e.id] > 0).map(e => ({
    //         name: e.name,
    //         image: e.image,
    //         price: e.new_price,
    //         quantity: cartItems[e.id]
    //     }));

    //     const response = await fetch('http://localhost:4000/create-checkout-session', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ items })
    //     });

    //     const session = await response.json();

    //     const result = await stripe.redirectToCheckout({
    //         sessionId: session.id
    //     });

    //     if (result.error) {
    //         alert(result.error.message);
    //     }
    // };


    const handleCheckout = async () => {
        const stripe = await stripePromise;
      
        const items = all_product.filter(e => cartItems[e.id] > 0).map(e => ({
          name: e.name,
          image: e.image,
          price: e.new_price,
          quantity: cartItems[e.id]
        }));
      
        const response = await fetch('http://localhost:4000/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items }),
        });
      
        const session = await response.json();
      
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
      
        if (result.error) {
          alert(result.error.message);
        }
      };
      

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map(e => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img className='cartitems-product-icon' src={e.image} alt='' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p className='pop'>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt='' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>
                        Promo Codes - Enter here
                    </p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promo-code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;






