"use client"
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NotFoundImage from "@/public/images/not2.svg";
import styles from "@/app/page.module.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block" }}
      className="NextArrow Arrow"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"PrevArrow Arrow"}  onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};

const SubSlickCat = ({ SlickId }) => {
  const {
    ColtheProducts,
    HealthProducts,
    FurnitureArr,
    getShoesArr,
    MobileArr,
    SleepProducts,
    ChildrenArr,
    CarsArr,
    ComputerArr,
    RoomsArr,
  } = useSelector((state) => state.CategoriesSlice);
  const SLiceType =
    SlickId === 3
      ? ColtheProducts
      : SlickId === 16
      ? HealthProducts
      : SlickId === 9
      ? ComputerArr
      : SlickId === 18
      ? FurnitureArr
      : SlickId === 55
      ? getShoesArr
      : SlickId === 68
      ? MobileArr
      : SlickId === 70
      ? SleepProducts
      : SlickId === 74
      ? ChildrenArr
      : SlickId === 192
      ? CarsArr
      : SlickId === 196
      ? RoomsArr
      : null;
  const Data = SLiceType
    ? SLiceType.map((ele, idx) => {
        const imageID = ele.images[0];
        const pathName = ele.name.replace(/\s/g, "-");
        return (
          <div key={idx}>
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
              MarketImage={ele.matgarLogo}
              Goto={"product"}
              className={styles.Slick_Product}
              matgarName={ele.matgarName}
            />
          </div>
        );
      })
    : null;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: SLiceType && SLiceType.length < 4 ? 2 : 4,
    // slidesToShow: 2,
    slidesToScroll: 1,
        centerPadding: "60px",
        speed: 200,
    autoplay: true,
    autoplaySpeed: 700,
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
          slidesToShow: 2,
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
  return (
    <div  className={styles.SubSlickCat}>
      {SLiceType && SLiceType.length > 0 ? (
        <Slider {...settings}>{Data}</Slider>
      ) : (
        <div className={styles.NotFoundImageCard}>
          <LazyLoadImage
            alt="NotFound"
            effect="blur"
            src={NotFoundImage}
            width={210}
            height={210}
          />
        </div>
      )}
    </div>
  );
};

export default SubSlickCat;
