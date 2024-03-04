"use client"
import React, { useEffect, useState } from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResult, searchChar } from "@/store/ShopSlice";
import styles from "@/app/page.module.css";
import Link from "next/link";
const SearchHesder = (res) => {
  const { SearchresultArr, searchCharInput } = useSelector(
    (state) => state.ShopSlice
  );
  const [search, setSearch] = useState(searchCharInput);
  const [searchActive, setSearchActive] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(getSearchResult());
  //   // dispatch(searchChar());   
  // }, [dispatch]);


  useEffect(()=>{
    if(search.length > 0){
      dispatch(searchChar(search));
      setSearchActive(true);
      SearchData();
    }else{
      null
    }
  },[dispatch, search])


  const SearchData = () => {
    if (search.length >= 1) {
      const ID = parseInt(window.localStorage.getItem("ClientId"));
      const data = {
        catId: 0,
        userId: ID,
        page: 0,
        query: search,
      };
      dispatch(getSearchResult(data));
    } else {
      const ID = parseInt(window.localStorage.getItem("ClientId"));
      const data = {
        catId: 0,
        userId: ID,
        page: 0,
        query: "",
      };
      dispatch(getSearchResult(data));
    }
  };

  const SearchResult =
    SearchresultArr.length > 0 &&
    searchActive === true &&
    SearchresultArr.slice(0, 5).map((ele, idx) => {
      return (
        <div
          key={idx}
          className={styles.search_Product}
          onClick={() => {
            dispatch(searchChar(ele.name));
            setSearch(ele.name);
            // navigate(`/shop/`);
            setSearchActive(false);
          }}
        >
          <Link href={"/shop"} >
          <h5>{ele.name}</h5>
          <div className={styles.image_card}>
            <LazyLoadImage
              effect="blur"
              src={`https://souq.deltawy.com/imag?id=${ele.images[0]}`}
              alt={ele.name}
            />
          </div>
          </Link>
        </div>
      );
    });

  return (
    <div className={styles.HomeHeader} style={{width : '100%', border : '2px solid #556e8c'  , borderRadius:'5px'}}>
        <div  className={styles.search_section}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="ابحث عن المنتجات و العلامات التجارية و الفئات"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            
            }}
          />
          <button
            type="submit"
            htmlFor="search"
            onClick={(e) => {
              e.preventDefault();
              dispatch(searchChar(search));
              setSearchActive(false);
              // navigate(`/shop/`);
            }}
            className={styles.byt}
          >
           <Link  href={"/shop"} ><BsSearch style={{color : '#274160'}}/></Link>
          </button>
          {search?.length > 0 ? (
            <div  className={styles.Search_result}>{SearchResult}</div>
          ) : null}
        </div>
    </div>
  );
};

export default SearchHesder;
