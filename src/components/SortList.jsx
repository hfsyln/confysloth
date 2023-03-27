import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setFilteredList } from '../features/filterSlice';
import {  setProduct, setSortingList } from '../features/productSlice';

const SortList = () => {

    const { productList, sortingList } = useSelector((state) => state.product);
    const { filteredList } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const [selection, setSelection] = useState("")

   

    const handleSort = (e) => {
       setSelection(e.target.value)
        if (e.target.value === "Lowest") {
            let descendingOrder = [...(filteredList?.length ? filteredList : productList).values()].sort((a, b) => a.price - b.price)
            // dispatch(setSortingList(descendingOrder))
            filteredList?.length ?  dispatch(setFilteredList(descendingOrder))  : dispatch(setProduct(descendingOrder))
        } 
        if (e.target.value === "Highest") {
            let ascendingOrder = [...(filteredList?.length ? filteredList:productList).values()].sort((a, b) => b.price - a.price)
            // dispatch(setSortingList(ascendingOrder))
            filteredList?.length ?  dispatch(setFilteredList(ascendingOrder))  : dispatch(setProduct(ascendingOrder))
        }
        
        if (e.target.value === "ZtoA") {
            let alfabeticOrder = [...(filteredList?.length ? filteredList : productList).values()].sort((a, b) => -1 * a.name.localeCompare(b.name))
            filteredList?.length ?  dispatch(setFilteredList(alfabeticOrder))  : dispatch(setProduct(alfabeticOrder))
        }
    
            if (e.target.value === "AtoZ") {
            let nonAlfabeticOrder = [...(filteredList?.length ? filteredList : productList).values()].sort((a, b) => -1 * b.name.localeCompare(a.name))
            filteredList.length ?  dispatch(setFilteredList(nonAlfabeticOrder))  : dispatch(setProduct(nonAlfabeticOrder))
        }
    
}
    

  return (
      <>
          <Box display="flex" alignItems="center"  sx={{minWidth:"80vw"}} padding="1rem" >
              <p>{filteredList?.length ? filteredList?.length : productList?.length} Products Found</p>
              <hr  style={{ width:"50%", display: "block", margin:"1rem",
                  border: "none",
                borderBottom:"1px solid #808080",
                borderTop:"none",
                overFlow: "hidden"}}/>
                <br />
              <label htmlFor="">Sort By</label>
              
              <select onChange={handleSort} style={{borderStyle:"none", margin:"1rem"}} >
                
                  <option value="Lowest">Price(Lowest)</option>
                  <option value="Highest">Price(Highest)</option>
                  <option value="AtoZ">Price(Name(A-Z))</option>
                  <option value="ZtoA">Price(Name(Z-A))</option>
              </select>
        </Box>
      </>
  )
}

export default SortList