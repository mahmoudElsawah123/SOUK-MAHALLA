"use client"
import React  from "react";
import { useSelector } from "react-redux";
// import BranchesHome from "./BranchesHome/BranchesHome";
import HomeHeader from "./HomeHeader/HomeHeader";
import LazyLoad from "react-lazyload";
import SlickSections from "./SlickSections/SlickSections";
import MatgersHome from "./MatgersHome/MatgersHome";



const Home = () => {
  const  {Categories}  = useSelector((state) => state.CategoriesSlice);
  return (
    <div>
      
      <HomeHeader />
 
     <MatgersHome />

     <LazyLoad height={"500px"} once>
      <SlickSections Categories={Categories}/>
     </LazyLoad>

    </div>
  );
};

export default Home;
