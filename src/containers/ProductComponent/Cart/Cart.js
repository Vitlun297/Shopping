import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Cart.css'


const token = localStorage.getItem('token')
console.log(token)
function Cart() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <div className="container_cart">
      <h1 className='cart-title'>
        Shoping Cart
      </h1>
    </div>
  )
}

export default Cart