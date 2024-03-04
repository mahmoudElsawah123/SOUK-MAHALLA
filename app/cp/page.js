"use client"
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import  styles from "@/app/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getjsonStrings, getUserInfo } from "@/store/ControlPanalSlice";
import Alert from "react-bootstrap/Alert";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";

const ControlPanal = () => {
  const dispatch = useDispatch();

  const { userInfo, JsonStringsArr } = useSelector(
    (state) => state.ControlPanalSlice
  );
  useEffect(() => {
    const UserId = window.localStorage.getItem("ClientId");
    if (!userInfo) {
      dispatch(getUserInfo(UserId))
        .unwrap()
        .then((res) => {
          window.localStorage.setItem("souqUserName", res.name);
          window.localStorage.setItem("souqUserEmail", res.email);
          window.localStorage.setItem("souqUserPhone", res.phone);
          window.localStorage.setItem("souqUseraddress", res.address);
          window.localStorage.setItem("souqUserLogo", res.logo);
          // setName(res.name);
          // setMail(res.email);
          // setPhone(res.phone);
          // setAddress(res.address);
          // setLoadingImage(res.logo);
        });
    }

    if (!JsonStringsArr) {
      dispatch(getjsonStrings(UserId));
    }
  }, [dispatch, userInfo, JsonStringsArr]);

  const Pending =
    JsonStringsArr &&
    JsonStringsArr.map((ele, idx) => {
      return (
        <Alert key={idx} variant={"danger"}>
          {ele.name}
        </Alert>
      );
    });

  return (
    <>
        <div className={styles.ControlPanal} >
      <Container  >
        {Pending}

      </Container>
    </div>
<Service />
   <LastofOffersProducts />

    <FooterBar />
    </>

  );
};

export default ControlPanal;
