import { baseUrl } from "@/app/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Url } from "@/app";

// const Url = "http://192.168.0.201:8080/souq";
const Url = "https://souq.deltawy.com";
// http://192.168.0.201:8080/souq/rest/rest.matgar/normalHeaders
export const getMainCat = createAsyncThunk(
  "Categories/getMainCat",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${baseUrl}/rest/rest.category/categories`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const getHomeHeaders = createAsyncThunk(
  "Categories/getHomeHeaders",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`${baseUrl}/rest/rest.matgar/normalHeaders`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// getClothe
export const catDetails = createAsyncThunk(
  "Categories/catDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getCategoryDetails`, {
          "uid": 0,
          "catId": id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// /rest.category/Subcategories
export const Subcategories = createAsyncThunk(
  "Categories/Subcategories",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.category/Subcategories`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getBranchesProducts = createAsyncThunk(
  "Categories/getBranchesProducts",
  async (items, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.matgar/searchProduct`, {
          ...items,
          // headers :{
          //   "Content-Type" : "application/json"
          // }
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getMostViewed = createAsyncThunk(
  "Categories/getMostViewed",
  async (items, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(` ${baseUrl}/rest/rest.matgar/getMostViewed`, {
          id: 4,
          page: 0,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    isLoading: false,
    BranchesLoading: false,
    error: null,
    Categories: null,
    ColtheProducts: null,
    HealthProducts: null,
    FurnitureArr: null,
    getShoesArr: null,
    MobileArr: null,
    SleepProducts: null,
    ChildrenArr: null,
    ComputerArr: null,
    CarsArr: null,
    RoomsArr: null,
    getBranchesProductsArr: [],
    BranchesCatList: [],
    // NestedBranchArr: [],
    MostViewedArr: null,
    HomeHeadersArr: [],
    SubcategoriesArr: null,
  },
  extraReducers: {
    // getMainCat
    [getMainCat.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMainCat.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Categories = action.payload;
      // console.log(action);
    },
    [getMainCat.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    [catDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [catDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.parentCat === 3) {
        state.ColtheProducts = action.payload.products;
      } else if (action.payload.parentCat === 9) {
        state.ComputerArr = action.payload.products;
      } else if (action.payload.parentCat === 16) {
        state.HealthProducts = action.payload.products;
      } else if (action.payload.parentCat === 18) {
        state.FurnitureArr = action.payload.products;
      } else if (action.payload.parentCat === 55) {
        state.getShoesArr = action.payload.products;
      } else if (action.payload.parentCat === 68) {
        state.MobileArr = action.payload.products;
      } else if (action.payload.parentCat === 70) {
        state.SleepProducts = action.payload.products;
      } else if (action.payload.parentCat === 74) {
        state.ChildrenArr = action.payload.products;
      } else if (action.payload.parentCat === 192) {
        state.CarsArr = action.payload.products;
      } else if (action.payload.parentCat === 196) {
        state.RoomsArr = action.payload.products;
        // console.log(action);
      } else {
        // console.log()
        console.log(action);
      }
    },
    [catDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    // ------- getBranchesProducts -------------
    // [getBranchesProducts.pending]: (state, action) => {
    //   state.BranchesLoading = true;
    //   state.error = null;
    // },
    // if (action.meta.arg.page === 0) {

    [getBranchesProducts.fulfilled]: (state, action) => {
      state.BranchesLoading = false;
      if (action.meta.arg === 0) {
        state.getBranchesProductsArr = action.payload.offers;
        state.BranchesCatList = action.payload.cats;
        if (action.meta.arg.catId === 3) {
          state.ColtheProducts = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 9) {
          state.ComputerArr = action.payload.offers;
        } else if (action.meta.arg.catId === 16) {
          state.HealthProducts = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 18) {
          state.FurnitureArr = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 55) {
          state.getShoesArr = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 68) {
          state.MobileArr = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 70) {
          state.SleepProducts = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 74) {
          state.ChildrenArr = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 192) {
          state.CarsArr = action.payload.offers;
          state.BranchesCatList = action.payload.cats;
        } else if (action.meta.arg.catId === 196) {
          state.RoomsArr = action.payload.offers;
          // console.log(action);
        } else {
          console.log("action");
        }
      } else {
        state.getBranchesProductsArr = state.getBranchesProductsArr.concat(
          action.payload.offers
        );
      }
      // console.log(action);
      // console.log(action.meta.arg.page);
    },
    [getBranchesProducts.rejected]: (state, action) => {
      state.BranchesLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getMostViewed
    [getMostViewed.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMostViewed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MostViewedArr = action.payload;
      // console.log(action);
    },
    [getMostViewed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    // getHomeHeaders
    [getHomeHeaders.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getHomeHeaders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.HomeHeadersArr = action.payload.headers;
      // console.log(action);
    },
    [getHomeHeaders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // Subcategories
    [Subcategories.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [Subcategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.SubcategoriesArr = action.payload;
    },
    [Subcategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});

export default CategoriesSlice.reducer;
