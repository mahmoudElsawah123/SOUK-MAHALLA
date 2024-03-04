"use client"
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveCustomerrders } from "@/store/ControlPanalSlice";
import { Col, Container, Row } from "react-bootstrap";
import EmptyCart from "@/public/images/emptyCart.svg";
import styles from '@/app/page.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import ProductCard from "@/app/components/ProductCard/ProductCard";

const ActiveProducts = () => {
  const dispatch = useDispatch();
  const { ActiveCustomerrdersArr } = useSelector(
    (state) => state.ControlPanalSlice
  );
  const router = useRouter();

  useEffect(() => {
    const UserId = window.localStorage.getItem("ClientId");
    if (!ActiveCustomerrdersArr) {
      dispatch(getActiveCustomerrders(UserId));
    }
  }, [ActiveCustomerrdersArr, dispatch]);

  const ALlClientOrders =
    ActiveCustomerrdersArr && ActiveCustomerrdersArr.data.length > 0 ? (
      ActiveCustomerrdersArr.data.map((ele, idx) => {
        return (
          <Col
            md={9}
            key={idx}
            onClick={() => router.push(`/cp/orders/${ele.orderId}`)}
          >
            <div className={styles.OrderProduct} >
              <div  className={styles.Product_right}>
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
              <div  className={styles.Orderinfo}>
                <div>
                  <p>رقم الاوردر: {ele.productId}</p>
                  <p>{ele.dat}</p>
                </div>
                {/* <p className="track">رقم التتبع: {ele.trackId}</p> */}
                <div>
                  <p>الكمية: {ele.units}</p>
                  <p>الحساب الاجمالي: {ele.total} ج</p>
                </div>
                <div>
                  <button name="login" type="button"  className={styles.submit_button}>
                    التفاصيل
                  </button>
                  <p  className={styles.state}>{ele.state}</p>
                </div>
              </div>
            </div>
          </Col>
        );
      })
    ) : (
      <div className={styles.CartEmpty}>
        <div  className={styles.card_container_empty}>
          <Image src={EmptyCart} effect="blur" alt="empty" />
        </div>
        {/* <h2>لم تشتري منتجات بعد</h2> */}
        <h3>لا يوجد طلبات نشطة الان</h3>
        {/* <p>اضف منتجاتك و عروضك الخاصة في المتجر</p> */}
        <p>تصفح فئاتنا واكتشف أفضل عروضنا</p>
      </div>
    );
  return (
    <>  
    <div>
      <h1 className={styles.main_heading} >الطلبات النشطة</h1>

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

export default ActiveProducts;
