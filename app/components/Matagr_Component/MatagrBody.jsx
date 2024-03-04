"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { getHomeHeaders, getMainCat } from "@/store/CategoriesSlice";
import map from "@/public/map.png";
import img2 from "@/public/images/images.png";
import face from "@/public/images/face.png";
import wify from "@/public/images/wify.png";
import p from "@/public/images/p.png";
import wats from "@/public/images/wats.png";
import ins from "@/public/images/instegram.png";
import twiter from "@/public/images/twiter.png";
import telg from "@/public/images/teleg.png";
import MatgarContent from "./MatgarContent";
import { useParams } from "next/navigation";
import { getMarketsDetails } from "@/store/MarketsSlice";
import MatagrLocation from "./MatagrLocation";
import LazyLoad from "react-lazyload";
import MatagrProduct from "./MatagrProduct";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoLogoWhatsapp, IoMdArrowDropdown } from "react-icons/io";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import rssImage from "/public/images/rss-svgrepo-com.svg";
import Slider from "react-slick";
import { RiWhatsappLine } from "react-icons/ri";
import { BsMessenger } from "react-icons/bs";
// import { Image } from 'primereact/image';
import Gallery from "./gallery"
const MatagrBody = ({ params }) => {
  const { Categories } = useSelector((state) => state.CategoriesSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeHeaders());
    dispatch(getMainCat(0));
  }, [dispatch]);

  const { MarketDetialsArr } = useSelector((state) => state.MarketsSlice);
  const { id, name } = useParams();
  useEffect(() => {
    dispatch(getMarketsDetails(parseInt(id)));
  }, [dispatch]);

