import { baseUrl } from "@/app/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Url } from "@/app";

// const Url = "http://192.168.0.201:8080/souq";
const Url = "https://souq.deltawy.com";

export const getMarkets = createAsyncThunk(
  "Markets/getMarkets",
  async (Pid, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgars`, {
          page: Pid,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getMarketsDetails = createAsyncThunk(
  "Markets/getMarketsDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgarDetails/`, {
          id,
          page: 0,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const MarketsSlice = createSlice({
  name: "Markets",
  initialState: {
    isLoading: false,
    MarketLoading: false,
    error: null,
    MarketsArr: [],
    MarketDetialsArr: null,
    MarketNum: 0,
  },

  reducers: {
    Increes: (state, action) => {
      state.MarketNum = 1;
      // console.log(action);
    },
  },
  extraReducers: {
    //  getMarkets
    [getMarkets.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMarkets.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.meta.arg === 0) {
        state.MarketsArr = action.payload.matgars;
      } else {
        state.MarketsArr = state.MarketsArr.concat(action.payload.matgars);
      }
      // console.log(action);
    },
    [getMarkets.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    //  getMarketsDetails
    [getMarketsDetails.pending]: (state, action) => {
      state.MarketLoading = true;
      state.error = null;
    },
    [getMarketsDetails.fulfilled]: (state, action) => {
      state.MarketLoading = false;
      state.MarketDetialsArr = action.payload;
    },
    [getMarketsDetails.rejected]: (state, action) => {
      state.MarketLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});
export const { Increes } = MarketsSlice.actions;

export default MarketsSlice.reducer;
