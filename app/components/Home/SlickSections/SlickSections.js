"use client"
import React, { useEffect } from "react";
import { Col, Container, Row, TabPane } from "react-bootstrap";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/app/page.module.css"
import Link from "next/link";
import { getMarkets } from "@/store/MarketsSlice";
import { getMainCat } from "@/store/CategoriesSlice";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import { baseUrl } from "@/app/baseUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import ProductCard from "../../ProductCard/ProductCard";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
       className={`${styles.Arrow} ${styles.NextArrow}`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.Arrow} ${styles.PrevArrow}`} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};


const SlickSections = ({Categories}) => {
  const [ProductData , setProductData] = useState([])
  const [CatData , setCatData] = useState([])

  const [ProductNumber , setProductNumber] = useState(0)
  const getCatProduct = useSelector((item)=>item.CategoriesSlice.ColtheProducts);
   const [GetParams , setGetParams] = useState()
   const [filterId , setFilterId] = useState(null)
   const [sliderNumber , setSliderNumber] = useState(1)
  const [getChangeData , setGetChangeData] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarkets(0));
    dispatch(getMainCat(0));
  }, [dispatch]);

 
  const [categories, setCategories] = useState(null);  


  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 200,
    centerPadding: "60px",
    // autoplay: true,
    // autoplaySpeed: 3000,
    // cssEase: "linear",
    swipeToSlide: true,
    initialSlide: 0,
          slidesToShow: 6,
          rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesResponse = await fetch(`${baseUrl}/rest/rest.category/getCatProducts`, {
        method: 'POST',
        body: JSON.stringify({
          "uid": 4,
          "id": GetParams,
          "page": 0
        }),
        cache: 'no-store',
        headers: {
          "Access-Control-Allow-Headers": "X-Custom-Header, Upgrade-Insecure-Requests",
          'Content-Type': 'application/json',
        }
      });
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);


  useEffect(() => {
    if (Categories) {
      const fetchProductsForCategory = async (catId) => {
        const res = await fetch(`${baseUrl}/rest/rest.matgar/getCategoryDetailsLite`, {
          method: 'POST',
          body: JSON.stringify({
            "catId": catId,
            "userId": 0,
            "pageId": 0
          }),
          cache: 'no-store',
          headers: {
            "Access-Control-Allow-Headers": "X-Custom-Header, Upgrade-Insecure-Requests",
            'Content-Type': 'application/json',
          }
        });
        const data = await res.json();
        setProductData(prevProductData => [...prevProductData, ...data.products]);
        setCatData(prevCatData => [...prevCatData, data]);
      };

      Categories.cats.forEach((category) => {
        fetchProductsForCategory(category.id);
      });
    }
  }, [Categories]);



   return (
    <>
 
{/* 
    <InfiniteScroll
      dataLength={ ProductData.length}  
      next={fetchData}
      hasMore={true}
    > */}
              <Container>
      {
        CatData.length > 0 ? CatData.slice(0, 5)
                          .map((ele, idx) => {
                            return (
                              <div key={idx} className="row d-flex align-items-center text-center">
      
                               <div className="col-md-12 col-12">
                              
                               <div  style={{backgroundColor : '#f9f9f9', padding : '20px 0px', margin : '50px 0px', display : 'flex', justifyContent : 'space-between'}} className="mb-3">
                               <div>
                               <Link href={''} style={{padding : '0px 10px'}}>{ele.name}</Link>
                               </div>
                                <div style={{display : 'flex'}}>
                                {ele.cats.map((item)=>{
                                  return (
                                    <>
                                     <div style={{margin : '0px 20px'}}>
                                        <Link href={`/category/${item.id}/${item.name}`}>{item.name}</Link>
                                     </div>
                                    </>
                                  )
                                })}
                                </div>
                               </div>
                               {/* slidesToShow={ ProductData.length ==  1 ? 1 : ProductData.length == 2 ? 2 : ProductData.length == 3 ? 3 : 6} */}
                               <LazyLoad height={"400px"} once>
                                  <Slider {...settings} >
                                   {ProductData.filter((items)=> items.parentCat == ele.id)
                                   .map((item , id)=>{
                                    return (
                                      <Link href={`product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={id}>
                                      <ProductCard
                                            key={id}
                                            CatName={item.catName}
                                            ProductName={item.name}
                                            image={item &&item.images[0]}
                                            Rate={5}
                                            id={item.id}
                                            matgarId={item.matgarId}
                                            pathName={item.name}
                                            MarketImage={item &&item.matgarLogo}
                                            matgarName={item.matgarName}
                                            // MarketImage={item &&item.images[0]}
                                            Goto={"product"}
                                            className={styles.Slick_Product}
                                            

                                          />
                                      </Link>
                                    )
                                   })}
                                   
                                   
                                 </Slider>
     </LazyLoad>
                           
                      
                               </div>
                              </div>
                            );
                          })
                      : null
       }
      </Container>
    {/* </InfiniteScroll> */}
    <div >
    

