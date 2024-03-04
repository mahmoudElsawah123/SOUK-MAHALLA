"use client"
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { getRegister } from "../../store/authSlice";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill, BsTelephone } from "react-icons/bs";
import { Toast } from "primereact/toast";
import styles from  "../page.module.css";
import { GetFromCart } from "../../store/ShopSlice";
import { getjsonStrings } from "../../store/ControlPanalSlice";
import Link from "next/link";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import Service from "@/app/components/Service/Service";
// import { Helmet } from "react-helmet";
// import { MetaTags } from "react-meta-tags";

const Register = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [client, setClient] = useState("1");

  const dispatch = useDispatch();
  // const { registerArr } = useSelector((state) => state.authSlice);
  const toast = useRef(null);

  // const result = registerArr ? registerArr.Result : null;
  const SendDate = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      mail.length === 0 ||
      password.length === 0 ||
      phone.length === 0
    ) {
      EMptyInput();
    } else {
      const data = {
        name,
        mail,
        password,
        phone,
        client,
      };
      console.log(data);
      dispatch(getRegister(data))
        .unwrap()
        .then((originalPromiseResult) => {
          if (originalPromiseResult.Errors.length > 0) {
            showError(originalPromiseResult.Errors[0].errorMSG);
          } else {
            console.log(originalPromiseResult);
            dispatch(GetFromCart(originalPromiseResult.id));
            dispatch(getjsonStrings(originalPromiseResult.id));
            window.location.href = "/cp";
            showSuccess();
          }
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
        });
    }
  };
  // client 1
  // client 0
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "تم تسجيل الدخول بنجاح",
      // detail: "Message Content",
      life: 3000,
    });
    // return true;
  };
  const showError = (e) => {
    toast.current.show({
      severity: "error",
      summary: e,
      detail: "برجاء التأكد من ادخل البيانات بشكل صحيح",
      life: 3000,
    });
  };

  const EMptyInput = () => {
    toast.current.show({
      severity: "error",
      summary: "برجاء ادخال جميع البيانات",
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

      <div className={`${styles.LoginPage } ${styles.Register}`} >
        <h2 className="text-center">انشاء حساب جديد</h2>
        <form>
          <div className={`${styles.search_section } ${styles.input_div}`} >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="اسم المستخدم"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="label_icon">
              <BsFillPersonFill />
            </label>
          </div>
          <div className={`${styles.search_section } ${styles.input_div}`}>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="رقم التليفون"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="phone" className="label_icon">
              <BsTelephone />
            </label>
          </div>
          <div className={`${styles.search_section } ${styles.input_div}`}>
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="البريد الالكتروني"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label htmlFor="mail" className="label_icon">
              <HiOutlineMail />
            </label>
          </div>
          <div className={`${styles.search_section } ${styles.input_div}`}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="label_icon">
              <RiLockPasswordFill />
            </label>
          </div>

          <div className={styles.Register_As_container} >
            <span> التسجيل ك</span>
            {["radio"].map((type) => (
              <div key={`inline-${type}`}  className={`${styles.type_radio } mb-3`}>
                <Form.Check
                  inline
                  label="تاجر"
                  name="تاجر"
                  type={type}
                  id={`inline-${type}-3`}
                  value={"1"}
                  checked={client === "1"}
                  onChange={(e) => setClient(e.target.value)}
                />
                <Form.Check
                  inline
                  label="مشتري"
                  name="مشتري"
                  type={type}
                  id={`inline-${type}-4`}
                  checked={client === "0"}
                  value={"0"}
                  onChange={(e) => setClient(e.target.value)}
                />
              </div>
            ))}
          </div>

          <button
            name="login"
            type="submit"
            className={styles.submit_button}
            // style={{color:"#fff !important"}}
            onClick={(e) => {
              SendDate(e);
              // navigate(`/reset`);
            }}
          >
           <Link href={"/reset"}  > تسجيل الدخول
           </Link></button>
          <div className={styles.go_to_regPage_container}>
            <span> لديك حساب ؟</span>
            <button
              className={styles.go_to_regPage_button}
              name="go-to-regPage-button"
              type="button"
              onClick={() => {
                // navigate(`/login`);
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }}
            >
             <Link href={"/login"}> تسجيل الدخول
             </Link></button>
          </div>
        </form>
      </div>
      <Service />

      <LastofOffersProducts />
   <FooterBar />
    </>
  );
};

export default Register;
