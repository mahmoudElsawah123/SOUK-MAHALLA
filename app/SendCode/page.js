"use client"
import React, { useRef, useState } from "react";
import OtpInput from "react-otp-input";
// import { Helmet } from "react-helmet";
import { Toast } from "primereact/toast";
import styles from "../page.module.css";
import Link from "next/link";
import Service from "../components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const SendCode = () => {
  const toast = useRef(null);
  const [code, setCode] = useState({ otp: "" });
  const handleChange = (otp) => {
    setCode({ otp });
  };
  const renderInput = (inputProps) => {
    return <input {...inputProps} />;
  };
  const ResendCode = () => {
    toast.current.show({
      severity: "success",
      summary: "تم ارسال الرمز مرة أخري",
      life: 3000,
    });
    // return true;
  };
  return (
    <>
    <div className={`${styles.SendCode} ${styles.LoginPage}`}>

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

      <h2 className="text-center">لقد تم ارسال رسالة الى بريدك الابكترونى</h2>
      <form>
          
        <div  className={styles.otp_container} >
        <OtpInput
  value={code.otp}
  onChange={handleChange}
  numInputs={4}
  separator={<span>-</span>}
  placeholder={"****"}
  inputStyle={{
    width: "4rem",
    height: "4rem",
    margin: "0 1rem",
    fontSize: "2rem",
    borderRadius: 12,
  }}
  renderInput={renderInput} // Add this line
/>
        </div>
        <button
          name="login"
          className={styles.submit_button}
          type="submit"
          onClick={(e) => {
            // SendDate(e)
            // navigate("/NewPassword");
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "instant",
            });
          }}
        >
        <Link href={"/NewPassword"}>  ارسال الكود
        </Link></button>
        <button
          name="resend_code"
          type="button"
          className={styles.resend_code}
          onClick={(e) => {
            e.preventDefault();
            ResendCode();
          }}
        >
          ارسال الرمز مرة اخرى
        </button>
      </form>
    </div>
 <Service />
 <LastofOffersProducts />
 <FooterBar />
</>
  );
};

export default SendCode;
