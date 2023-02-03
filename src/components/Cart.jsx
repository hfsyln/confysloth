import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import images from '../assets/logo.svg'
import { clearAll, removeItemFromCart, setCartCount, setCartItem } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartOpen, cartItem, cartCount ,filterCartItem} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDelete = (item) => {
        dispatch(removeItemFromCart(item))
        
    }

    const handleDecrease = () => {
       
    }
    
    const handleClear = () => {
        dispatch(clearAll())
    }
    const handleIncrease = (item) => {
        dispatch(setCartItem(item))
        dispatch(setCartCount())
}

    return (

        <>
        {cartItem.length ? (
            <Box>
            <div >
                      {cartItem?.map((item, index) => {
                          return (
                          <div style={{ display: "flex" }} key={index}>
                              <Card sx={{width:"10rem"}}>
                                  <CardMedia component="img" alt={item?.title} image={item?.image}
                                      style={{ objectFit: "contain", background: "white", maxWidth: 150, minWidth: 150 }}
                                  />
                              </Card>
                              <Card sx={{width: 250, height: 150,}}>
                                  <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                                      <div>
                                          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                              {item?.title}
                                          </Typography>

                                          <Typography sx={{ fontSize: 14, color: "red", fontWeight: "bold" }} >
                                              {item?.price} TL
                                          </Typography>
                                          <div style={{ fontSize: 12, color: "black", fontWeight: "bold", display: "flex", justifyContent: "flex-start" }} >

                                              {/* <TextField id="outlined-basic" variant="outlined"
                                                  value={(basketItem?.filter((i) => i?.id === item?.id)).length}
                                                  size="small" /> */}
                                              <div>
                                                  <ArrowDropUpIcon style={{ height: "1rem" }} onClick={() => handleIncrease(item)} />
                                                  <ArrowDropDownIcon style={{ height: "1rem" }}
                                                      onClick={() => handleDecrease(item)} />
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <DeleteForeverIcon
                                              onClick={() => handleDelete(item)} />
                                      </div>
                                  </CardContent>
                              </Card>
                          </div>)
                      })
                  }
               </div>

          <Typography id="modal-modal-description" sx={{ mt: 2, mr: 10 }} style={{ textAlign: "end" }}>
              Subtotal
                  {/* Subtotal({basketCount} items):{(basketItem?.reduce((acc, current) => acc + current?.price, 0)).toFixed(2)}TL */}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                  <Button size="small" style={{ background: "orange", color: "white" }}>BUY NOW</Button>
                  <Button size="small" style={{ background: "grey", color: "black" }}
                      onClick={handleClear}>CLEAR CART</Button>
              </Typography>
           </Box>
        ) : (
           <div style={{height:"50vh"}}>
      <Box sx={{ textAlign: "center" , height:"100%"}}>
        <h2 style={{ marginTop: "5rem" }}>Your cart is empty</h2>
        {/* <button onClick={()=>navigate("/product")}>Fill it</button> */}
      </Box>
    </div>
        )

        }
            
   
  </>
  )
}

export default Cart