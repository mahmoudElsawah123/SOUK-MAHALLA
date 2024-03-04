"use client"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  GetFromCart,
  GetUpdateCart,
} from "../../store/ShopSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../page.module.css";
import { TiDelete } from "react-icons/ti";
import EmptyCart from "@/public/images/emptyCart.svg";
import Image from "next/image";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import Link from "next/link";
// import { ImageUrlGlobal } from "@/app";
// TiDelete
// import { MetaTags } from "react-meta-tags";
// import { Helmet } from "react-helmet";

const Cart = () => {
  const dispatch = useDispatch();
  const { GetFromCartAarr } = useSelector((state) => state.ShopSlice);

  // const { LoginSouq } = useSelector((state) => state.authSlice);
  useEffect(() => {
    const ID = parseInt(window.localStorage.getItem("ClientId"));
    if (
      !GetFromCartAarr &&
      parseInt(window.localStorage.getItem("ClientId")) !== 0
    ) {
      dispatch(GetFromCart(ID));
    }
  }, [dispatch, GetFromCartAarr]);

  const delivaryPrice = 15.0;
  const Total = GetFromCartAarr && parseFloat(GetFromCartAarr.total) + 15;
  const IncressHandeller = (e) => {
    const id = e[0];
    const data = {
      productId: id,
      units: 1,
      userId: parseInt(window.localStorage.getItem("ClientId")),
    };
    dispatch(GetUpdateCart(data));
  };

  const DecressHandeller = (e) => {
    const count = e[1];
    const id = e[0];
    if (count > 1) {
      const data = {
        productId: id,
        units: -1,
        userId: parseInt(window.localStorage.getItem("ClientId")),
      };
      dispatch(GetUpdateCart(data));
    }
  };

  const HandelerDelete = (e) => {
    dispatch(DeleteProduct(e));
  };

  const Items =
    GetFromCartAarr &&
    GetFromCartAarr.data.map((ele, idx) => {
      return (
        <div key={idx}  className={styles.item_product}>
          <div  className={` ${styles.item_info_container} d-flex`} style={{display:"flex"}}>
            <div className={styles.Card_image} >
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${ele.imageId}`}
                alt={ele.productName}
                effect="blur"
              />
            </div>
            <div className={styles.item_info}>
              <p>{ele.productName}</p>
              <p>{ele.total} ج</p>
              <div className={styles.Product_Count}>
                <button
                  onClick={() => IncressHandeller([ele.productId, ele.units])}
                >
                  +
                </button>
                <span>{ele.units}</span>
                <button
                  onClick={() => DecressHandeller([ele.productId, ele.units])}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div
            className={styles.delete_product}
            onClick={() => HandelerDelete(ele.id)}
          >
            <TiDelete className={styles.icon_delete} />
          </div>
        </div>
      );
    });

  const TotalPrice = GetFromCartAarr && (
    <div className={styles.TotlaPrice}>
      <h3>الملخص</h3>
      <div>
        <p>السعر ( {GetFromCartAarr.count} عناصر )</p>
        <p>{GetFromCartAarr.total} ج</p>
      </div>
      <div>
        <p>الشحن</p>
        <p>{delivaryPrice} ج</p>
      </div>
      <div>
        <p>السعر الكلي</p>
        <p>{Total}</p>
      </div>
    </div>
  );

  return (
    <>
    <div className={styles.CartPage}>
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
      <h2 className="text-center">سلة المشتريات</h2>
      <Container>
        {GetFromCartAarr && GetFromCartAarr.data.length > 0 ? (
          <Row>
            <Col md={7}>
              <div className={styles.productsCart}>{Items}</div>
            </Col>
            <Col md={4}>
              {TotalPrice}
              <button
                className={styles.contaniue_to_pay}
                // onClick={() => navigate("/cart/Process")}
              >
               <Link href={"/cart"}> متابعه الدفع
               </Link>
              </button>
            </Col>
          </Row>
        ) : (
          <div className={styles.CartEmpty}>
            <div className={styles.card_container_empty}>
              <Image src={EmptyCart} effect="blur" alt="empty" />
            </div>
            {/* <h2>لم تشتري منتجات بعد</h2> */}
            <h3>عربة التسوق فارغة!</h3>
            <p>تصفح فئاتنا واكتشف أفضل عروضنا</p>
          </div>
        )}
      </Container>
    </div>
<Service />
   <LastofOffersProducts />

    <FooterBar />
    </>

  );
};

export default Cart;
