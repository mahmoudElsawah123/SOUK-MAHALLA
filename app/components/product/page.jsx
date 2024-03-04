"use client"
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom  from 'lightgallery/plugins/zoom';
import lgShare  from 'lightgallery/plugins/share';

import lgHash  from 'lightgallery/plugins/hash';

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {useParams, useRouter}  from "next/navigation";
import rssImage from '/public/images/rss-svgrepo-com.svg'
import {
  AddToCart,
  GetFromCart,
  getProductDetails,
  UpdateProdectViews,
} from "@/store/ShopSlice";
import  Image  from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsHeart, BsTelephoneFill } from "react-icons/bs";
import { Rating } from "primereact/rating";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Toast } from "primereact/toast";
import Slider from "react-slick";
import styles from "@/app/page.module.css";
// import { useRouter } from 'next/navigation';

// const router = useRouter();
//   const  id  = router.query;
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import Service from "@/app/components/Service/Service";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import Head from "next/head";
import LastofOffersProducts from '@/app/components/lastProduct/LastofOffersProducts';
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

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.PrevArrow} ${styles.Arrow}`}  onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};


const ProductDetails = ({params}) => {


const dispatch = useDispatch();
  const router = useRouter();
  const { id, productname } = useParams();
  // const  id  = router.query;
  // const  productname  = router.query;
  const [count, setCount] = useState(1);
  const toast = useRef(null);
  const { ProductInfo, isLoading } = useSelector((state) => state.ShopSlice);

  useEffect(() => {
    const ProId = parseInt(id);
    const data = {
      userId: window.localStorage.getItem("ClientId")
        ? parseFloat(window.localStorage.getItem("ClientId"))
        : 0,
      productId: ProId,
    };
    dispatch(getProductDetails(data));
    dispatch(UpdateProdectViews(ProId));
  }, []);
  if (!ProductInfo) {
    return (
      <></>
    );
  }
  
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "تم اضافة المنتج بنجاح",
      // detail: "Message Content",
      life: 3000,
    });
  };

  const settings = {
    customPaging: function (i) {
      return (
        <div className={styles.test}>
          <LazyLoadImage
            src={`https://souq.deltawy.com/imag?id=${mapimages[i + 0]}`}
            alt={i}
            effect="blur"
            width={50}
            height={50}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
        centerPadding: "60px",
        speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
  };
  const mapimages = ProductInfo && ProductInfo.images.slice(0, 5);
  // console.log(mapimages);
  const ImageSlider =
    ProductInfo &&
    ProductInfo.images.slice(0, 5).map((ele, idx) => {
      return (
        <div key={idx}>
          <div className={styles.image_box_container}>
          
            <LightGallery
                speed={200}
                plugins={[lgThumbnail, lgZoom , lgShare , lgHash]}
            >
                        <a
            data-lg-size="1400-1400"
            data-src={`https://souq.deltawy.com/imag?id=${ele}`}
          >
              <LazyLoadImage
              effect="blur"
              src={`https://souq.deltawy.com/imag?id=${ele}`}
              alt={productname}
            />
          </a>
            
            </LightGallery>
          </div>
        </div>
      );
    });
  const IncressHandeller = () => {
    setCount((state) => state + 1);
  };

  const DecressHandeller = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((state) => state - 1);
    }
  };
  const AddToCartHandeler = () => {
    if (
      window.localStorage.getItem("ClientId") === "undefined" ||
      !window.localStorage.getItem("ClientId") ||
      window.localStorage.getItem("ClientId") === "0"
    ) {
      router.push("/login");
    } else {
      const data = {
        productId: ProductInfo.id,
        units: count,
        userId: parseFloat(window.localStorage.getItem("ClientId")),
      };
      dispatch(AddToCart(data)).then(() => {
        showSuccess();
        getCart();
      });
    }
  };

  const getCart = () => {
    const ID = parseInt(window.localStorage.getItem("ClientId"));
    dispatch(GetFromCart(ID));
  };
  const PathName =
  ProductInfo && ProductInfo.matgar ? ProductInfo.matgar.replace(/\s/g, "-"): null ;

  const ProductInformation = ProductInfo && (
    
    <div className={styles.content}>
      <h1 className={styles.center_heading}> {ProductInfo.name}</h1>
      <div className={styles.price}>
        <p>
          {ProductInfo.priceAfter === 0
            ? "تواصل معنا لمعرفة السعر"
            : ProductInfo.priceAfter}
        </p>
        {ProductInfo.priceBefore > 0 && <del> {ProductInfo.priceBefore}</del>}
      </div>
      <p className={styles.description}>{ProductInfo.description}</p>
      <p>{ProductInfo.catName}</p>
      <div className={`${styles.seller_info} d-block d-lg-flex`} >
            <Link   
          
            href={`/matgar/${ProductInfo.matgarId}/${PathName}`} >
        <p
          
        >
          <span>البائع :</span>
          {ProductInfo.matgar}
          </p>
          </Link>

        {/* matgarLogo */}

        <div className={`${styles.Social_icons} mt-3`} style={{gap : '20px'}}>
         
          <span>
            <Link 
              href={ProductInfo.whats}
              // href={`${ALLClientDetails.face}`}
              target="_blank"
              rel="noopener noreferrer"
            >
             <WhatsappShareButton
                url={`https://souq-mahala.com/product/${id}/${productname}`}
                // title="facebook"
                quote={"title"}
              >
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </Link>
          </span>
          <span>
            <Link
              href={ProductInfo.messenger}
              // href={`${ALLClientDetails.face}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMessenger />
            </Link>
          </span>
          <span>
            <Link
              href={`tel:${ProductInfo.call}`}
              // href={`${ALLClientDetails.face}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelephoneFill />
            </Link>
          </span>
          <div
            className={styles.image_card_logo}
           
            
          >
        
            <Link  
           href={`/matgar/${ProductInfo.matgarId}/${PathName}`}
           >

            <LazyLoadImage
              effect="blur"
              alt={ProductInfo.name}
              src={`https://souq.deltawy.com/imag?id=${ProductInfo.matgarLogo}`}
            />
            </Link>
          </div>
          <span>
          <Link href={`/${params.id[0]}.xml`}>
                <Image src={rssImage} width={30} height={30} alt="rss"/>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );

  const CommentsProduct =
    ProductInfo &&
    ProductInfo.jcomment.map((ele, idx) => {
      return (
        <div key={idx} className={styles.comment_content}>
          <div className={styles.card_image}>
            <LazyLoadImage
              src={`https://souq.deltawy.com/imag?id=${ele.image}`}
              alt={ele.name}
              effect="blur"
            />
          </div>
          <div className={styles.comment_info}>
            <h3>{ele.name}</h3>
            <Rating readOnly value={ele.rate} stars={5} cancel={false} />
            <p>{ele.comment}</p>
          </div>
        </div>
      );
    });

  const settings2 = ProductInfo && {
    dots: false,
    infinite: true,
    // slidesToShow:
    //   ProductInfo && ProductInfo.similarProducts.length < 2
    //     ? 1
    //     : ProductInfo.similarProducts.length < 3
    //     ? 2
    //     : ProductInfo.similarProducts.length < 4
    //     ? 3
    //     : 5,
    slidesToScroll: 1,
    speed: 200,
          slidesToShow: 3,
          autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // https://souq-mahala.com/product/966/%D8%A7%D9%86%D8%AA%D9%8A%D9%83%D8%A7%D8%AA-%D9%81%D8%B6%D9%87

  const similarProducts =
    ProductInfo &&
    ProductInfo.similarProducts.map((ele, idx) => {
      const imageID = ele.images[0];
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <Link href={`/product/${id}/${pathName}`} key={idx}>
          <ProductCard
            key={idx}
            CatName={ele.catName}
            ProductName={ele.name}
            image={imageID}
            Rate={ele.rate}
            id={ele.id}
            pathName={pathName}
            MarketImage={ele.matgarLogo}
            matgarName={ele.matgarName}
            Goto={"product"}
            matgarId={ele.matgarId}
          />
        </Link>
      );
    });

     const schema = ProductInfo ? {
      "@context": ProductInfo.url,
      "@type": ProductInfo.catName,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ProductInfo.rate,
        "reviewCount": "11"
      },
      "description": ProductInfo.description,
      "name": ProductInfo.name,
      "image": `{https://souq.deltawy.com/imag?id=${ProductInfo.images[0]}}`,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": ProductInfo.priceAfter,
        "priceCurrency": "Eg"
      }
    } : ""

  return (
    <>
    <div className={styles.ProductDetails}>
  
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <title>{productname}</title>
        <meta itemprop="name" content={`${productname}`} />

        <meta
          name="description"
          content={`${ProductInfo && ProductInfo.description.slice(0, 170)}`}
        />
        <meta
          itemprop="description"
          content={`${ProductInfo && ProductInfo.description.slice(0, 170)}`}
        />
        <link
          rel="canonical"
          href={`https://souq-mahala.com/product/${id}/${productname}`}
        />
        <meta
          itemprop="image"
          content={`${ProductInfo && ProductInfo.images[0]}`}
        />
        <meta property="og:url" content={`${ProductInfo && ProductInfo.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${productname}`} />
        <meta
          property="og:description"
          content={`${ProductInfo && ProductInfo.description}`}
        />
        <meta
          property="og:image"
          content={`http://souq.deltawy.com//imag?id=${
            ProductInfo && ProductInfo.images[0]
          }`}
        />

        <meta
          property="og:url"
          rel="canonical"
          content={`${ProductInfo && ProductInfo.url}`}
        />

        <meta name="twitter:title" content={`${productname}`} />
        <meta
          name="twitter:description"
          content={`${ProductInfo && ProductInfo.description.slice(0, 170)}`}
        />

        {ProductInfo && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: `${productname}`,
              image: [
                `http://souq.deltawy.com//imag?id=${ProductInfo.images[0]}`,
              ],
              author: {
                "@type": "Organization",
                name: `${ProductInfo.matgar}`,
              },
              description: `${ProductInfo.description.slice(0, 170)}`,

              offers: ProductInfo.isOffer && {
                "@type": "Offer",
                url: `${ProductInfo.url}`,
                priceCurrency: "EGP",
                price: `${ProductInfo.priceAfter}`,
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: 10.0,
                  priceCurrency: "EGP",
                },
              },

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: `${ProductInfo.rate}`,
                bestRating: `5`,
                worstRating: "0",
                ratingCount: `${ProductInfo.rateCount}`,
              },
            })}
          </script>
        )}
      </Head>
      <Toast ref={toast} />
      <Container>
        <Row>
          <Col md={5}>
            <Slider {...settings}>{ImageSlider}</Slider>
            <h2 className={styles.main_heading_invite}>دعوة الاصدقاء </h2>
            <div className={styles.InviteIcons_Products}>
              <FacebookShareButton
                url={`https://souq-mahala.com/product/${id}/${productname}`}
                // title="facebook"
                quote={"title"}
              >
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <LinkedinShareButton
                url={`https://souq-mahala.com/product/${id}/${productname}`}
                // title="facebook"
                quote={"title"}
              >
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <TelegramShareButton
                url={`https://souq-mahala.com/product/${id}/${productname}`}
                // title="facebook"
                quote={"title"}
              >
                <TelegramIcon size={40} round />
              </TelegramShareButton>
              <TwitterShareButton
                url={`https://souq-mahala.com/product/${id}/${productname}`}
                // title="facebook"
                quote={"title"}
              >
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <WhatsappShareButton
                url={`https://souq-mahala.com/product/${id}/${productname}`}
                // title="facebook"
                quote={"title"}
              >
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>
          </Col>
          <Col md={7}  className={styles.column_Details}>
            {ProductInformation}
          </Col>
         
          <Col md={5}>
            <div className={styles.comment_section}>{CommentsProduct}</div>
          </Col>
          {/* <Col md={5}>Rating</Col> */}
          <Col md={12}>منتجات مشابه</Col>
          <Col md={12}>
            {ProductInfo && <Slider {...settings2}>{similarProducts}</Slider>}
          </Col>
        </Row>
      </Container>
      {/* )} */}
    </div>
    <Service />
   <LastofOffersProducts />
   <FooterBar />
    </>

  );
};

export default ProductDetails;
