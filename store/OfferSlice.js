import { baseUrl } from "@/app/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Url } from "@/app";

// const Url = "http://192.168.0.201:8080/souq";
const Url = "https://souq.deltawy.com";
// http://192.168.0.201:8080/souq/rest/rest.matgar/getLastOffers
// /rest/rest.matgar/getLastOffers
export const getOffers = createAsyncThunk(
  "offer/getoffers",
  async (Pid, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getLastOffers`, {
          id: 0,
          page: Pid,
        })
        .then((res) => res.data);
        // console.log("data" , data);
        return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const OfferSlice = createSlice({
  name: "offer",
  initialState: {
    isLoading: false,
    error: null,
    offersArr: [],
    lastOfferArr: null,
  },
  extraReducers: {
    //  getOffers
    [getOffers.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getOffers.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.offersArr = state.offersArr.concat(
      //   action.payload.offers.filter(
      //     (item) => state.offersArr.indexOf(item) < 0
      //   )
      // );
      if (action.meta.arg === 0) {
        state.lastOfferArr = action.payload.offers;
        state.offersArr = action.payload.offers;
      } else {
        // state.offersArr = Array.from(
        //   new Set(state.offersArr.concat(action.payload.offers))
        // );
        state.offersArr = state.offersArr.concat(action.payload.offers);
      }
      // console.log(action);
    },
    [getOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});

export default OfferSlice.reducer;
