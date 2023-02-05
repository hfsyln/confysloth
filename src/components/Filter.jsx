import { CleaningServices } from '@mui/icons-material';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryList } from '../features/categorySlice';
import { setCompany, setFinalList } from '../features/productSlice';
import Category from "./Category"
import SearchComp from './SearchComp';

const Filter = () => {

    const dispatch = useDispatch();
    const { categoryList,category, } = useSelector((state) => state.category);
    const { productList,companyList, finalList, company } = useSelector((state) => state.product);
   
    const [rakam, setRakam]= useState()
    
      function valuetext(value) {
        return `${value}`;
        setRakam(value)
      }

       const handleChange = (e) => {
         e.preventDefault()
        console.log(e.target.value)
        dispatch(setCompany(e.target.value))
      console.log(productList)
      
    //  productList.filter((item)=>(item.category === category && item.company == company))
    //  console.log(productList?.filter((item) => (item?.company === company)))
      if(!category){
        dispatch(setFinalList(productList?.filter((item)=>(item?.company === e.target.value)))) 
        
      }else {
        dispatch(setFinalList(productList?.filter((item)=>(item?.category === category && item?.company == e.target.value))))
        
      }
      
    



    //  dispatch(setCompany(((categoryList?.length ? categoryList : productList)?.filter((item) =>  item?.company == e.target.value ))))
    //  dispatch(setFinalList(companyList))
      //  dispatch(setCategoryList([]))
      // console.log(categoryList)
      // console.log(categoryList?.length ? categoryList : productList)?.filter((item) =>  item?.company === e.target.value)
        } 

        
          
    
        console.log((productList?.filter((item)=>(item.category === category  && item.company === company )))) 
     //   console.log((productList?.filter((item)=>(item.category === category  && item.company === company)))) 
      console.log(productList?.filter((item) => (item?.company === company)))  
     console.log(finalList)
       console.log(company)


  return (
    <FormGroup  sx={{width:"10vw", m:"5rem",  gap:"2rem"}}>
         <SearchComp/> 
         <Category/>
        <Typography variant="h6">Company</Typography>
        <FormControl fullWidth>
         <Select
          // onChange={handleChange}
        sx={{width:"8rem", height:"2rem"}}
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            //label={value}
             onChange={handleChange}
        >
            <MenuItem value="all" >all</MenuItem>
            <MenuItem value="marcos">marcos</MenuItem>
            <MenuItem value="liddy">liddy</MenuItem>
            <MenuItem value="ikea">ikea</MenuItem>
            <MenuItem value="caressa">caressa</MenuItem>
        </Select>
        </FormControl>
        <Typography variant="h6">Color</Typography>
        <Box sx={{display:"flex", gap:"0.5rem"}}>
                <button variant="text" style={{border:"none", width:"2rem"}}>All</button>
                <button style={{width:"1rem",height:"1rem", backgroundColor:"pink",borderRadius:"50%" , border:"none"}} variant="text"></button>
                <button style={{width:"1rem",height:"1rem", backgroundColor:"green",borderRadius:"50%",border:"none"}} variant="text"></button>
                <button style={{width:"1rem",height:"1rem", backgroundColor:"blue",borderRadius:"50%",border:"none"}} variant="text"></button>
                <button style={{width:"1rem",height:"1rem", backgroundColor:"grey",borderRadius:"50%",border:"none"}} variant="text"></button>
                <button style={{width:"1rem",height:"1rem", backgroundColor:"yellow",borderRadius:"50%",border:"none"}} variant="text"></button>
        </Box>
        <Typography variant="h6">Price</Typography>
        <Box sx={{width:"10rem"}}>
        <Typography variant="h6">{rakam}$</Typography>
        <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={310000}
            />
            </Box>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Free Shipping" />
        <Button  size="small"  variant="contained" sx={{background:"orange", width:"10rem", display:"block", mx:"auto", mb:"2rem"}}>Clear Filters</Button>  
    </FormGroup>
  )
}


export default Filter ;