import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../features/catagorySlice';

const Filter = () => {

    const { productList, loading, error} = useSelector((state) => state.product);
    const dispatch = useDispatch();
   
    const [rakam, setRakam]= useState()
    
      function valuetext(value) {
        return `${value}`;
        setRakam(value)
      }

      const handleClick = (e) => {
        console.log(e.target.value)
     
       } 
    

  return (
    <FormGroup  sx={{width:"10vw", my:"7rem", ml:"10rem",  gap:"2rem"}}>
        <TextField size="small" id="outlined-basic" label="Search" variant="outlined" />
        <Typography variant="h6">Catagory</Typography>
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"start"}}>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small"   value="all" >all</Button>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small"  value="Office">Office</Button>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small" value="Livingroom" >Livingroom</Button>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small" value="Kitchen" >Kitchen</Button>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small" value="Bedroom" >Bedroom</Button>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small" value="Dining">Dining</Button>
                <Button onClick={handleClick} sx={{color:"grey"}} size="small" value="Kids">Kids</Button>
        </Box>
        <Typography variant="h6">Company</Typography>
        <FormControl fullWidth>
        <Select
        sx={{width:"8rem"}}
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            //label={value}
            // onChange={handleChange}
        >
            <MenuItem value={10}>all</MenuItem>
            <MenuItem value={20}>marcos</MenuItem>
            <MenuItem value={30}>liddy</MenuItem>
            <MenuItem value={40}>ikea</MenuItem>
            <MenuItem value={50}>caressa</MenuItem>
        </Select>
        </FormControl>
        <Typography variant="h6">Color</Typography>
        <Box>
        <Button sx={{color:"black"}} variant="text">All</Button>
        <Button sx={{background:"pink", borderRadius:"50%"}} variant="text"></Button>
                <Button sx={{background:"green", borderRadius:"50%"}} variant="text"></Button>
                <Button sx={{background:"blue", borderRadius:"50%"}} variant="text"></Button>
                <Button sx={{background:"grey", borderRadius:"50%"}} variant="text"></Button>
                <Button sx={{background:"yellow", borderRadius:"50%"}} variant="text"></Button>
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


