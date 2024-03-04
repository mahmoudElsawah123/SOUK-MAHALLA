"use client"
import React, { useEffect, useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EmptyCart from "@/public/images/emptyCart.svg";
import {
  getMatgarServices,
  SaveService,
  UpdateService,
} from "@/store/ControlPanalSlice";
import { RiEdit2Line } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";

import { Toast } from "primereact/toast";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const Services = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [val, setVal] = useState("");
  const [id, setId] = useState(1);
  const [edit, setEdit] = useState(false);
  const toast = useRef(null);
  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };
  const handleShow = () => setShow(true);

  // getMatgarServices MatgarServicesArr
  const { MatgarServicesArr } = useSelector((state) => state.ControlPanalSlice);

  useEffect(() => {
    if (!MatgarServicesArr) {
      const UserId = window.localStorage.getItem("ClientId");
      dispatch(getMatgarServices(UserId));
    }
  }, [dispatch, MatgarServicesArr]);

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
  const SendDataAhndeller = (e) => {
    const UserId = window.localStorage.getItem("ClientId");

    if (name.length === 0 || val.length === 0) {
      showError();
    } else {
      const data = {
        userId: UserId,
        id,
        name,
        val,
      };
      dispatch(SaveService(data))
        .unwrap()
        .then((res) => {
          dispatch(getMatgarServices(UserId));
          showSuccess();
          setShow(false);
          setEdit(false);
        });
    }
  };

  const EditHandeller = (e) => {
    // console.log(e);
    setEdit(true);
    // setShow(true);
    setName(e.name);
    setVal(e.val);
    setId(e.id);
    handleShow();
  };

  const MyServices =
    MatgarServicesArr && MatgarServicesArr.length > 0 ? (
      MatgarServicesArr.map((ele, idx) => {
        return (
          <li key={idx} onClick={(e) => EditHandeller(ele)}>
            <span>
              {ele.name}/{ele.val}
            </span>
            <span className={styles.edit_icon} >
              <RiEdit2Line />
            </span>
          </li>
        );
      })
    ) : (
      <div className={styles.CartEmpty}>
        <div className={styles.card_container_empty}>
          <Image src={EmptyCart} effect="blur" alt="empty" />
        </div>
        <h2>لم تقوم بأضافة خدمات بعد</h2>
        <p>
          قم بأضافة خدمات متجرك لكي يتم التسهيل علي العميل معرفة التفاصيل الخاصة
          بمتجرك
        </p>
      </div>
    );

  const sendEdit = (e) => {
    const UserId = window.localStorage.getItem("ClientId");
    if (name.length === 0 || val.length === 0) {
      showError();
    } else {
      const data = {
        userId: UserId,
        id,
        name,
        val,
      };
      dispatch(UpdateService(data))
        .unwrap()
        .then((res) => {
          dispatch(getMatgarServices(UserId));
          showSuccess();
          setShow(false);
          setEdit(false);
        });
    }
  };

  return (
    <>
    <div className={`${styles.MyProducts}  ${styles.Services}`}>
      <Toast ref={toast} />

      <h1 className={styles.main_heading}>خدماتي</h1>
      <button
        name="اضافة خدمة"
        type="button"
        className={styles.submit_button}
        onClick={() => {
          setShow(true);
          handleShow();
          setName("");
          setVal("");
        }}
      >
        اضغط لاضافة خدماتك
        <RiAddCircleLine />
      </button>
      <div className={styles.services_cp}>
        <ul>{MyServices}</ul>
      </div>

      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>اضافة خدمة جديدة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className={styles.pro_input_div} >
              <label htmlFor="name">اسم الخدمة</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.pro_input_div}>
              <label htmlFor="description">وصف الخدمة</label>
              <Form.Control
                as="textarea"
                id="description"
                placeholder="وصف الخدمة"
                style={{ height: "200px" }}
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
            {edit ? (
              <button
                name="تعديل"
                type="submit"
                className={styles.submit_button}
                onClick={(e) => {
                  sendEdit(e);
                }}
              >
                حفظ
              </button>
            ) : (
              <button
                name="اضافة"
                type="submit"
                className={styles.submit_button}
                onClick={(e) => {
                  SendDataAhndeller(e);
                }}
              >
                اضافة
              </button>
            )}
        </Modal.Body>
      </Modal>
    </div>
    <Service />
   <LastofOffersProducts />
    <FooterBar />
    </>
  );
};

export default Services;
