"use client"
import styles from "@/app/page.module.css"
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import { Router } from "next/router";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerOrdersJson } from "@/store/ControlPanalSlice";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "@/app/components/ProductCard/ProductCard";

import { LazyLoadImage } from "react-lazy-load-image-component";
import EmptyCart from "@/public/images/emptyCart.svg";
const ALLProdcuts = () => {
  const dispatch = useDispatch();
  const { CustomerOrdersJsonArr } = useSelector(
    (state) => state.ControlPanalSlice
  );
  useEffect(() => {
    const UserId = window.localStorage.getItem("ClientId");
    if (!CustomerOrdersJsonArr) {
      dispatch(getCustomerOrdersJson(UserId));
    }
  }, [CustomerOrdersJsonArr, dispatch]);

  const ALlClientOrders =
    CustomerOrdersJsonArr && CustomerOrdersJsonArr.length > 0 ? (
      CustomerOrdersJsonArr.map((ele, idx) => {
        return (
          <Col
            md={9}
            key={idx}
            onClick={() => Router.push(`/cp/orders/${ele.orderId}`)}
          >
            <div className={styles.OrderProduct} >
              <div className={styles.Product_right}>
                <ProductCard
                  key={idx}
                  CatName={ele.catName}
                  ProductName={ele.productName}
                  image={ele.imageId}
                  id={ele.orderId}
                  MarketImage={ele.matgarLogo}
                  imgWid={118}
                  imgHei={110}
                />
              </div>
              <div className={styles.Orderinfo}>
                <div>
                  <p>رقم الاوردر: {ele.productId}</p>
                  <p>{ele.dat}</p>
                </div>
                <div>
                  <p>الكمية: {ele.units}</p>
                  <p>الحساب الاجمالي: {ele.total} ج</p>
                </div>
                <div>
                  <button name="login" type="button" className={styles.submit_button}>
                    التفاصيل
                  </button>
                  <p className={styles.state}>{ele.state}</p>
                </div>
              </div>
            </div>
          </Col>
        );
      })
    ) : (
      <div className={styles.CartEmpty}>
        <div className={styles.card_container_empty}>
          <Image src={EmptyCart} effect="blur" alt="empty" />
        </div>
        <h2>لم تشتري منتجات بعد</h2>
        <p>تصفح فئاتنا واكتشف أفضل عروضنا</p>
      </div>
    );
  return (
    <>
    <div>
      <h1 className={styles.main_heading}>جميع الطلبات</h1>
      <Container>
        <Row>{ALlClientOrders}</Row>
      </Container>
    </div>
<Service />
   <LastofOffersProducts />
    <FooterBar />
    </>
  
  );
};

export default ALLProdcuts;
