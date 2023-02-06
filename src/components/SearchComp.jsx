import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, setCompany, setFinalList, setProduct, setSearch } from '../features/productSlice';


const SearchComp = () => {

  const { productList, finalList, companyList, company, search} = useSelector((state) => state.product);
  const { categoryList, category, } = useSelector((state) => state.category);
  const dispatch = useDispatch()
  const [entered, setEntered] = useState("")

const handleChange = (e) => {
  setEntered(e.target.value)
}



const something = (event) => {
  if (event.keyCode === 13) {
    dispatch(setSearch(entered))
    if(!company && !category){
      dispatch(setFinalList(productList?.filter((item) => (item?.name.includes(entered)))))
    }else if(!company){
      dispatch(setFinalList(productList?.filter((item) => (item?.category === category && item?.name.includes(entered) ))))
    
    }else if(!category){
       dispatch(setFinalList(productList?.filter((item) => (item?.name.includes(entered) && item?.company === company))))
    }else {
      dispatch(setFinalList(productList?.filter((item)=>(item?.category === category && item?.company === company && item?.name.includes(entered))))) 
      
    }
}


}

  console.log(entered)
  console.log(search)

  return (
      <div>
           <input onKeyDown={(i) => something(i)} onChange={handleChange} id="outlined-basic" label="Search" variant="outlined" style={{height:"2rem" , borderRadius:"0.3rem",border:"none" , borderStyle:"none",backgroundColor:"#f1f5f8" , }} placeholder="Search"   />
    </div>
  )
}

export default SearchComp