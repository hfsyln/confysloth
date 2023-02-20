import { Card, CardActionArea, List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const CartDetail = () => {

  const {state} = useLocation()
  console.log(state)


  return (
    <>
     <Card className="card d-flex flex-row mt-5 mx-auto" style={{width: "50rem", height:"30rem"}}>
      <img src={(state?.poster_path)} className="card-img-top" />
      <CardActionArea className="card-body">
        <Typography className=''>OverView</Typography>
        <Typography className="card-text">{state?.overview}</Typography>
          <List className="list-group list-group-flush">
              <ListItem className="list-group-item">Title :  {state?.title}</ListItem>
              <ListItem className="list-group-item">Release Date :  {state?.release_date}</ListItem>
              <ListItem className="list-group-item">Language : {state?.original_language}</ListItem>
              <ListItem className="list-group-item">Rate : {state?.vote_average}</ListItem>
          </List>
      </CardActionArea>
  </Card>
    </>
  )
}

export default CartDetail