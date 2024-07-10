import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { CgBell } from "react-icons/cg";
const CartWidget = () => {
  return (
    <div className='d-flex align-items-center mx-2'>
      <span>0</span>
      <div className='d-flex'>
        <TiShoppingCart style={{ fontSize: '24px' }} />
        <CgBell style={{ fontSize: '24px' }}/>
      </div>
    </div>
  )
}

export default CartWidget
