import  Button  from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import Container from '@mui/system/Container'
import React, { useEffect } from 'react'
import hero2 from '../assets/hero-bcg.jpeg'
import hero1 from '../assets/hero-bcg-2.jpeg'
import logo from "../assets/logo.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AlarmIcon from '@mui/icons-material/Alarm';
import { Avatar, CardActionArea, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../features/productSlice'
import { auth, userObserver } from '../firebaseConfig'
import { setCurrentUser } from '../features/usersSlice'
import { onAuthStateChanged } from 'firebase/auth'


const Home = () => {

  const {productList} = useSelector((state) => state.product);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {email, displayname, photoURL} = user
     dispatch(setCurrentUser({email, displayname, photoURL}))
      console.log(user);
    } else {
      console.log("user signed out");
      dispatch(setCurrentUser(false))
    }
  });
};

  useEffect(() => {
    dispatch(getProduct())
    userObserver(setCurrentUser);
}, [])



  return (
  <>
    <Box className='' sx={{justifyContent:"center", }}>
        <Container sx={{display: "flex",flexDirection: "row",justifyContent: "center", }}>
              <Container align="start"  sx={{display:"flex", flexDirection:"column", gap:"20px", width:"30vw", m:"5rem"}}>
                      <Typography variant="h4" >
                              Desing Your Comfort Zone
                      </Typography>
                      <Typography variant="body1" align="justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum fuga laudantium? Excepturi reiciendis minus doloribus quas reprehenderit pariatur alias dolor veniam sit libero architecto, enim atque temporibus ipsam consequuntur!
                      </Typography>
                      <Button onClick={()=>navigate("/cart")} variant="contained" sx={{background:"orange", width:"10rem"}}>SHOP NOW</Button>     
              </Container>
              <Container sx={{position:"relative", width:"30vw", m:"2rem"}}>
                  <img className='imgone' src={hero2} alt="photobig" />
                  <img className='imgtwo' src={hero1} alt="photolittle" />
                  
              </Container>
        </Container>


         
       <Box sx={{background:"#f1f5f8" , p:"0.5rem",}}>
                  <Typography variant="h4" sx={{mt:"2rem"}} align="center" >
                  Featured Products
                </Typography>
                <Container sx={{display:"flex"}}>
                
                {productList?.slice(0, 3).map((item, index) => {
                  return(
                <Card sx={{ maxWidth: 300, m:"3rem", minWidth:300}} key={index}>
                <CardActionArea>
                
                  <CardMedia
                    component="img"
                    height="200"
                    image={item?.image} //örnek olarak koyuldu apiden gelecek
                    alt="green iguana"
                  />
                  <CardContent sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", mx:"10px"}}>
                    <Typography gutterBottom variant="body1" >
                    {item?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                     $ {item?.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                        </Card>
                )
                    
      
          })} 
                 </Container>
                  <Button onClick={()=>navigate("/product")} variant="contained" sx={{background:"orange", width:"10rem", display:"block", mx:"auto", mb:"2rem"}}>ALL PRODUCTS</Button>     
          </Box>  




        <Box sx={{background:"#eaded7", height:"25rem"}}>
                <Container sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",}}>
                              <Typography variant="h4" m="3rem" >
                                Custom Furniture Built Custom For You
                              </Typography>
                              <Typography variant="body1" m="3rem" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo in maiores vel ex? Error alias eius, quod saepe ut exercitationem?
                              </Typography>
                </Container>
                <Container sx={{display:"flex", justifyContent:"center", gap:"2rem",}}>
                          <Card align="center" sx={{width:"15rem", background:"#c5a491",display:"flex", flexDirection:"column",gap:"0.3rem", padding:"1rem"}}>
                            <Avatar  sx={{ width: 56, height: 56 , mt:"1rem", mx:"auto"}}><AlarmIcon /></Avatar>
                            <Typography variant="h6"  >
                                Mission
                              </Typography>
                              <Typography variant="p"  >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo in maiores vel ex? Error alias eius, quod saepe ut exercitationem?
                              </Typography>
                          </Card>
                          <Card align="center" sx={{width:"15rem", background:"#c5a491",display:"flex", flexDirection:"column",gap:"1rem", padding:"1rem"}}>
                            <Avatar  sx={{ width: 56, height: 56 , mt:"1rem", mx:"auto"}}><AlarmIcon /></Avatar>
                            <Typography variant="h6"  >
                                Vision
                              </Typography>
                              <Typography variant="p"  >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo in maiores vel ex? Error alias eius, quod saepe ut exercitationem?
                              </Typography>
                          </Card>
                          <Card align="center" sx={{width:"15rem", background:"#c5a491",display:"flex", flexDirection:"column",gap:"1rem", padding:"1rem"}}>
                            <Avatar  sx={{ width: 56, height: 56 , mt:"1rem", mx:"auto"}}><AlarmIcon /></Avatar>
                            <Typography variant="h6"  >
                                History
                              </Typography>
                              <Typography variant="p"  >
                               Lorem ipsum dolor,  Cum tempora dignissimos, iusto earum  optio placeat harum facilis aspernatur.
                              </Typography>
                          </Card>
                </Container>      
        </Box>

        <Container>
                <Typography variant="h4" mt="10rem"  >
                Join our newsletter and get 20% off                
                </Typography>
                <Container sx={{mt:"2rem", display:"flex", gap:"10rem", flexDirection:"row"}}>
                    <Typography variant="body1" >
                      Lorem ipsum dolor . Quis maxime voluptatem accusantium laboriosam nisi voluptates ipsam ipsum explicabo nostrum sequi!
                    </Typography>
                    <Container sx={{display:"flex", mb:"3rem"}}>
                        <TextField id="outlined-basic" label="Enter Email" sx={{width:"25rem"}} />
                        <Button variant="contained" sx={{background:"orange", width:"7rem", display:"block", mx:"auto"}}>Subscribe</Button>     
                    </Container>
                </Container>
                

        </Container>
        </Box>
      
        </>

  )
}

export default Home;