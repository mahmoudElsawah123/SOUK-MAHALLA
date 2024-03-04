"use client"
import React, { useEffect , useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import MarketImage from "/public/images/MarketSlick.png";
import styles from "@/app/page.module.css"
import { getMarkets } from "@/store/MarketsSlice";
import MatgerCard from "../../MatgerCard/MatgerCard";
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
const MatgersHome = () => {
  const  {MarketsArr}  = useSelector((state) => state.MarketsSlice);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);   
  useEffect(() => {
    setLoading(true);  
    dispatch(getMarkets(0)).then(() => {
      setLoading(false);  
    }).catch(error => {
      // Handle any errors
      setLoading(false);
      console.error("Error fetching markets:", error);
    });
  }, [dispatch]);
  

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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
   speed: 200,
    centerPadding: "60px",
    autoplay: false,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  return (
    <div  className={styles.SlMatgerHomeick_Product} style={{margin : '60px 0px'}}>
      <Container  >
        <Row className="align-items-center ">
          <Col md={3} className="d-flex justify-content-center mb-md-2 mb-0">
            <div
             className={styles.MainCatBackgound}
             style={{position : 'relative'}}
            >
              <h2  className={styles.Main_title} style={{color : '#fff' ,  zIndex : 544}}>اهم المتاجر</h2>
              <div style={{position : 'absolute' , backgroundColor : '#00000036', width : '100%' , height : '100%'}}></div>
            </div>
          </Col>
          <Col md={9}>
          <Slider {...settings}>{MarketsData}</Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MatgersHome;
