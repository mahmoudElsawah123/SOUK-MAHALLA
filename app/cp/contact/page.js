"use client"
import styles from "@/app/page.module.css"
import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";

import {
  getMatgarInfo,
  updateMatgarInfo,
} from "@/store/ControlPanalSlice";
import MapContact from "./MapContact/MapContact";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";

const Contact = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [faceBook, setfaceBook] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const { MatgarInfoArr, MapLocation } = useSelector(
    (state) => state.ControlPanalSlice
  );
  console.log(MatgarInfoArr)
  useEffect(() => {
    const UserId = window.localStorage.getItem("ClientId");
    if (!MatgarInfoArr) {
      dispatch(getMatgarInfo(UserId))
        .unwrap()
        .then((res) => {
          setPhone(res.phone);
          setAddress(res.address);
          setEmail(res.phone);
          setWhats(res.whats);
          setfaceBook(res.face);
          setLat(res.lat);
          setLng(res.lang);
        });
    }
  }, [dispatch, MatgarInfoArr]);

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "برجاء ادخال جميع البيانات المطلوبة",
      life: 3000,
    });
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "تم تحديث البيانات بنجاح",
      life: 3000,
    });
  };

  const SendDate = (e) => {
    const UserId = window.localStorage.getItem("ClientId");
    e.preventDefault();
    if (
      phone.length === 0 ||
      address.length === 0 ||
      faceBook.length === 0 ||
      whats.length === 0
    ) {
      showError();
    } else {
      const data = {
        userId: UserId,
        email,
        phone,
        whats,
        face: faceBook,
        address,
        // lat: MapLocation.lat,
        // lang: MapLocation.lng,
      };
      dispatch(updateMatgarInfo(data))
        .unwrap()
        .then((res) => {
          dispatch(getMatgarInfo(UserId));
        });
      showSuccess();
    }
  };
  return (
    <>
        <div className={styles.Contact}>
      <Toast ref={toast} />

      <h1 className={styles.main_heading}>طرق التواصل</h1>
      <Container>
        <Row>
          <Col md={5}>
            <form>
              <div className={styles.pro_input_div}>
                <label htmlFor="phone">تليفون المحمول</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.pro_input_div}>
                <label htmlFor="address">العنوان</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>{" "}
              <div className={styles.pro_input_div}>
                <label htmlFor="faceBook">الفيس بوك</label>
                <input
                  type="text"
                  name="faceBook"
                  id="faceBook"
                  value={faceBook}
                  onChange={(e) => setfaceBook(e.target.value)}
                />
              </div>{" "}
              <div className={styles.pro_input_div}>
                <label htmlFor="whats">واتس اب</label>
                <input
                  type="number"
                  name="whats"
                  id="whats"
                  value={whats}
                  onChange={(e) => setWhats(e.target.value)}
                />
              </div>{" "}
              <div className={styles.pro_input_div}>
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                name="حفظ"
                type="submit"
                className={styles.submit_button}
                onClick={(e) => {
                  SendDate(e);
                }}
              >
                حفظ البيانات
              </button>
            </form>
          </Col>
          <Col md={5} xs={12}>
            <MapContact
              // latPro={MatgarInfoArr ? parseFloat(MatgarInfoArr.lat) : lat}
              // lngPro={MatgarInfoArr ? parseFloat(MatgarInfoArr.lang) : lng}
            />
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

export default Contact;
