import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './Cart.css'
import 'antd/dist/antd.css';

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const dispatch = useDispatch()
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className="container_cart">
      <h1 className='cart-header-title'>
        Shoping Cart
      </h1>
      {cart.length === 0 ? (
        <div className='no-product-cart'>
          <p className='no-product-cart-title'>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <Link to='/' className='btn-back-to-shop'>
            Mua Ngay
          </Link> 
        </div>
      ) : (
        <>
          <>
            <div className="cart">
              {cart.map((product) => {
                return (
                  <>
                    <div className="cartcad" key={product.id}>
                      <div className="cart-desc">
                        <div className="cart-imgandtitle">
                          <img src={product.image} alt="cart" className="cart-img" />
                          <h4 className='title-content'>{product.title}</h4>
                        </div>
                        <p className='cart-money'><span className='text'>${product.price}</span></p>
                        <div className="cart-imgandtitle margin">
                          <button className="btn-quantity"
                            onClick={() => {
                              if (product.quantity > 1) {
                                dispatch({ type: "DECREASE", payload: product });
                              }else (product.quantity = 0)
                            }}
                          >
                            -
                          </button>
                          <p className="cart-quantity">{product.quantity}</p>
                          <button className="btn-quantity"
                            onClick={() => dispatch({ type: "INCREASE", payload: product })}
                          >
                            +
                          </button>
                        </div>
                        <p className='cart-money'><span className='text'>${product.price * product.quantity}</span></p>
                        <button className="btn-remove"
                          onClick={() => dispatch({ type: "REMOVE", payload: product })}
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <hr className='line-cart' />
                  </>
                );
              })}
            </div>
          </>
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
          <div className='cart-order-btn'>
            <Link to='/order' className='btn-order'>
              Order
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart