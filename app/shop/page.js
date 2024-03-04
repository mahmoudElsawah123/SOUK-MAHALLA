"use client";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import map from "@/public/map.png";
import img2 from "@/public/images/images.png";
import face from "@/public/images/face.png";
import ins from "@/public/images/instegram.png";
import twiter from "@/public/images/twiter.png";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { getSearchResult } from "../../store/ShopSlice";
 import { Accordion, AccordionTab } from "primereact/accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
 
 // import { Helmet } from "react-helmet";
import styles from "../page.module.css";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import BranchesHome from "@/app/components/Home/BranchesHome/BranchesHome";
import SearchHesder from "@/app/components/SearchHesder/SearchHesder";
import Service from "@/app/components/Service/Service";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import Link from "next/link";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import { getMainCat } from "@/store/CategoriesSlice";
import Slider from "react-slick";
const ShopProducts = () => {
  const dispatch = useDispatch();

 
  const [page, setPagenumber] = useState(1);
  const { searchCharInput, SearchresultArr } = useSelector(
    (state) => state.ShopSlice
  );
  const { Categories } = useSelector((state) => state.CategoriesSlice);
  const [expensive, setExpensive] = useState(false);
  const [Range, setRange] = useState([0, 10000]);
  const [sortType, setSortType] = useState("الاقل");
  const FetchData = () => {
    setPagenumber((state) => state + 1);  
    const data = {
      catId: 0,
      userId: parseFloat(window.localStorage.getItem("ClientId")),
      page: page + 1,  
      query: searchCharInput,
    };
    dispatch(getSearchResult(data));  
  };
  
  if (!SearchresultArr) {
    return (
     null
    );
  }
  

  const Counter =
    SearchresultArr.length > 0 &&
    [...SearchresultArr].filter(
      (item, e) =>
        parseFloat(item.priceAfter).toFixed(0) >= Range[0] &&
        parseFloat(item.priceAfter).toFixed(0) <= Range[1]
      // &&
      // item.name.toLowerCase().includes(search.toLowerCase())
    );
     
    
    
  // const ShopSchema =
  //   SearchresultArr.length > 0 &&
  //   SearchresultArr.slice(0, 20).map((ele) => {
  //     return (
  //       <>
  //         {JSON.stringify({
  //           "@type": "Product",
  //           image: `http://souq.deltawy.com//imag?id=${ele.images[0]}`,
  //           url: ele.url,
  //           name: ele.name,
  //           offers: {
  //             "@type": "Offer",
  //             price: ele.price,
  //           },
  //         })}
  //       </>
  //     );
  //   });


  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 358,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
 

  const ShopData =
    SearchresultArr.length > 0 &&
    [...SearchresultArr]
      // .filter(
      //   (item, e) =>
      //     parseFloat(item.priceAfter).toFixed(0) >= Range[0] &&
      //     parseFloat(item.priceAfter).toFixed(0) <= Range[1]
      // )
      // .sort((a, b) =>
      //   expensive
      //     ? parseFloat(b.priceAfter).toFixed(0) -
      //       parseFloat(a.priceAfter).toFixed(0)
      //     : parseFloat(a.priceAfter).toFixed(0) -
      //       parseFloat(b.priceAfter).toFixed(0)
      // )
      .map((ele, idx) => {
        const pathName = ele.name.replace(/\s/g, " ");
        const imageID = ele.images[0];
        return (
          // <div className={styles.ShopPage} >

          // <Col className={styles.Product_col}  md={3} xs={6} key={idx} >
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
            Goto={"product"}
          />
          // </Col>
          // </div>
        );
      });
  const CatgeoriesSelect =
    Categories &&
    Categories.cats.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx} className={styles.Cat_Filter}>
          <Link
            href={`/category/${ele.id}/${pathName}`}
            // href={`/shop/${ele.id}/${pathName}`}

            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            {ele.name}
            <div className={styles.img_container}>
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${ele.icon}`}
                alt={ele.name}
                effect="blur"
              />
            </div>
          </Link>
        </div>
      );
    });

 

  return (
    <div className="ShopPage_CON">
    {/* <Slider {...settings}>{CatgeoriesSelect}</Slider> */}
      <div className={styles.ShopPage}>
        <Row className="row_shop">
           
          <Col md={12}>
            <div className={styles.SortBy}>
              <div className={styles.Number_of_products}>
                <h5>عدد المنتجات : </h5>
                <span>{SearchresultArr.length > 0 ? Counter.length : "0"}</span>
              </div>
              <div className={`${styles.SortDiv} ${styles.Number_of_products}`}>
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
            {/* <Container> */}
          

            <BranchesHome Categories={Categories} />
            <InfiniteScroll
              dataLength={SearchresultArr.length}
              next={FetchData}
              hasMore={true}
            loader={
            <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            </div>
            }
            >
              <div className="ShopPage_ProductCard">
                {ShopData}
              </div>
            </InfiniteScroll>
            {/* </Container> */}
          </Col>
        </Row>
      </div>

      <Service />
      <LastofOffersProducts />

      <FooterBar />
    </div>
  );
};

export default ShopProducts;





{/* <div className="ShopPage_CON">
      <div className="hero">
        <div className="hero_contant">
          <Container>
            <div className="hero_mask">
            <Row>
              <Col md={9}>
                <div className="hero_contant_img">
                <div className="hero_img"><Image src={img2} alt=""></Image></div>
                  <div className="hero_contant_2">
                    <h3>زارا للملابس الحريمي</h3>
                    <p>
                      فيفر لملابس المحجبات الكاجوال ، خبره من 37 عاما في مجال
                      ملابس المحجبات <br />
                      أجود الخامات المستورده والبراندات التركي{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <h4>   كن على تواصل معنا</h4>
                <div className="hero_flex_icon">
                  <Image src={face} alt=""></Image>
                  <Image src={ins} alt=""></Image>
                  <Image src={twiter} alt=""></Image>
                </div>
              </Col>
            </Row>
        </div>
          </Container>
        </div>
      </div>
      <div className={styles.ShopPage}>
        <Row className="row_shop">
          <Col md={3}>
            <div className={styles.sticky_cat_filt}>
              
              {TestNav}
               <div className="details" >
                  <a href="#">
                  <FaPhoneVolume />
                  </a>
                  <a href="#">
                  <FaEnvelope />
                  </a>
                  <a href="#">
                  <FaLocationDot />
                  </a>
               </div>
              <Link href={""} target="_blank" className="map_link">
                <Image src={map} alt=""></Image>
              </Link>
               
 
              <div className="  form_card  cardd">
              <div className="card_header">
                <h1 className="form_heading"> المعرض</h1>
              </div>
              
            </div>
            
            <form className="form form_card cardd" onSubmit={handleSubmit}>
              <div className="card_header">
                <h1 className="form_heading">للتواصل</h1>
              </div>
              <div className="field">
                <input
                  className="input"
                  name="username"
                  type="text"
                  placeholder="الموضوع"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  className="input"
                  name="user_password"
                  type="password"
                  placeholder="البريد الالكتروتى"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <textarea
                className="autoExpand"
                rows="3"
                data-min-rows="3"
                placeholder="الرساله"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoFocus
              ></textarea>
              <div className="field">
                <button type="submit" className="button">
                  ارسال
                </button>
              </div>
            </form>
                       </div>
          </Col>
          <Col md={9}>
            <div className={styles.SortBy}>
              <div className={styles.Number_of_products}>
                <h5>عدد المنتجات : </h5>
                <span>{SearchresultArr.length > 0 ? Counter.length : "0"}</span>
              </div>
              <div className={`${styles.SortDiv} ${styles.Number_of_products}`}>
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
            
          

            <BranchesHome Categories={Categories} />
            <InfiniteScroll
              dataLength={SearchresultArr.length}
              next={FetchData}
              hasMore={true}
            >
              <div className="ShopPage_ProductCard">
                {ShopData}
              </div>
            </InfiniteScroll>
          </Col>
        </Row>
      </div>

      <Service />
      <LastofOffersProducts />

      <FooterBar />
    </div> */}