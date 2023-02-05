import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import images from '../assets/logo.svg'
import { clearAll, removeItemFromCart, setCartCount, setcartDecrease, setCartItem } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    let total = 0
    let subtotal =0
    const { cartOpen, cartItem, cartCount ,filterCartItem} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDelete = (item) => {
        dispatch(removeItemFromCart(item))
        
    }

    const handleDecrease = (item) => {

      if((cartItem?.filter((i) => i?.id === item?.id)).length >1){
             let index = cartItem.indexOf(item) //item ların index i ni verir
// cartItem?.findIndex((i) => i === item)  //i’si “item” olan ilk kaydın sıra numarasını verir,
            
 //! let a = [...cartItem].splice(index,1) yapınca tüm elemanları siliyor sadece tıkladığımın 1 tane ıtem ını bırakıyor
              let arrayforchange =[...cartItem]
              arrayforchange.splice(index, 1)
              dispatch(setcartDecrease(arrayforchange))
              dispatch(setCartCount())
            //   console.log(index)
            //   console.log(cartItem?.findIndex((i) => i === item) )
          }
      }

   
    const handleClear = () => {
        dispatch(clearAll())
    }
   




    const handleIncrease = (item) => {
        dispatch(setCartItem(item))
        dispatch(setCartCount())
       console.log(typeof(item.price)) 

}

console.log(filterCartItem)
    return (

        <>
        {filterCartItem.length ? (
            <Box>
            <div >
                      {filterCartItem?.map((item, index) => {
                          return (
                          <div style={{ display: "flex", justifyContent:"center"}} key={index}>
                              <Card sx={{width:"10rem"}}>
                                  <CardMedia component="img" alt={item?.title} image={item?.image}
                                      style={{ objectFit: "contain", background: "white", maxWidth: 150, minWidth: 150, maxHeight: 150}}
                                  />
                              </Card>
                              <Card sx={{width: 250, height: 150,}}>
                                  <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                                      <div>
                                          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                              {item?.name}
                                          </Typography>

                                          <Typography sx={{ fontSize: 14, color: "red", fontWeight: "bold" }} >
                                             $ {item?.price} 
                                          </Typography>
                                          <div style={{ fontSize: 12, color: "black", fontWeight: "bold", display: "flex", justifyContent: "flex-start" }} >

                                             <TextField id="outlined-basic" variant="outlined"
                                                        value={(cartItem?.filter((i) => i?.id === item?.id)).length}
                                                        size="small" />
                                              <div>
                                                  <ArrowDropUpIcon style={{ height: "1rem" }} onClick={() => handleIncrease(item)} />
                                                  <ArrowDropDownIcon style={{ height: "1rem" }}onClick={() => handleDecrease(item)} />
                                              </div>
                                       

                                          </div>
                                          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} > Total : $ {((cartItem?.filter((i) => i?.id === item?.id)).length * (item.price))}
                                             
                                             </Typography>
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
                   {/* Subtotal({cartCount} items) : {(cartItem?.reduce((acc, item) => acc + item?.price, 0))} */}
                   {filterCartItem?.map((item) => {
                        subtotal = subtotal + (cartItem.filter((i)=> i.id === item.id).length * item.price)
                    })}
                     Subtotal({cartCount} items) : 
                    {subtotal}
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
      </Box>
    </div>
        )

        }
            
   
  </>
  )
}

export default Cart