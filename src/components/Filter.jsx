import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Filter = () => {

    const [rakam, setRakam]= useState()
    
    function valuetext(value: number) {
        return (
            `${value}`,
            setRakam(value)
        )
      }

  return (
    <FormGroup  sx={{width:"10vw",my:"7rem", mx:"2rem", alignItems:"center", gap:"1.5rem"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Typography variant="h6">Catagory</Typography>
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"start"}}>
                <Button sx={{color:"grey"}} variant="string" >All</Button>
                <Button sx={{color:"grey"}} variant="text" >Office</Button>
                <Button sx={{color:"grey"}} variant="text">Livingroom</Button>
                <Button sx={{color:"grey"}} variant="text">Kitchen</Button>
                <Button sx={{color:"grey"}} variant="text">Bedroom</Button>
                <Button sx={{color:"grey"}} variant="text">Dining</Button>
                <Button sx={{color:"grey"}} variant="text">Kids</Button>
        </Box>
        <Typography variant="h6">Company</Typography>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">all</InputLabel>
        <Select
        sx={{width:"8rem"}}
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            // label={value}
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
            min={10}
            max={110}
            />
            </Box>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Free Shipping" />
        <Button variant="contained" sx={{background:"orange", width:"10rem", display:"block", mx:"auto", mb:"2rem"}}>Clear Filters</Button>  
    </FormGroup>
  )
}

export default Filter