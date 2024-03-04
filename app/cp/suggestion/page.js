"use client"
import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Toast } from "primereact/toast";
import styles from "@/app/page.module.css";
import { makeComplain } from "@/store/ControlPanalSlice";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const Suggestion = () => {
  const [text, setText] = useState("");
  const toast = useRef(null);
  const dispatch = useDispatch();
  const sendData = (e) => {
    e.preventDefault();
    if (text.length <= 0) {
      EMptyInput();
    } else {
      const Data = {
        userId: 4,
        complain: text,
      };
      dispatch(makeComplain(Data))
        .unwrap()
        .then((originalPromiseResult) => {
          if (originalPromiseResult.saved) {
            showSuccess();
          }
        });
    }
  };
  const EMptyInput = () => {
    toast.current.show({
      severity: "error",
      summary: "برجاء ادخال الشكوي او الاقتراح المطلوب",
      life: 3000,
    });
  };
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "تم ارسال اقتراحك / شكوتك بنجاح",
      // detail: "Message Content",
      life: 3000,
    });
    // return true;
  };
  return (

    <>
    <div className={`${styles.Suggestion} ${styles.MyProducts}`}>

      <Toast ref={toast} />
      <h1 className={styles.main_heading} >عمل اقتراح او شكوي</h1>
      <form>
        {/* <div className="pro-input-div">
          <label htmlFor="name">اسم الخدمة</label>
          <input type="text" name="name" id="name" />
        </div> */}
        <div className={styles.pro_input_div}>
          {/* <label htmlFor="description">وصف الخدمة</label> */}
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
            as="textarea"
            id="description"
            placeholder="اكتب اقتراحك او شكوتك لكي يتم التواصل معك "
            style={{ height: "200px" }}
          />
        </div>
        <button
          name="حفظ"
          type="submit"
        className={styles.submit_button}
          onClick={(e) => {
            sendData(e);
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

export default Suggestion;
