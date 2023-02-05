 import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import {  setCategory,setCategoryList } from '../features/categorySlice'
import { getProduct, setCompany, setFinalList, setProduct } from '../features/productSlice';

 const Category = () => {

    const dispatch = useDispatch();
    const { categoryList, category, } = useSelector((state) => state.category);
    const { productList, finalList, companyList, company} = useSelector((state) => state.product);
  

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hellooooo")
        console.log(e.target.value)
        dispatch(setCategory(e.target.value))
        console.log(productList)
       // burada prıduct u değiştirecek filtreleyecek olan fonksiyonu çağıracağız
       
        console.log(productList?.filter((item) => (item?.category === category)))
        
        if(!company){
            dispatch(setFinalList(productList?.filter((item) => (item?.category === e.target.value))))
          console.log("hello")
        }else {
            dispatch(setFinalList(productList?.filter((item)=>(item?.category === e.target.value && item?.company === company)))) 
            
        }
        
       

       
     }
     
  
 //  console.log((productList?.filter((item)=>(item?.category === category  && item?.company === company ))))
  //   console.log(productList?.filter((item) => (item?.category === category)))
        console.log(productList)
        console.log(category)
        console.log(company)    
        console.log(finalList)
  
     return (

         <Box>
             <Typography variant="h6">Category</Typography>
     <Box sx={{display:"flex", flexDirection:"column", alignItems:"start"}}>
             <Button onClick={handleSubmit} sx={{color:"grey"}} value=""  variant="string" >All</Button>
             <Button onClick={handleSubmit} sx={{color:"grey"}} value="office" variant="text" >Office</Button>
             <Button onClick={handleSubmit} sx={{color:"grey"}} value="living room"  variant="text">Livingroom</Button>
             <Button onClick={handleSubmit} sx={{color:"grey"}} value="kitchen"  variant="text">Kitchen</Button>
             <Button onClick={handleSubmit} sx={{color:"grey"}} value="bedroom"  variant="text">Bedroom</Button>
             <Button onClick={handleSubmit} sx={{color:"grey"}} value="dining" variant="text">Dining</Button>
            <Button onClick={handleSubmit} sx={{color:"grey"}} value="kids"   variant="text">Kids</Button>
           </Box>
       </Box>
   )
 }

 export default Category