import { baseUrl } from "@/app/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Url } from "@/app";
 
// const Url = "http://192.168.0.201:8080/souq";
const Url = "https://souq.deltawy.com";
// http://192.168.0.201:8080/souq/rest/rest.matgar/getProductDetails
// export const getShopProducts = createAsyncThunk(
//   "Shop/getShopProducts",
//   async (Pid, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const data = await axios
//         .post(`${baseUrl}/rest/rest.matgar/getLastProducts/`, {
//           id: 0,
//           page: Pid,
//         })
//         .then((res) => res.data);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// http://192.168.0.201:8080/souq/rest/rest.matgar/makeOrder
export const AddToCart = createAsyncThunk(
  "Shop/AddToCart",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/makeOrder`, {
          ...item,
        })
        .then((res) => res.data);
  return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "Shop/getProductDetails",
  async (proData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.matgar/getProductDetails`, {
          ...proData,
        })
        .then((res) => res.data);
  return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getSearchResult = createAsyncThunk(
  "Shop/getSearchResult",
  async (items, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.matgar/searchProduct`, {
          ...items,
           headers :{
            "Content-Type" : "application/json"
          }
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const GetFromCart = createAsyncThunk(
  "Shop/GetFromCart",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.matgar/getCart`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// http://192.168.0.201:8080/souq/rest/rest.matgar/updateProductOrder
export const GetUpdateCart = createAsyncThunk(
  "Shop/GetUpdateCart",
  async (info, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // }/rest/rest.matgar/updateProductOrderCount
      const data = await axios
        .post(` ${baseUrl}/rest/rest.matgar/updateProductOrderCount`, {
          ...info,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "Shop/DeleteProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.orderline/delete`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const UpdateProdectViews = createAsyncThunk(
  "Shop/UpdateProdectViews",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.product/updateProductViews`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const ShopSlice = createSlice({
  name: "Shop",
  initialState: {
    isLoading: false,
    ProductLoading: false,
    error: null,
    // ShopProductArr: [],
    ProductInfo: null,
    CartItems: null,
    SearchresultArr: [],
    GetFromCartAarr: null,
    UpdateCartArr: null,
    searchCharInput: "",
    searchPageCharInput: "",
    LastProductArr: [],
  },
  reducers: {
    ClearCart: (state, action) => {
      state.GetFromCartAarr = null;
    },
    searchChar: (state, action) => {
      state.searchCharInput = action.payload;
    },
    searchPageChar: (state, action) => {
      state.searchPageCharInput = action.payload;
    },
  },
  extraReducers: {
    // getMainCat
    // [getShopProducts.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [getShopProducts.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.ShopProductArr = state.ShopProductArr.concat(action.payload.offers);
    //   console.log(action);
    // },
    // [getShopProducts.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   console.log(action);
    // },

    // get productDetails
    [getProductDetails.pending]: (state, action) => {
      state.ProductLoading = true;
      state.error = null;
      state.ProductInfo = null;
      // state.Products = action.payload; ProductLoading
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.ProductLoading = false;
      state.ProductInfo = action.payload;
      // console.log(action);
    },
    [getProductDetails.rejected]: (state, action) => {
      state.ProductLoading = false;

      state.error = action.payload;
      // console.log(action);
    },
    //  AddToCart
    // [AddToCart.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   // state.Products = action.payload;
    // },
    [AddToCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CartItems = action.payload;
      // console.log(action);
    },
    [AddToCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    // get SearchResult
    [getSearchResult.pending]: (state, action) => {
      // state.isLoading = true;
      state.error = null;
      // console.log(action);

      // state.Products = action.payload;
    },
    [getSearchResult.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action);
      // if (action.meta.arg.page === 0) {
        if (action.meta.arg === 0) {
        state.LastProductArr = action.payload.offers;
      }
      if (state.searchCharInput?.length > 0) {
         if (action.meta.arg){
          if (action.meta.arg.page === 0) {
            state.SearchresultArr = action.payload.offers;
          } else {
            state.SearchresultArr = state.SearchresultArr.concat(
              action.payload.offers
            );
          }
         }
        
      } else {
        if (action.meta.arg === 0) {
          state.SearchresultArr = action.payload.offers;
        } else {
          state.SearchresultArr = state.SearchresultArr.concat(
            action.payload.offers
          );
        }
      }
    },
    [getSearchResult.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    //  GetFromCart
    [GetFromCart.pending]: (state, action) => {
      // state.isLoading = true;
      state.error = null;
      // state.Products = action.payload;
    },
    [GetFromCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.GetFromCartAarr = action.payload;
      // console.log(action);
    },
    [GetFromCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    //  GetUpdateCart
    // [GetUpdateCart.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   // state.Products = action.payload;
    // },
    [GetUpdateCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.GetFromCartAarr = action.payload;
      // console.log(action);
    },
    [GetUpdateCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    //  GetDeleteProduct
    // [DeleteProduct.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   // state.Products = action.payload;
    // },
    [DeleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.GetFromCartAarr = action.payload;
      // console.log(action);
    },
    [DeleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    //  UpdateProdectViews
    // [UpdateProdectViews.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   // state.Products = action.payload;
    // },
    [UpdateProdectViews.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.GetFromCartAarr = action.payload;
      // console.log(action);
    },
    [UpdateProdectViews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});
export const { searchChar, searchPageChar, ClearCart } = ShopSlice.actions;

export default ShopSlice.reducer;
