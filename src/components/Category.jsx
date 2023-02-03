 import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import {  setChoosen,setCategoryList } from '../features/categorySlice'
import { setCompany, setFinalList } from '../features/productSlice';

 const Category = () => {

    const dispatch = useDispatch();
    const { categoryList,choosen, } = useSelector((state) => state.category);
    const { productList, finalList, companyList } = useSelector((state) => state.product);
  

    
    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(setChoosen(e.target.value))
        console.log(productList)
        dispatch(setCategoryList((companyList?.length ? companyList : productList)?.filter((item) =>  item?.category == e.target.value )))
        dispatch(setCompany([]))
        // console.log(choosen)
        // console.log(e.target.value)
        // dispatch(setFinalList(categoryList?.lenght ? categoryList : productList))
        // dispatch(setFinalList(categoryList))
       // console.log(finalList)
     }
     
        
  
   
    
      console.log(finalList)
     console.log(categoryList)
  
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