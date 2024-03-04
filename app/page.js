"use client"
import { useEffect, useState } from "react";
import { getMainCat, getMostViewed } from "../store/CategoriesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import LastofOffersProducts from "./components/lastProduct/LastofOffersProducts";
import FooterBar from "./components/FooterBar/FooterBar";

export default function App() {
  const dispatch = useDispatch();
  const [Loading  , setLoading] = useState(true)
  const { Categories } = useSelector((state) => state.CategoriesSlice);
 
  useEffect(() => {
    dispatch(getMainCat(0));
    dispatch(getMostViewed())
  }, [dispatch]);

   useEffect(()=>{
     if(Categories){
      setLoading(false)
     }
   }, [Categories])
  return (
   <>

      {/* {Loading ? <div style={{backgroundColor : 'red' , height : '100vh'}}>loading</div>:
        <>
        <Home/>
         <Service />
        <LastofOffersProducts />
         <FooterBar /> 
        </>
       } */}

       <>
        <Home/>
         <Service />
        <LastofOffersProducts />
         <FooterBar /> 
        </>


   </>
  )
}
