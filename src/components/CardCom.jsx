import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCartCount, setCartItem, setFilterCartItem } from '../features/cartSlice';
import {addToFavoriteList, removeFromFavouriteList} from "../features/favoriteSlice"

const CardCom = ({ item, index }) => {
   const dispatch = useDispatch()
  //  const navigate = useNavigate();
 //   const { favoriteList } = useSelector(state => state.favorite)
    const { cartOpen, cartItem ,cartCount,filterCartItem} = useSelector((state) => state.cart);


  
     const handleAddToCart = (item) => {
       // dispatch(setCartItem(item))
        dispatch(setCartCount())
      
        if (!cartItem.length) {
            dispatch(setCartItem(item))
        }
        else if  (!cartItem.map((i) => i.id).includes(item.id)
        ) {
            dispatch(setCartItem(item))
        }
     }

    // const handleFavourite = (item) => {
    //     if (favoriteList.includes(item)) {
    //     return dispatch(removeFromFavouriteList(item))


    // }
    // dispatch(addToFavoriteList(item))}

     console.log(cartItem)
     console.log(cartCount)
    

  return (
      <>
    <Card sx={{ maxWidth: 300, m: 5, maxHeight: 600, minWidth:300 }} key={index}>
                  <CardMedia
                          component="img"
                          width="175"
                    height="175"
                    image={item?.image}
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.price}$
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>handleAddToCart(item)} size="small">Add to Cart</Button>
                    <Button  size="small" target="_blank">
                     Like
                    </Button>
                  </CardActions>
                </Card>
      </>
  )
}

export default CardCom