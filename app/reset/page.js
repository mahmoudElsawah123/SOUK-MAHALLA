"use client"
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { HiOutlineMail } from "react-icons/hi";

import { getVerify } from "../../store/authSlice";
import { Toast } from "primereact/toast";
// import { Helmet } from "react-helmet";
import styles from "../page.module.css"
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const ResetPassword = () => {
  const toast = useRef(null);
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  const SendDate = (e) => {
    e.preventDefault();
    if (mail.length === 0) {
      EMptyInput();
    } else {
      const Sendmail = {
        code: mail,
      };
      dispatch(getVerify(Sendmail));
      // navigate("/SendCode");
      window.location.href = "/SendCode";
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "instant",
      });
    }
  };

  const EMptyInput = () => {
    toast.current.show({
      severity: "error",
      summary: "برجاء ادخال البريد الالكتروني",
      life: 3000,
    });
  };
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
      <Toast ref={toast} />
      <div  className={`${styles.LoginPage} ${styles.FrogetPasswordPage}`}>
        <h2>إعادة ارسال كلمة المرور </h2>
        <form>
          <div className={`${styles.search_section } ${styles.input_div}`}>
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="البريد الالكتروني"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label htmlFor="mail">
              <HiOutlineMail />
            </label>
          </div>

          <button
            name="login"
            type="submit"
            className={styles.submit_button}
            onClick={(e) => {
              SendDate(e);
            }}
          >
            ارسال
          </button>
        </form>
      </div>
      <Service />
   <LastofOffersProducts />
   <FooterBar />
    </>
  );
};

export default ResetPassword;
