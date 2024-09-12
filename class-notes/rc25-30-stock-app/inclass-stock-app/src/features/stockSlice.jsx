import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {    
    loading: false,
    error: false,
    firms: [],
    brands: [],
    products: [],
    sales: [],
    purchases: [],
    categories: [],
  }, //* endpoint değerlerimizi kullanarak statelerimizi isimlendirdik
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // firmSuccess: (state, {payload}) => {
    //     state.loading = false;
    //     state.firms = payload.data;
    // },
    // brandSuccess: (state, {payload}) => {
    //     state.loading = false;
    //     state.brands = payload.data;
    // },
    getStockSuccess: (state, {payload}) => {
        state.loading = false;
        state[payload.endpoint] = payload.stock;
        //* square bracket notation kullanarak gelen değere göre dinamik olarak statelerimiz güncelleyebildik.
        // state["brands"] = payload.stock
        // state["firms"] = payload.stock
    },

    getProCatBrandSuccess : (state,{payload}) => {
      state.loading = false
      state.products = payload[0]
      state.categories = payload[1]
      state.brands = payload[2]
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,  
  fetchFail,
//   firmSuccess, 
//   brandSuccess,
  getStockSuccess,
  getProCatBrandSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
