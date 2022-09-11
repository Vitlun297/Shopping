import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './Cart.css'


const token = localStorage.getItem('token')
console.log(token)
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className="container_cart">
      <Link to="/" className="btn-back" >
        Back
      </Link>
      <h1 className='cart-header-title'>
        Shoping Cart
      </h1>
      {cart.length === 0 ? (
        <p className="no-product">ko có gì trong giỏ hàng</p>
      ) : (
        <>
          <div className="cart">
            {cart.map((item) => {
              return (
                <div className="cartcad" key={item.id}>
                  <div className="cart-desc">
                    <div className="cart-imgandtitle">
                      <img src={item.image} alt="cart" className="cart-img" />
                      <h4 className='title-content'>{item.title}</h4>
                    </div>
                    <p className='cart-money'> price: <span className='text'>${item.price}</span></p>
                    <p className='cart-money'> amount: <span className='text'>${item.price}</span></p>
                    <div className="cart-imgandtitle margin">
                      <button className="btn-quantity"
                        onClick={() => dispatch({ type: "INCREASE", payload: item })}
                      >
                        +
                      </button>
                      <p className="cart-quantity">1</p>
                      <button className="btn-quantity"
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                      >
                        -
                      </button>
                      <button className="btn-remove"
                        onClick={() => dispatch({ type: "REMOVE", payload: item })}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/" className="btn-back-btn" >
            Continue Shopping
          </Link>
        </>
      )}
      {total > 0 &&
        <div className="cart-total">
          <h1 className='cart-total-title'>
            Cart Total
          </h1>
          <div className='cart-total-total'>
            <span className='cart-total-title'>Subtotal:</span>
            <span className='text'>${total}</span>
          </div>
          <hr className='line' />
          <div className='cart-total-total'>
            <span className='cart-total-title'>Subtotal:</span>
            <span className='text'>${total}</span>
          </div>
          <Link to='/order' className='btn-order'>
            Order
          </Link>
        </div>
      }
    </div>
  )
}

export default Cart