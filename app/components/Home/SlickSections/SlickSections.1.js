"use client";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { getMarkets } from "@/store/MarketsSlice";
import { getMainCat } from "@/store/CategoriesSlice";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import { baseUrl } from "@/app/baseUrl";
import { SampleNextArrow, SamplePrevArrow } from "./SlickSections";

export const SlickSections = ({ Categories }) => {
  const getCatProduct = useSelector((item) => item.CategoriesSlice.ColtheProducts);
  const [getCategories, setGetCategories] = useState(Categories);
  const [getChangeData, setGetChangeData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarkets(0));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMainCat(0));

  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 200,
    autoplay: false,
    centerPadding: "60px",
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  useEffect(() => {
    fetch(`${baseUrl}/rest/rest.category/getCatProducts`, {
      method: 'POST',
      body: JSON.stringify({
        "uid": 4,
        "id": 55,
        "page": 0
      }),
      cache: 'no-store',
      headers: {
        "Access-Control-Allow-Headers": "X-Custom-Header, Upgrade-Insecure-Requests",
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
      .then((data) => setGetChangeData(...getChangeData, data));
    // -----------------------------------------------------------------------------
  }, []);

  return (
    <div>
      <Container>
       

        {Categories ? Categories.cats
          ?.filter((ele) => ele.catList.length > 0)
          .map((ele, idx) => {

            return (
              <div key={idx} className="row d-flex align-items-center text-center">

                <div className="col-md-12 col-12">

                  <div style={{ backgroundColor: '#f9f9f9', padding: '20px 0px', margin: '50px 0px' }}>
                    <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>{ele.name}</h1>
                  </div>
                  <Tabs
                    defaultActiveKey="الكل"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="الكل" title="الكل">
                      <Slider {...settings} slidesToShow={ele.products.length == 1 ? 1 : ele.products.length == 2 ? 2 : ele.products.length == 3 ? 3 : 4}>
                        {ele.products.map((item, id) => {
                          return (
                            <Link href={`product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={id}>
                              <ProductCard
                                key={id}
                                CatName={item.catName}
                                ProductName={item.name}
                                image={item && item.images[0]}
                                Rate={5}
                                id={item.id}
                                matgarId={item.matgarId}
                                pathName={item.name}
                                MarketImage={item && item.matgarLogo}
              matgarName={item.matgarName}
              Goto={"product"}
                                className={styles.Slick_Product} />
                            </Link>
                          );
                        })}

                      </Slider>
                    </Tab>
                    
                    
                    {ele.catList.map((item) => {
                      return (
                        <Tab key={item.id} eventKey={item.name} title={item.name}>
                          <Slider {...settings} slidesToShow={ele.products.length == 1 ? 1 : ele.products.length == 2 ? 2 : ele.products.length == 3 ? 3 : 4}>
                            {ele.products.map((item, id) => {
                              return (
                                <Link href={`product/${item.id}/${item.name.replace(/\s/g, "-")}`} key={id}>
                                  <ProductCard
                                    key={id}
                                    CatName={item.catName}
                                    ProductName={item.name}
                                    image={item && item.images[0]}
                                    Rate={5}
                                    id={item.id}
                                    matgarId={item.matgarId}
                                    pathName={item.name}
                                    MarketImage={item && item.matgarLogo}
                                    matgarName={item.matgarName}

                                    Goto={"product"}
                                    className={styles.Slick_Product} />
                                </Link>
                              );
                            })}

                          </Slider>
                        </Tab>
                      );
                    })}

                  </Tabs>
                </div>
              </div>
            );
          })
          : null}
      </Container>
    </div>
  );
};
