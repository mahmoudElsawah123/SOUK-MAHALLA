"use client"
import styles from "@/app/page.module.css"
import rssImage from '/public/images/rss-svgrepo-com.svg'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { getBranchesProducts } from "@/store/CategoriesSlice";
import { Accordion, AccordionTab } from "primereact/accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EmptyCart from "@/public/images/emptyCart.svg";
import Image from "next/image";
import { useParams, useRouter } from 'next/navigation';
import Link from "next/link";
 import Slider from "react-slick";
import Service from "../Service/Service";
import LastofOffersProducts from "../lastProduct/LastofOffersProducts";
import FooterBar from "../FooterBar/FooterBar";
import BranchesHome from "../Home/BranchesHome/BranchesHome";
import ProductCard from "../ProductCard/ProductCard";
import { baseUrl } from "@/app/baseUrl";
const BranchesProducts = ({params}) => {
  const [page, setPagenumber] = useState(1);
  const [page2, setPagenumber2] = useState(1);
  const dispatch = useDispatch();
  const [expensive, setExpensive] = useState(false);
  const [Range, setRange] = useState([0, 25000]);
  const [sortType, setSortType] = useState("الاقل");
  const { id, name } = useParams();

  const [getBranchesProductsArr, setgetBranchesProductsArr] = useState([]);
  const [BranchesCatList, setBranchesCatList] = useState([]);
  const [Categories, setCategories] = useState(null);
  const [BranchesLoading, setBranchesLoading] = useState(false);

  useEffect(() => {
    if (page === 1) {
      fetch(`${baseUrl}/rest/rest.matgar/searchProduct`,{
        method : 'post',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          "catId": parseFloat(id),
          "userId": parseFloat(window.localStorage.getItem("ClientId")),
          "page": 0,
          "query": "",
        })
      })
        .then((res) => res.json())
        .then((data) => {
         return (
          setgetBranchesProductsArr(data.offers),
          setBranchesCatList(data.cats)
         )
        })
    }
  }, [dispatch]);

  const Count =
    getBranchesProductsArr.length > 0 &&
    [...getBranchesProductsArr].filter(
      (item, e) =>
        parseFloat(item.priceAfter).toFixed(0) >= Range[0] &&
        parseFloat(item.priceAfter).toFixed(0) <= Range[1]
    );

  const ShopData =
    getBranchesProductsArr.length > 0 &&
    [...getBranchesProductsArr]
      .filter(
        (item, e) =>
          parseFloat(item.priceAfter).toFixed(0) >= Range[0] &&
          parseFloat(item.priceAfter).toFixed(0) <= Range[1]
      )
      .sort((a, b) =>
        expensive
          ? parseFloat(b.priceAfter).toFixed(0) -
            parseFloat(a.priceAfter).toFixed(0)
          : parseFloat(a.priceAfter).toFixed(0) -
            parseFloat(b.priceAfter).toFixed(0)
      )
      .map((ele, idx) => {
        const pathName = ele.name.replace(/\s/g, "-");
        const imageID = ele.images[0];
        return (
          // <Col className={styles.Product_col} xs={6} md={3} key={idx}>
            <ProductCard
              key={idx}
              CatName={ele.catName}
              ProductName={ele.name}
              priceBefore={ele.priceBefore}
              priceAfter={ele.priceAfter}
              image={imageID}
              Rate={ele.rate}
              id={ele.id}
              pathName={pathName}
              matgarId={ele.matgarId}
              MarketImage={ele.matgarLogo}
              matgarName={ele.matgarName}
              Goto={"product"}
            />
          // </Col>
        );
      });

  // const CatgeoriesSelect =
  //   BranchesCatList.length > 0 &&
  //   BranchesCatList.map((ele, idx) => {
  //     const pathName = ele.name.replace(/\s/g, "-");
  //     return (
  //       <div key={idx} className={styles.Cat_Filter}>
  //         <Link
  //           // href={`/shop/${ele.id}/${pathName}`}
  //           href={`/category/${ele.id}/${pathName}`}

  //           onClick={() => {
  //             setPagenumber(1);
  //             window.scrollTo({
  //               top: 0,
  //               left: 100,
  //               behavior: "instant",
  //             });
  //           }}
  //         >
  //           {ele.name}
  //           <div className={styles.img_container}>
  //             <LazyLoadImage
  //               src={`https://souq.deltawy.com/imag?id=${ele.icon}`}
  //               alt={ele.name}
  //               effect="blur"
  //             />
  //           </div>
  //         </Link>
  //         {/* <button
  //           onClick={() => {
  //             dispatch(getNestedBranch(ele.id));
  //           }}
  //         >
  //           {ele.name}
  //         </button> */}
  //       </div>
  //     );
  //   });
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    centerPadding: "10px",
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 508,
        settings: {
          slidesToShow: 3,
    dots: true,
    slidesToScroll: 7,
  },
      },
      {
        breakpoint: 370,
        settings: {
          dots: true,
    slidesToShow: 3,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 290,
        settings: {
          dots: true,
    slidesToShow: 2,
          slidesToScroll: 7,
        },
      },
    ],
  };

  const TestNav = (
    <Accordion multiple>
      {/* {BranchesCatList.length > 0 && (
        <AccordionTab header="التصنيفات">
          <div className="main-container-Filter shop-cat">
            {CatgeoriesSelect}
          </div>
        </AccordionTab>
      )} */}
      <AccordionTab header="السعر">
        <div className={styles.accContainer}>
          <div className={styles.slider_demo}>
            <div className={styles.slider_header_container}>
              <span>{Range[1]} ج</span>
              <span>{Range[0]} ج</span>
            </div>
            {/* <Slider
              max={25000}
              min={0}
              value={Range}
              onChange={(e) => setRange(e.value)}
              range
            /> */}
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  );



  return (
    <>
     
      {getBranchesProductsArr.length > 0 ? (
        <Row>
         
          <Col md={12}>        
          

          <div className={styles.ShopPage}>

          <Slider {...settings} className="BranchesCatList"  >
     {   
    BranchesCatList.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx} className={styles.Cat_Filter}>
          <Link
            // href={`/shop/${ele.id}/${pathName}`}
            href={`/category/${ele.id}/${pathName}`}
            className="a_BranchesCatList"
            onClick={() => {
              setPagenumber(1);
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            <div className={styles.img_container} id="img_container_BranchesCatList">
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${ele.icon}`}
                alt={ele.name}
                effect="blur"
              />
            </div>
            {ele.name}

          </Link>
          {/* <button
            onClick={() => {
              dispatch(getNestedBranch(ele.id));
            }}
          >
            {ele.name}
          </button> */}
        </div>
      )
    }) }
    </Slider>  

            <div className={styles.SortBy}>
            <div className={styles.Number_of_products}>
              <h5>عدد المنتجات : </h5>
              <span>{getBranchesProductsArr.length > 0 ? Count.length : "0"}</span>
            </div>
            <div className={styles.Number_of_products}>
              <Link href={`/${params.id[0]}.xml`}>
              <Image src={rssImage} width={40} height={40} alt="rss"/>
              </Link>
            </div>
            <div className={`${styles.SortDiv} ${styles.Number_of_products}`} >
              <h5>ترتيب حسب : </h5>
              <span className={styles.typeSelected}>
                {sortType}
                <div className={styles.SortByDrop}>
                  <p
                    onClick={() => {
                      setSortType("الاعلى");
                      setExpensive(true);
                    }}
                  >
                    الاعلى
                  </p>
                  <p
                    onClick={() => {
                      setSortType("الاقل");
                      setExpensive(false);
                    }}
                  >
                    الاقل
                  </p>
                </div>
              </span>
            </div>
          </div>
          </div>
            <Container fluid>
              <BranchesHome Categories={Categories} />
            <div className="ShopPage_ProductCard">
               {ShopData} 
               </div>
            </Container>
          </Col>
        </Row>
      ) : (
        <div className={styles.CartEmpty}>
          <div className={styles.card_container_empty}>
            <Image src={EmptyCart} effect="blur" alt="empty" />
          </div>
          <h3> لا يوجد منتجات الان !</h3>
          <p>تصفح فئاتنا واكتشف أفضل عروضنا</p>
        </div>
      )}


<Service />
   <LastofOffersProducts />
    <FooterBar />
    </>
  );
};

export default BranchesProducts;
