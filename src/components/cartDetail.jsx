import { Button, Card, CardActionArea, CardActions, List, ListItem, Typography } from '@mui/material';
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const CartDetail = (handleFavorite, handleAddToCart) => {

  const {state} = useLocation()
  console.log(state)
  const { favoriteList } = useSelector(state => state.favorite)




  return (
    <>
     <Card   sx={{width: "40rem", height:"42rem", margin:"auto", my:"1rem", textAlign:"center", background:"grey"}}>
      <img src={(state?.image)} className="card-img-top" style={{height:"17rem", marginTop:"2rem"}} />
      <CardActions className="card-body" sx={{display:"flex", flexDirection:"column"}}>
        <List>
              <ListItem className="list-group-item">Name : {state?.name.toUpperCase()}</ListItem>
              <ListItem className="list-group-item">Company : {state?.company.toUpperCase()}</ListItem>
              <ListItem className="list-group-item">Price : ${state?.price}</ListItem>
              <ListItem className="list-group-item">Category : {state?.category.toUpperCase()}</ListItem>
        </List>
        <Typography className="card-text">{state?.description}</Typography>
       
         
      </CardActions>
      {/* <CardActions>
                    <Button onClick={()=>handleAddToCart(state)} size="small">Add to Cart</Button>
                    <Button  size="small" target="_blank" onClick={() => handleFavorite(state)}>
  
                   {favoriteList?.map((i)=>i.id).includes(state.id)  ? <FavoriteBorderIcon sx={{fill:"red"}}/> : <FavoriteBorderIcon />}   
                    
                    </Button>
      </CardActions> */}
  </Card>
    </>
  )
}

export default CartDetail