"use client"
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link"
import MapTech from "./MapTech/MapTech";
import styles from  "@/app/page.module.css";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const Technical = () => {
  const [phone, setPhone] = useState("+20 106 743 9828");
  const [address, setAddress] = useState("الشون / ميدان عبد ربه / برج المجد ");
  const [faceBook, setfaceBook] = useState("www.facebook.com/deltawyNet");
  const [email, setEmail] = useState("deltawynet@gmail.com");
  return (

    <>
 <Service />
   <LastofOffersProducts />
    <FooterBar />
   
    <div className={`${styles.Technical} ${styles.Contact}`}>
      <h1 className={styles.main_heading}>الدعم الفني</h1>
      <Container>
        <Row>
          <Col md={5}>
            <form>
              <div className={`${styles.pro_input_div} ${styles.tech_Div}`} >
                <p>تليفون المحمول</p>
                <span>
                 <Link
                    href={`tel:01067439828`}
                    // href={`${ALLClientDetails.face}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {phone}
                    <BsTelephoneFill />
                  </Link>
                </span>
              </div>
              <div className={`${styles.pro_input_div} ${styles.tech_Div}`}>
                <label htmlFor="address">العنوان</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  disabled
                />
              </div>{" "}
              <div className={`${styles.pro_input_div} ${styles.tech_Div}`}>
                <p>تليفون المحمول</p>
                <span>
                 <Link
                    href={`https://www.facebook.com/deltawyNet`}
                    // href={`${ALLClientDetails.face}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {faceBook}
                    <FaFacebookF />
                  </Link>
                </span>
              </div>
              <div className={`${styles.pro_input_div} ${styles.tech_Div}`}>
                <p> واتس اب</p>
                <span>
                  <Link
                    href={`http://api.whatsapp.com/send?phone=01067439828`}
                    // href={`${ALLClientDetails.face}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {phone}
                    <IoLogoWhatsapp />
                  </Link>
                </span>
              </div>
              <div className={`${styles.pro_input_div} ${styles.tech_Div}`}>
                <p>البريد الالكتروني</p>
                <span>
                 <Link
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {email}
                    <GrMail />
                  </Link>
                </span>
              </div>
            </form>
          </Col>
          <Col md={5} xs={12}>
            <MapTech />
          </Col>
        </Row>
      </Container>
    </div>

    </>
  );
};

export default Technical;
