"use client"
import styles from "@/app/page.module.css"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMatgarOrders } from "@/store/ControlPanalSlice";
import working from "@/public/images/emptyCart.svg";
import { Router } from "next/router";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard/ProductCard";
const Orders = () => {
  const dispatch = useDispatch();
  const { MatgarOrdersArr } = useSelector((state) => state.ControlPanalSlice);
  useEffect(() => {
    const UserId = window.localStorage.getItem("ClientId");
    if (!MatgarOrdersArr) {
      const data = {
        id: UserId,
        page: 1,
      };
      dispatch(getMatgarOrders(data));
    }
  }, [dispatch, MatgarOrdersArr]);

  const OrderMatger =
    MatgarOrdersArr && MatgarOrdersArr.length > 0 ? (
      MatgarOrdersArr.map((ele, idx) => {
        // onClick={() => navigate(`/cp/orders/${ele.orderId}`)}
        return (
          <Col
            md={9}
            key={idx}
          onClick={() => Router.push(`/cp/orders/${ele.orderId}`)}
            // onClick={() => navigate(`/cp/orders/${ele.orderId}`)}
          >
            <div   className={styles.Product_right}>
              <div >
                <ProductCard
                  key={idx}
                  CatName={ele.catName}
                  ProductName={ele.productName}
                  image={ele.imageId}
                  Rate={ele.rate === 0 ? 1 : ele.rate}
                  id={ele.orderId}
                  MarketImage={ele.matgarLogo}
                  imgWid={118}
                  imgHei={110}
                />
              </div>
              <div  className={styles.Orderinfo}>
                <div>
                  <p>رقم الاوردر: {ele.orderId}</p>
                  <p>{ele.dat}</p>
                </div>
                <p  className={styles.track}>رقم التتبع: {ele.trackId}</p>
                <div>
                  <p>الكمية: {ele.amount}</p>
                  <p>الحساب الاجمالي: {ele.total} ج</p>
                </div>
                <div className="f_log">
                  <button name="login" type="button"  className={styles.submit_button}>
                    التفاصيل
                  </button>
                  <p  className={styles.state}>{ele.stat}</p>
                </div>
              </div>
            </div>
          </Col>
        );
      })
    ) : (
      <Col>
        <div  className={styles.CartEmpty} id="working">
          <div  className={styles.card_container_empty}>
            <Image src={working} effect="blur" alt="empty" />
          </div>
          <h3>لا يوجد طلبات الان من العملاء</h3>
          <p>اضف منتجاتك و عروضك الخاصة لكي يتم جذب العملاء</p>
        </div>
      </Col>
    );

  return (
    <>
        <div  className={styles.Orders}>
      <h1 className={styles.main_heading}>جميع الطلبات</h1>
      <Container>
           <div className="ShopPage_ProductCard ShopPage_ProductCard_2">
                {/* <Row style={{width : '100%'}}> */}
                {OrderMatger} 
                {/* </Row> */}
              </div>
      </Container>
    </div>
<Service />
   <LastofOffersProducts />
    <FooterBar />
    </>
  
  );
};

export default Orders;
