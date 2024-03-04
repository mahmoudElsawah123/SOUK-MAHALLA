// ControlPanalSlice

import { baseUrl } from "@/app/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const Url = "http://192.1z68.0.201:8080/souq";
const Url = "https://souq.deltawy.com";
// http://192.168.0.201:8080/souq/rest/rest.matgar/getUserInfo

// getUserInfo
export const getUserInfo = createAsyncThunk(
  "controlpanal/getUserInfo",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getUserInfo`, {
          uid: id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// UpdateUserInfo
export const UpdateUserInfo = createAsyncThunk(
  "controlpanal/UpdateUserInfo",
  async (userInfo, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/updateUserInfo`, {
          ...userInfo,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// getMatgarServices
export const getMatgarServices = createAsyncThunk(
  "controlpanal/getMatgarServices",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgarservice/getMatgarServices`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const SaveService = createAsyncThunk(
  "controlpanal/SaveService",
  async (Services, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgarservice/saveService`, {
          ...Services,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// UpdateService
export const UpdateService = createAsyncThunk(
  "controlpanal/UpdateService",
  async (Services, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgarservice/updateService`, {
          ...Services,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// getMatgarProducts
export const getMatgarProducts = createAsyncThunk(
  "controlpanal/getMatgarProducts",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgarProducts`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// AddProduct
export const AddProduct = createAsyncThunk(
  "controlpanal/AddProduct",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/addProduct`, {
          ...product,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


export const saveLogo = createAsyncThunk(
  "controlpanal/saveLogo",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/saveLogo`, {
          ...product,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// getLogo
export const getLogo = createAsyncThunk(
  "controlpanal/getLogo",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getLogo`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// -----------------------------------------------

export const saveCover = createAsyncThunk(
  "controlpanal/saveCover",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/saveCoverImage`, {
          ...product,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// getCover
export const getCover = createAsyncThunk(
  "controlpanal/getCover",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getCover`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// -----------------------------------------------
// GetMatgerCats
export const GetMatgerCats = createAsyncThunk(
  "controlpanal/GetMatgerCats",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.category/uc/`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// GetMatgerOffers
export const GetMatgerOffers = createAsyncThunk(
  "controlpanal/GetMatgerOffers",
  async (offers, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgarOffers`, {
          ...offers,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// AddOffer
export const AddOffer = createAsyncThunk(
  "controlpanal/AddOffer",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.product/saveOffer`, {
          ...product,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// etMatgarInfo
export const getMatgarInfo = createAsyncThunk(
  "controlpanal/getMatgarInfo",
  async (uid, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgarInfo`, {
          uid,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// get Matgar Type
export const getMatgarType = createAsyncThunk(
  "controlpanal/getMatgarType",
  async (uid, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgarType`, {
          uid,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateMatgarInfo = createAsyncThunk(
  "controlpanal/updateMatgarInfo",
  async (upData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/updateMatgarInfo`, {
          ...upData,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// getUserImages
export const getUserImages = createAsyncThunk(
  "controlpanal/getUserImages",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getUserImages`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// saveImages
export const saveImages = createAsyncThunk(
  "controlpanal/saveImages",
  async (upData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/saveImages`, {
          ...upData,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// saveMatgarType
export const saveMatgarType = createAsyncThunk(
  "controlpanal/saveMatgarType",
  async (upData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/saveMatgarType`, {
          ...upData,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// getMatgarOrders
export const getMatgarOrders = createAsyncThunk(
  "controlpanal/getMatgarOrders",
  async (upData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getMatgarOrders`, {
          ...upData,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// getOrderDetails
export const getOrderDetails = createAsyncThunk(
  "controlpanal/getOrderDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getOrderDetails`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// getCustomerOrdersJson
export const getCustomerOrdersJson = createAsyncThunk(
  "controlpanal/getCustomerOrdersJson",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getCustomerOrdersJson`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// getActiveCustomerrders
export const getActiveCustomerrders = createAsyncThunk(
  "controlpanal/getActiveCustomerrders",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getActiveCustomerrders`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// getjsonStrings
export const getjsonStrings = createAsyncThunk(
  "controlpanal/getjsonStrings",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/getjsonStrings`, {
          id,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// makeComplain
export const makeComplain = createAsyncThunk(
  "controlpanal/makeComplain",
  async (obj, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/makeComplain`, {
          ...obj,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const ControlPanalSlice = createSlice({
  name: "controlpanal",
  initialState: {
    isLoading: false,
    error: null,
    userInfo: null,
    MatgarProductsArr: null,
    MatgarServicesArr: null,
    MatgerCatsArr: null,
    MatgerOffersArr: null,
    MatgarInfoArr: null,
    MatgarTypeArr: null,
    MapLocation: null,
    UserImagesArr: null,
    MatgarOrdersArr: null,
    OrderDetailsArr: null,
    CustomerOrdersJsonArr: null,
    ActiveCustomerrdersArr: null,
    MatgerLogoArr: null,
    MatgerCoverArr: null,
    JsonStringsArr: null,
  },

  reducers: {
    Logout: (state, action) => {
      window.localStorage.setItem("souqLogin", "false");
      window.localStorage.setItem("souqAdmin", null);
      window.localStorage.setItem("ClientId", "0");
      window.localStorage.setItem("souqUserName", "");
      window.localStorage.setItem("souqUserEmail", "");
      window.localStorage.setItem("souqUserPhone", "");
      window.localStorage.setItem("souqUseraddress", "");
      window.localStorage.setItem("souqUserLogo", "");
      window.localStorage.setItem("souqUserCover", "");
      state.userInfo = null;
      state.ActiveCustomerrdersArr = null;
      state.CustomerOrdersJsonArr = null;
      state.JsonStringsArr = null;
      state.MatgarOrdersArr = null;
      state.OrderDetailsArr = null;
      state.MatgarProductsArr = null;
      state.MatgarServicesArr = null;
      state.MatgerCatsArr = null;
      state.MatgerOffersArr = null;
      state.MatgarInfoArr = null;
      state.MatgarTypeArr = null;
      state.MapLocation = null;
      state.UserImagesArr = null;
      state.MatgerLogoArr = null;
      state.MatgerCoverArr = null;

    },
    setMapLocation: (state, action) => {
      state.MapLocation = action.payload;
    },
  },
  extraReducers: {
    // getUserInfo
    [getUserInfo.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      // console.log(action);
    },
    [getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getUserInfo
    [UpdateUserInfo.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [UpdateUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.userInfo = action.payload;
      // console.log(action);
    },
    [UpdateUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getMatgarServices
    [getMatgarServices.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMatgarServices.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgarServicesArr = action.payload.data;
      // console.log(action);
    },
    [getMatgarServices.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // SaveService
    [SaveService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [SaveService.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MatgarServicesArr = action.payload;
      // console.log(action);
    },
    [SaveService.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // UpdateService
    [UpdateService.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [UpdateService.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MatgarServicesArr = action.payload;
      // console.log(action);
    },
    [UpdateService.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getMatgarProducts
    [getMatgarProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMatgarProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgarProductsArr = action.payload.offers;
      // console.log(action);
    },
    [getMatgarProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // AddProduct
    [AddProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [AddProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MatgarProductsArr = action.payload.offers;
      // console.log(action);
    },
    [AddProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getLogo
    [getLogo.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getLogo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgerLogoArr = action.payload;
      // console.log(action);
    },
    [getLogo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

// ----------------------------------------------------
     // getCover
     [getCover.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCover.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgerCoverArr = action.payload;
      // console.log(action);
    },
    [getCover.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

// ----------------------------------------------------

    // GetMatgerCats
    [GetMatgerCats.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [GetMatgerCats.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgerCatsArr = action.payload;
      // console.log(action);
    },
    [GetMatgerCats.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // GetMatgerOffers
    [GetMatgerOffers.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [GetMatgerOffers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgerOffersArr = action.payload.offers;
      // console.log(action);
    },
    [GetMatgerOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    // AddOffer
    [AddOffer.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [AddOffer.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MatgerOffersArr = action.payload.offers;
      // console.log(action);
    },
    [AddOffer.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getMatgarInfo
    [getMatgarInfo.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMatgarInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgarInfoArr = action.payload;
      // console.log(action);
    },
    [getMatgarInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },


    // getMatgarType
    [getMatgarType.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMatgarType.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgarTypeArr = action.payload;
      // console.log(action);
    },
    [getMatgarType.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },


    // saveImages
    [saveImages.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [saveImages.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.MatgarInfoArr = action.payload.offers;
      // console.log(action);
    },
    [saveImages.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getUserImages
    [getUserImages.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUserImages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.UserImagesArr = action.payload.data;
      // console.log(action);
    },
    [getUserImages.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getMatgarOrders
    [getMatgarOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMatgarOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MatgarOrdersArr = action.payload.data;
      // console.log(action);
    },
    [getMatgarOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getOrderDetails
    [getOrderDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.OrderDetailsArr = action.payload;
      // console.log(action);
    },
    [getOrderDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },

    // getCustomerOrdersJson
    [getCustomerOrdersJson.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getCustomerOrdersJson.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CustomerOrdersJsonArr = action.payload.data;
      // console.log(action);
    },
    [getCustomerOrdersJson.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    // getActiveCustomerrders
    [getActiveCustomerrders.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getActiveCustomerrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ActiveCustomerrdersArr = action.payload;
      console.log(action);
    },
    [getActiveCustomerrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    // getjsonStrings
    [getjsonStrings.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getjsonStrings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.JsonStringsArr = action.payload.data;
      console.log(action);
    },
    [getjsonStrings.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});
export const { Logout, setMapLocation } = ControlPanalSlice.actions;

export default ControlPanalSlice.reducer;
