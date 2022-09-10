import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


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
    <div>hillllll</div>
  )
}

export default Cart