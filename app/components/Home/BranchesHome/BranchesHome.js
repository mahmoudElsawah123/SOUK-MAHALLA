"use client"
import React from "react";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import styles from "@/app/page.module.css"
import Link from "next/link";
const BranchesHome = ({ Categories }) => {
  const settings = {
    cssEase: "linear",
    dots: false,
    // swipeToSlide: true,
    infinite: true,
    // lazyLoad: true,
    speed: 200,
    centerPadding: "60px",
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    rtl: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Branches =
    Categories &&
    Categories.cats.map((ele, idx) => {
      // /shop/${ele.id}/${pathName}
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx}>
            <Link 
            href={`/category/${ele.id}/${pathName}`}
               >

          <div
            className={styles.Branch_content}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
            style={{backgroundColor : '#fff', textAlign : 'center', padding : '10px 0px'}}
          >
           
            <div  className={styles.image_container}>
              <LazyLoadImage
                effect="blur"
                alt={ele.name}
                width={100}
                height={100}
                src={`https://souq.deltawy.com/imag?id=${ele.image}`}
              />
            </div>
            <h5 style={{fontWeight : 'bold', fontSize : '14px'}}>{ele.name}</h5>
          </div>
          </Link>
        </div>
      );
    });
  return (
    <div className={styles.Home_Branches} >
      <Container fluid className="mt-5">
        <div className={styles.Home_Branches_header}>
          <Link
            href={"/shop"}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
              });
            }}
          >
          </Link>
        </div>
        <div className={styles.Header_container}></div>
        <Slider {...settings}>{Branches}</Slider>
      </Container>
    </div>
  );
};

export default BranchesHome;
