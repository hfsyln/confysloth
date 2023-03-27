import { CleaningServices, Search } from '@mui/icons-material';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
  Button,
  ToggleButton,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryList } from '../features/categorySlice';
import { setCompany, setFinalList } from '../features/productSlice';
import { grey } from "@mui/material/colors";
import { setFilteredList } from "../features/filterSlice";
import { getUniqueValues } from "../utils/helpers";
import { getProduct } from "../features/productSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  });

  // useEffect(() => {
  //   dispatch(getProduct());
  //   // console.log(productList);
  // }, []);

  useEffect(() => {
    filteredProducts();
  }, [filters]);

  const { productList } = useSelector((state) => state.product);

  const categories = getUniqueValues(productList, "category");
  const companies = getUniqueValues(productList, "company");
  const colors = getUniqueValues(productList, "colors");

  const updateFilters = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(e.target.value);
    setFilters({ ...filters, [name]: value });
    // console.log(filters);
  };

  const clearFilters =() => {
    setFilters({text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,})
    

  }
  const filteredProducts = () => {
    const { text, category, company, color, price, shipping } = filters;
    // console.log(filters);
    // console.log(productList);
    let tempProducts = [...productList];
    console.log(tempProducts);
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }

    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    dispatch(setFilteredList(tempProducts));
  };
     
          
    
     


  return (
    <>
    <Box display="flex" flexDirection="column" gap="1rem">
      {/* search */}
      <Box>
        <TextField
          hiddenLabel
          name="text"
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          color="black"
          placeholder="Search"
          margin="normal"
          sx={{ width: "10rem" }}
        />
      </Box>
      {/* category */}
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h6">Category</Typography>
        <Box display="flex" flexDirection="column">
          {categories.map((c, index) => {
            return (
              <Button
                key={index}
                variant="text"
                size="small"
                sx={{
                  color: "gray",
                  width: "8rem",
                  ":active": { backgroundColor: "black" },
                }}
                style={{ justifyContent: "flex-start" }}
                value={c}
                onClick={updateFilters}
                name="category"
              >
                {c}
              </Button>
            );
          })}
        </Box>
      </Box>

      {/* company */}
      <Box>
        <Typography variant="h6">Company</Typography>
        <FormControl fullWidth>
          <Select
            sx={{
              width: "8rem",
              height: "1.8rem",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              mt: "0.5rem",
            }}
            name="company"
            onChange={updateFilters}
          >
            {companies.map((c, index) => {
              return (
                <MenuItem
                  key={index}
                  value={c}
                  style={{
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    color: grey,
                  }}
                >
                  {c}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      {/* colors */}
      <Box>
        <Typography variant="h6">Colors</Typography>
        <Box display="flex" mt="0.5rem" sx={{ gap: "0.5rem" }}>
          {colors.map((c, index) => {
            if (c === "all") {
              return (
                <button
                  key={index}
                  name="color"
                  data-color="all"
                  style={{
                    background: "white",
                    border: "none",
                    width: "2rem",
                    fontSize: "1rem",
                    color: "gray",
                  }}
                  value="all"
                  onClick={updateFilters}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                name="color"
                style={{
                  background: c,
                  width: "1rem",
                  height: "1rem",
                  borderRadius: "50%",
                  border: "none",
                }}
                data-color={c}
                value={c}
                onClick={updateFilters}
              >
                {/* {color === c ? <FaCheck /> : null} //!sonra ekle */}
              </button>
            );
          })}
        </Box>
      </Box>
      {/* price */}
      <Box>
        <Typography variant="h6">Price</Typography>
        <Box width={150}>
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={0}
            max={310000}
            name="price"
            onChange={updateFilters}
          />
        </Box>
      </Box>

      {/* shipping */}
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Free Shipping"
          onChange={updateFilters}
          name="shipping"
        />
      </Box>
      {/* clear filter */}
      <Button
        size="small"
        variant="contained"
        color="error"
        sx={{
          width: "10rem",
          display: "block",
          mx: "auto",
          mb: "2rem",
          textTransform: "none",
          fontSize: "0.9rem",
        }}
        onClick={clearFilters}
      >
        Clear Filters
      </Button>
    </Box>
  </>
  )
}


export default Filter ;