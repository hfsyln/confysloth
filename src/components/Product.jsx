import Box from "@mui/material/Box";
import CardCom from "./CardCom"
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct} from '../features/productSlice';
import loadinGif from "../assets/loading.gif";
import Filter from "./Filter";
import SortList from "./SortList";

const Product = () => {
  const { productList, loading, error, companyList, finalList } = useSelector((state) => state.product);
  const { filteredList } = useSelector((state) => state.filter);
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getProduct())
  
    }, [])
    
    
    return (
    <>
        {error && (
            <Typography variant="h3" color="error" align="center" mt={20}>
              {error}
            </Typography>
          )}
          {loading && (
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src={loadinGif} />
            </Box>
          )}
          {!loading && (
    <Box sx={{ display: "flex", flexDirection: "row", m: "5rem" }}>
                
                        <Filter/>

               <Box sx={{display:"flex", flexDirection:"column", gap:"1rem"}}>
              
                        <SortList/>
            
               
                <Box
               xs={{ mt:"3rem"}}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
            { (filteredList?.length ? filteredList : productList)?.map((item, index) => (
               <CardCom item={item} index={index} />
              ))}
              </Box>
                    </Box>
                    </Box>
            )}
            </>
    )
}
export default Product;