</div>
    </>
  );
};

export default SlickSections;


















// useEffect(()=>{
//   fetch(`${baseUrl}/rest/rest.category/getCatProducts`,{
//     method : 'POST',
//     body : JSON.stringify({
//       "uid":4,
//       "id":GetParams,
//       "page":0
//     }),
//     cache : 'no-store',
//     headers : {
//       "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
//       'Content-Type': 'application/json',
//     } 
//   }).then((res)=> res.json())
//   .then((data)=> setGetChangeData([...getChangeData , data]))
// // -----------------------------------------------------------------------------
// },[GetParams])



// const num = Categories? Categories.cats.map((ele)=> ele.id) : [];
// useEffect(()=>{

// const featchApiProduct = async()=>{
  
//   const res = await fetch(`${baseUrl}/rest/rest.matgar/getCategoryDetailsLite`,{
//     method : 'POST',
//     body : JSON.stringify({
//       "catId":num.length > 0 ? num[ProductNumber + 1] :  3,
//       "userId":0,
//       "pageId":0
//     }),
//     cache : 'no-store',
//     headers : {
//       "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
//       'Content-Type': 'application/json',
//     } 
//   })
//   const data = await res.json();
//   setProductData(data.products)
//   setCatData([data])
// }
// featchApiProduct()
// },[])


// const fetchData = ()=>{
// setProductNumber(ProductNumber + 1);
// const featchApiProduct = async()=>{
//   const res = await fetch(`${baseUrl}/rest/rest.matgar/getCategoryDetailsLite`,{
//     method : 'POST',
//     body : JSON.stringify({
//       "catId": num.length > 0 ? num[ProductNumber + 1] :  3 ,
//       "userId":0,
//       "pageId":0
//     }),
//     cache : 'no-store',
//     headers : {
//       "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
//       'Content-Type': 'application/json',
//     } 
//   })
//   const data = await res.json();
//   setProductData(ProductData.concat(data.products))
//   setCatData([...CatData , data])

// }
// featchApiProduct()
// }

// <InfiniteScroll
//     dataLength={ ProductData.length}  
//     next={fetchData}
//     hasMore={true}
//   >
//             <Container>
//     {
//       CatData.length > 0 ? CatData
//                         .map((ele, idx) => {
//                           return (
//                             <div key={idx} className="row d-flex align-items-center text-center">
    
//                              <div className="col-md-12 col-12">
                            
//                              <div  style={{backgroundColor : '#f9f9f9', padding : '20px 0px', margin : '50px 0px', display : 'flex', justifyContent : 'space-between'}} className="mb-3">
//                              <div>
//                              <Link href={''} style={{padding : '0px 10px'}}>{ele.name}</Link>
//                              </div>
//                               <div style={{display : 'flex'}}>
//                               {ele.cats.map((item)=>{
//                                 return (
//                                   <>
//                                    <div style={{margin : '0px 20px'}}>
//                                       <Link href={`/category/${item.id}/${item.name}`}>{item.name}</Link>
//                                    </div>
//                                   </>
//                                 )
//                               })}
//                               </div>
//                              </div>
//                              {/* slidesToShow={ ProductData.length ==  1 ? 1 : ProductData.length == 2 ? 2 : ProductData.length == 3 ? 3 : 6} */}
//                                 <Slider {...settings} >
//                                  { ProductData.filter((items)=> items.parentCat == ele.id)
//                                  .map((item , id)=>{
//                                   return (
//                                     <Link href={`product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={id}>
//                                     <ProductCard
//                                           key={id}
//                                           CatName={item.catName}
//                                           ProductName={item.name}
//                                           image={item &&item.images[0]}
//                                           Rate={5}
//                                           id={item.id}
//                                           matgarId={item.matgarId}
//                                           pathName={item.name}
//                                           MarketImage={item &&item.matgarLogo}
//                                           matgarName={item.matgarName}
//                                           Goto={"product"}
//                                           className={styles.Slick_Product}
                                          

//                                         />
//                                     </Link>
//                                   )
//                                  })}
                                 
                                 
//                                </Slider>
                         
                    
//                              </div>
//                             </div>
//                           );
//                         })
//                     : null
//      }
//     </Container>
//   </InfiniteScroll>