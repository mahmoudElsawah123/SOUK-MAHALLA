import { baseUrl } from "@/app/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Url } from "@/app";
// import { Url } from "./store";
const Url = "https://souq.deltawy.com";
// const Url = "https://souq.deltawy.com";
//
export const getRegister = createAsyncThunk(
  "auth/getRegister",
  async (regData, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/register`, {
          ...regData,
        })
        .then((res) => res.data);
      console.log(data);
      window.localStorage.setItem("souqLogin", data.Result);
      window.localStorage.setItem("souqAdmin", !data.IsClient);
      window.localStorage.setItem("ClientId", data.id);
      dispatch(LoginDis(data));
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getLogin = createAsyncThunk(
  "auth/getLogin",
  async (logData, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/login`, {
          ...logData,
        })
        .then((res) => res.data);
      // console.log(data);
      // window.localStorage.setItem("SouqClientImage", data.image);
      // window.localStorage.setItem("SouqClientName", data.name);
      // window.localStorage.setItem("SouqClientEmail", data.email);
      window.localStorage.setItem("souqAdmin", data.isAdmin);
      window.localStorage.setItem("souqLogin", data.Result);
      window.localStorage.setItem("ClientId", data.id);
      // window.localStorage.setItem("souqUserLogo", data.logo);
      dispatch(LoginDis(data));
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// http://192.168.0.201:8080/souq/rest/rest.matgar/verify

export const getVerify = createAsyncThunk(
  "auth/getVerify",
  async (mail, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .post(`${baseUrl}/rest/rest.matgar/verify`, {
          ...mail,
        })
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    registerArr: [],
    loginArray: [],
    verifyArray: null,
    LoginSouq: false,
    admin: false,
    clientId: null,
  },
  reducers: {
    LoginDis: (state, action) => {
      state.LoginSouq = action.payload;
      // console.log(action);
    },
  },
  extraReducers: {
    //  Register
    [getRegister.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRegister.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.registerArr = action.payload;
      // console.log(action);
    },
    [getRegister.rejected]: (state, action) => {
      state.isLoading = false;
      // state.error = action.payload;
      // console.log(action);
    },
    //  Login
    [getLogin.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // window.localStorage.setItem("souqLogin", false);
      // window.localStorage.setItem("ClientId", null);
      // console.log(action);
    },
    [getLogin.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // state.loginArray = action.payload;
      // if (action.payload.Result === true) {
      //   // window.localStorage.setItem("souqLogin", action.payload.Result);
      //   window.localStorage.setItem("ClientId", action.payload.id);
      // } else {
      //   // window.localStorage.setItem("souqLogin", action.payload.Result);
      //   window.localStorage.setItem("ClientId", null);
      // }
      // console.log(action);
    },
    [getLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    //  getVerify
    [getVerify.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getVerify.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.verifyArray = action.payload;
      // console.log(action);
    },
    [getVerify.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});
export const { LoginDis } = authSlice.actions;

export default authSlice.reducer;
