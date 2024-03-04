import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import { Container, Col } from "react-bootstrap";
import styles from "../../page.module.css";
import ProductCard from "@/app/components/ProductCard/ProductCard";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block" }}
      className={`${styles.NextArrow} ${styles.Arrow}`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.NextArrow} ${styles.Arrow}`} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};
const MatgerProducts = ({ productsItems, MatgerLogo }) => {
  const ProductsMap = productsItems.map((ele, idx) => {
    const imageID = ele.images[0];
    const pathName = ele.name.replace(/\s/g, "-");
    return (
      <Col key={idx} md={3}>
        <div key={idx}>
          <ProductCard
            key={idx}
            CatName={ele.catName}
            ProductName={ele.name}
            image={imageID}
            Rate={ele.rate}
            id={ele.id}
            pathName={pathName}
            MarketImage={ele.MatgerLogo}
            matgarName={ele.matgarName}
            // MarketImage={6474}
            Goto={"product"}
          />
        </div>
      </Col>
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow:
      productsItems.length < 3 ? 1 : productsItems.length <= 4 ? 2 : 4,
    slidesToScroll: 1,
    speed: 200,
        centerPadding: "60px",
        autoplay: true,
    autoplaySpeed: 200,
    cssEase: "linear",
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.MatgerProducts}>
      <h2 className={styles.main_title}>منتجات المتجر</h2>
      <Container fluid>
        {productsItems.length < 2 ? (
          ProductsMap
        ) : (
          <Slider {...settings}>{ProductsMap}</Slider>
        )}
      </Container>
    </div>
  );
};

export default MatgerProducts;
