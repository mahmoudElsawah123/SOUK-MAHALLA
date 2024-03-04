"use client"
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import CategoriesSlice from "./CategoriesSlice";
import ControlPanalSlice from "./ControlPanalSlice";
import extraSlice from "./extraSlice";
import MarketsSlice from "./MarketsSlice";
import OfferSlice from "./OfferSlice";
import ShopSlice from "./ShopSlice";

export default configureStore({
  reducer: {
    CategoriesSlice,
    ShopSlice,
    OfferSlice,
    MarketsSlice,
    authSlice,
    ControlPanalSlice,
    extraSlice,
  },
});