console.log(MarketDetialsArr)
  const CatgeoriesSelect =
    Categories &&
    Categories.cats.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx} className={styles.Cat_Filter}>
          <Link
            href={`/category/${ele.id}/${pathName}`}
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
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      );
    });

  var settingss = {
    dots: true,
    infinite: true,
    speed: 200,
    centerPadding: "10px",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, password, message });
  };

  return (
    <div className={styles.HomeHeader}>
      <div className="hero_h">
        <div
          className="hero hero_matger"
          style={{
            background: `url(https://souq.deltawy.com/imag?id=${MarketDetialsArr?.coverImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="hero_contant">
          <Container>
            <div className="hero_mask">
              <Row>
                <Col md={8}>
                  <div className="hero_contant_img">
                    <div className="hero_img">
                      <Image
                        src={`https://souq.deltawy.com/imag?id=${MarketDetialsArr?.matgarImage}`}
                        alt={MarketDetialsArr?.name}
                        width={140}
                        height={140}
                        style={{ borderRadius: "50%" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="hero_contant_2">
                      <h3> {MarketDetialsArr?.name} </h3>
                      
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                 <div className="flex_col">
                <h4> كن على تواصل معنا</h4>
                   
                   <div className="hero_flex_icon">
                    
                    {MarketDetialsArr?.face ? (
                      <Link
                      href={MarketDetialsArr?.face}
                    >
                      <Image src={face} alt=""></Image>
                    </Link>
                    )  : null }
                      {MarketDetialsArr?.whats ? (
                      <Link href={MarketDetialsArr?.whats}>
                      <Image src={wats} alt=""></Image>
                    </Link>
                    )  : null }
 {MarketDetialsArr?.messenger ? (
                      <Link href={MarketDetialsArr?.messenger}>
                      <Image src={telg} alt=""></Image>
                    </Link>
                    )  : null }
 
                  {/* <Image src={ins} alt=""></Image>
                  <Image src={face} alt=""></Image>
                  <Image src={p} alt=""></Image>
                  <Image src={wats} alt=""></Image>
                  <Image src={telg} alt=""></Image>
                  <Image src={wify} alt=""></Image> */}
                </div>  
                 </div>

                    {/* {MarketDetialsArr?.phone && (
                      <Link href={`tel:${MarketDetialsArr?.phone}`}>
                        <div className="details_icon">
                          <FaPhoneAlt />
                        </div>
                      </Link>
                    )} */}

                   

                   
                    {/* {MarketDetialsArr?.address && (
                      <Link href={MarketDetialsArr?.address}>
                        <div className="details_icon">
                          <MdLocationOn />
                        </div>
                      </Link>
                    )} */}
                  
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <Container fluid>
        <Row id="dir_col" className={styles.Home_row}>
          <Col md={3}>
            <div className={styles.sticky_cat_filt}>
            <div className="details mt-0">
                <FacebookShareButton
                  url={`${MarketDetialsArr?.url}`}
                  title={`${MarketDetialsArr?.name}`}
                >
                  <FacebookIcon
                    size={45}
                    style={{ margin: "0px 10px" }}
                    round
                  />
                </FacebookShareButton>

                {/* {MarketDetialsArr?.messenger.length  == 0 ? null: 
                          <Link href={MarketDetialsArr?.messenger}>
                        <FacebookMessengerIcon size={45} style={{margin : '0px 10px'}} round />
                        </Link>*/}

                <TwitterShareButton
                  url={`${MarketDetialsArr?.url}`}
                  title={`${MarketDetialsArr?.name}`}
                  hashtag={`${MarketDetialsArr?.name}`}
                >
                  <TwitterIcon size={45} style={{ margin: "0px 10px" }} round />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={`${MarketDetialsArr?.url}`}
                  title={`${MarketDetialsArr?.name}`}
                  hashtag={`${MarketDetialsArr?.name}`}
                >
                  <WhatsappIcon
                    size={45}
                    style={{ margin: "0px 10px" }}
                    round
                  />
                </WhatsappShareButton>

                <TelegramShareButton
                  url={`${MarketDetialsArr?.url}`}
                  title={`${MarketDetialsArr?.name}`}
                  hashtag={`${MarketDetialsArr?.name}`}
                >
                  <TelegramIcon
                    size={45}
                    style={{ margin: "0px 10px" }}
                    round
                  />
                </TelegramShareButton>

                <LinkedinShareButton
                  url={`${MarketDetialsArr?.url}`}
                  title={`${MarketDetialsArr?.name}`}
                  hashtag={`${MarketDetialsArr?.name}`}
                >
                  <LinkedinIcon
                    size={45}
                    style={{ margin: "0px 10px" }}
                    round
                  />
                </LinkedinShareButton>

                {/* <Link href={`/${params.id[0]}.xml`}>
                          <Image src={rssImage} width={40} height={40} alt="rss"/>
                   </Link> */}
              </div>
              <div className="map_img">
  {(MarketDetialsArr?.lat && MarketDetialsArr?.lng && MarketDetialsArr?.lat !== 0 && MarketDetialsArr?.lng !== 0) && (
    <div>
      <Link
        href={`https://www.google.com/maps/search/location/@${MarketDetialsArr?.lat},${MarketDetialsArr?.lng},12z?entry=ttu`}
        target="_blank"
        className="map_link"
      >
        <Image src={map} alt="" />
      </Link>
      <Link
        href={`https://www.google.com/maps/search/location/@${MarketDetialsArr?.lat},${MarketDetialsArr?.lng},12z?entry=ttu`}
        className="cover_img_category"
      >
        <FaMapMarkerAlt />
        <Image
          src={`https://souq.deltawy.com/imag?id=${MarketDetialsArr?.matgarImage}`}
          alt={MarketDetialsArr?.name}
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
          loading="lazy"
        />
      </Link>
    </div>
  )}
</div>


                
              {/*  */}
              
            </div>
            <LazyLoad height={"100%"} width={"100%"} once>
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${MarketDetialsArr?.face}%2Ffacebook&tabs=timeline&width=300&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                className="face_iframe"
                scrolling="no"
                frameBorderr="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook"
                loading="lazy"
              />
            </LazyLoad>
            {MarketDetialsArr?.images && MarketDetialsArr.images.length !== 0 && <Gallery />}


            {/* <form className="form form_card cardd" onSubmit={handleSubmit}>
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
            </form> */}
          </Col>

          <Col md={9}>
           <div className="about_discription">
           <p>{MarketDetialsArr?.description}</p>
           </div>
            <div className="ShopPage_ProductCard">
              {MarketDetialsArr?.products.map((item, id) => {
                return (
                  <Link
                    href={`/product/${item.id}/${item.name.replace(
                      /\s+/g,
                      "-"
                    )}`}
                    key={id}
                  >
                    <ProductCard
                      key={id}
                      CatName={item.catName}
                      ProductName={item.name}
                      image={item.images[0]}
                      Rate={5}
                      id={item.id}
                      pathName={item.name}
                       MarketImage={item.matgarLogo}
                      Goto={"product"}
                      className={styles.Slick_Product}
                      matgarId={item.matgarId}
                      matgarLogo={item.matgarLogo}
              matgarName={item.matgarName}
              />
                  </Link>
                );
              })}
            </div>
            {/* <MatgarContent MarketDetialsArr={MarketDetialsArr} params={params}/> */}
          </Col>

          {/* ------------------------------- */}
          {/* <Col md={12}>
              <MatagrProduct MarketDetialsArr={MarketDetialsArr}/>
          </Col>   */}
          {/* <Col md={12}>
                <div style={{color : '#fff', marginBottom : '50px'}}>
                    <div className="card text-center">
                    <div className="card-header" style={{ backgroundColor : '#fff'}}>
                            <h1 style={{fontSize : '32px', color : '#055c97', textAlign : 'start'}}>الخريطه</h1>
                        </div>
                        <div className="card-body">
                        <div >
                            <LazyLoad height={"100%"} once>
                            <MatagrLocation latt={MarketDetialsArr} />
                                </LazyLoad>
                           <Slider {...settings} className="Slider_matger"  >
     {  Categories &&
    Categories.cats.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx}  className="Slider_cats">
          <Link
            href={`/category/${ele.id}/${pathName}`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }}
          >
            <div  className="img_slise">
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${ele.icon}`}
                alt={ele.name}
                effect="blur"
                width={150}
                height={150}
              />
            </div>
            <p>{ele.name}</p>
          </Link>
        </div>
      ) 
    }) 
  }
    </Slider>  
           </Col> */}
        </Row>
      </Container>

<div className="fixed_icon_matger">
            {MarketDetialsArr?.call && (
                      <Link href={`tel:+${MarketDetialsArr?.call}`}>
                        <div className="call">
                        <FaPhone />
                        </div>
                      </Link>
                    )} 

{MarketDetialsArr?.messenger && (
                      <Link href={MarketDetialsArr?.messenger}>
                        <div className="messenger">
                           <BsMessenger />

                        </div>
                      </Link>
                    )} 

{MarketDetialsArr?.whats && (
                      <Link href={MarketDetialsArr?.whats}>
                        <div className="whats">
                        <RiWhatsappLine />

                        </div>
                      </Link>
                    )} 

</div>

    </div>
  );
};

export default MatagrBody;
