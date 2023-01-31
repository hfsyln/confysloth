import  Box from '@mui/material/Box'
import  Container  from '@mui/system/Container'
import React from 'react'
import hero1 from "../assets/hero-bcg.jpeg"

const AboutPage = () => {
  return (
    <>
    
    <Container fixed maxWidth="xl" sx={{ my: 5, display: "flex", justifyContent: "between", gap: 10 }}>
      <img src={hero1} alt="" width={'500px'} height={'500px' } />
              <Box maxWidth="sm" sx={{fontSize:"25px"}}>
                  <h1>Our Story</h1>
                  <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nihil! Animi reiciendis laudantium voluptates autem? Placeat quis dolorum laboriosam ipsa in eius debitis impedit distinctio sequi voluptas saepe reiciendis, molestias dolore itaque quod eveniet magnam perspiciatis. Blanditiis in maxime accusantium error neque est tempore quibusdam. Aspernatur magnam obcaecati unde eos!</p>
                 
              </Box>
              
           
      </Container>
      </>
  )
}

export default AboutPage
