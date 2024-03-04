import ProductCard from '@/app/components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react'
import { Container } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Slider from "react-slick";
import styles from "@/app/page.module.css"



const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={`${styles.PrevArrow} ${styles.Arrow}`}  onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        // className={className}
        // style={{ ...style, display: "block" }}
        className={`${styles.Arrow} ${styles.NextArrow}`}
        onClick={onClick}
      >
        <MdKeyboardArrowRight />
      </div>
    );
  };


const MatagrProduct = ({MarketDetialsArr}) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        speed: 200,
        autoplay: true,
        centerPadding: "60px",
        autoplaySpeed: 3000,
        cssEase: "linear",
        swipeToSlide: true,
        initialSlide: 0,
        rtl: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
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

  return (
    <>
        <Container>
          <h1 style={{fontSize : '22px' , padding : '10px 0px' , color : '#055c97'}}>منتجات مشابهه</h1>
          <div className='card p-3'>
          {MarketDetialsArr ? 
            <Slider {...settings} slidesToShow={ MarketDetialsArr.products.length ==  2 ? 2 :  MarketDetialsArr.products.length == 3 ? 3 : 4}>
            {MarketDetialsArr.products.map((item , id)=>{
               return (
                   <Link href={`/product/${item.id}/${item.name.replace(/\s+/g, '-')}`} key={id}>
                            <ProductCard
                             key={id}
                            CatName={item.name}
                            ProductName={item.name}
                            image={item.images[0]}
                            Rate={5}
                            id={item.id}
                            pathName={item.name}
                            MarketImage={item.images[0]}
                             Goto={"product"}
                             className={styles.Slick_Product}
                             matgarId={item.matgarId}
                             matgarName={ele.matgarName}

                            />
                     </Link>
                                    )
             })}
        </Slider>
         : null}
          </div>
        </Container>
    </>
  )
}

export default MatagrProduct