"use client"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../../store/OfferSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Container, Row } from "react-bootstrap";
import { Slider } from "primereact/slider";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { Accordion, AccordionTab } from "primereact/accordion";
// import { ImageUrlGlobal } from "@/app";
// import { Helmet } from "react-helmet";
import styles from "../page.module.css"
import BranchesHome from "@/app/components/Home/BranchesHome/BranchesHome";
import SearchHesder from "@/app/components/SearchHesder/SearchHesder";
import Service from "@/app/components/Service/Service";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import Link from "next/link";
const Offer = () => {
  const dispatch = useDispatch();
  const [expensive, setExpensive] = useState(false);
  const [Range, setRange] = useState([0, 10000]);
  const [sortType, setSortType] = useState("الاقل");
  const [page, setPage] = useState(1);
  const { offersArr } = useSelector((state) => state.OfferSlice);
  const { Categories } = useSelector((state) => state.CategoriesSlice);
  const FetchData = () => {
    setPage((state) => state + 1);
    dispatch(getOffers(page));
  };

  const OfferData =
    offersArr.length > 0 &&
    [...offersArr]
      .sort((a, b) =>
        expensive
          ? parseFloat(b.priceAfter).toFixed(0) -
            parseFloat(a.priceAfter).toFixed(0)
          : parseFloat(a.priceAfter).toFixed(0) -
            parseFloat(b.priceAfter).toFixed(0)
      )
      .map((ele, idx) => {
        const pathName = ele.name.replace(/\s/g, "-");
        const imageID = ele.images[0];
        return (
          <Col className={styles.Product_col} xs={6} md={3} key={idx}>
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
            />
          </Col>
        );
      });
  const CatgeoriesSelect =
    Categories &&
    Categories.cats.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, "-");
      return (
        <div key={idx} className={styles.Cat_Filter}>
          <Link
            href={`/shop?id=${ele.id}/${pathName}`}
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

  const TestNav = (
    <Accordion multiple>
      <AccordionTab header="السعر">
        <div className={styles.accContainer}>
          <div className={styles.slider_demo}>
            <div  className={styles.slider_header_container}>
              <span>{Range[1]} ج</span>
              <span>{Range[0]} ج</span>
            </div>
            <Slider
              max={10000}
              min={0}
              value={Range}
              onChange={(e) => setRange(e.value)}
              range
            />
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  );
  return (
    <>
      {/* <Helmet>
        <title>سوق المحلة</title>
        <meta
          name="description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />

        <meta itemprop="name" content="سوق المحلة" />
        <meta
          itemprop="description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />
        <meta
          itemprop="image"
          content="https://apps.souq-mahala.com/javax.faces.resource/logo.png.html?ln=imgs"
        />

        <meta property="og:url" content="https://souq-mahala.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="سوق المحلة" />
        <meta
          property="og:description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />
        <meta
          property="og:image"
          content="https://apps.souq-mahala.com/javax.faces.resource/logo.png.html?ln=imgs"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سوق المحلة" />
        <meta
          name="twitter:description"
          content=" سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي"
        />
        <meta
          name="twitter:image"
          content="https://apps.souq-mahala.com/javax.faces.resource/logo.png.html?ln=imgs"
        />
      </Helmet> */}

      <div className={styles.ShopPage} >
        <Container fluid>
          <Row>
            <Col md={3}>
            <div className={`${styles.main_container_Filter} ${styles.shop_cat}`} >
                {CatgeoriesSelect}
              </div>
              {TestNav}
            </Col>
            <Col md={9}>
              <div className={styles.SortBy}>
                <div className={styles.Number_of_products}>
                  <h5>عدد العروض : </h5>
                  <span>{offersArr && offersArr.length}</span>
                </div>
            <div className={`${styles.Number_of_products} ${styles.SortDiv}`} >
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
              <Container fluid>
                <BranchesHome Categories={Categories} />
                <InfiniteScroll
                  dataLength={offersArr.length > 0 && offersArr.length}
                  next={FetchData}
                  hasMore={true}
                  // loader={<h4>Loading...</h4>}
                >
                  <Row>{OfferData}</Row>
                </InfiniteScroll>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Service />
   <LastofOffersProducts />

    <FooterBar />
    </>
  );
};

export default Offer;
