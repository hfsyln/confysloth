import { Container } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
const navigate=useNavigate()

  return (
    <div style={{height:"50vh"}}>
      <Box sx={{ textAlign: "center" , height:"100%"}}>
        <h2 style={{ marginTop: "5rem" }}>Your cart is empty</h2>
        <button onClick={()=>navigate("/products")}>Fill it</button>

      </Box>
    </div>
  )
}

export default CartPage

