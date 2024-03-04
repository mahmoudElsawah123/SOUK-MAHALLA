"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets, Increes } from "../../store/MarketsSlice";
import { Col, Container, Row } from "react-bootstrap";
import MatgerCard from "@/app/components/MatgerCard/MatgerCard";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { Helmet } from "react-helmet";
import styles from "../page.module.css"
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import rssImage from '/public/images/rss-svgrepo-com.svg'
import Link from "next/link";
import Image from "next/image";
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
    <div className={"PrevArrow Arrow"} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};
const Markets = () => {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  const { MarketsArr, MarketNum } = useSelector((state) => state.MarketsSlice);

  const [loading, setLoading] = useState(false);   
  
  useEffect(() => {
    if (MarketNum <= 0) {
      setLoading(true);  
      dispatch(Increes(1));
      dispatch(getMarkets(1)).then(() => {
        setLoading(false);  
      });
    } else {
      return;
    }
  }, [dispatch, MarketNum]);
 
  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: MarketsArr.length < 4 ? 2 : 4,
    slidesToShow: 4,
    slidesToScroll: 1,
        centerPadding: "60px",
        speed: 200,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    
 
 
   
  const MarketsData =
    MarketsArr.length > 0 &&
    MarketsArr.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <Col xs={12} sm={6} md={3} key={idx}>
          <MatgerCard
            key={idx}
            name={ele.name}
            catName={ele.catName}
            coverImage={ele.coverImage}
            matgarImage={ele.matgarImage}
            face={ele.face}
            whats={ele.whats}
            messenger={ele.messenger}
            call={ele.call}
            pdf={ele.pdf}
            Rate={ele.rate}
            prodCount={ele.prodCount}
            offerCount={ele.offerCount}
            buys={ele.buys}
            id={ele.id}
            pathName={pathName}
          />
        </Col>
      );
    });

  return (
    <>
    {loading ? (
        null
      ) : (
        <>
          <Container fluid>
        <h1 className={styles.main_heading}>المتاجر المميزة</h1>
        <Link href={`/matgars.xml`} className="text-center">
                  <Image src={rssImage} width={40} height={40} alt="rss"/>
          </Link>
        <Slider {...settings}>{MarketsData}</Slider>
        <h2  className={styles.main_heading}>جميع المتاجر</h2>
 
         <Row>{MarketsData}</Row> 



      </Container>
        </>
      )}
      
      <Service />
<LastofOffersProducts />
<FooterBar />
    </>
  );
};

export default Markets;
// {loading ? <LoadingScreen /> :  MarketsData } 
