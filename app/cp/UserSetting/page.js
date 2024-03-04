"use client"
import React, { useRef, useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillCamera } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillPersonFill, BsTelephone } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import { Toast } from "primereact/toast";
// import { InputText } from "primereact/inputtext"; CiLocationOn
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserInfo, getUserInfo } from "@/store/ControlPanalSlice";
import styles from "./page.module.css";

const UserSetting = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.ControlPanalSlice);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [Logo, setUploadLogo] = useState("");
  const [loadngImage, setLoadingImage] = useState("");
  useEffect(() => {
    const settime = setTimeout(function () {
      setName(window.localStorage.getItem("souqUserName"));
      setMail(window.localStorage.getItem("souqUserEmail"));
      setPhone(window.localStorage.getItem("souqUserPhone"));
      setAddress(window.localStorage.getItem("souqUseraddress"));
      setLoadingImage(window.localStorage.getItem("souqUserLogo"));
    }, 500);

    return () => clearTimeout(settime);
  }, []);

  const toast = useRef(null);
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
    e.preventDefault();
    const UserId = window.localStorage.getItem("ClientId");
    if (
      name.length === 0 ||
      mail.length === 0 ||
      password.length === 0 ||
      phone.length === 0
    ) {
      showError();
    } else {
      const data = {
        uid: UserId,
        name,
        email: mail,
        password,
        phone,
        address,
        encryptedLogo: Logo,
      };
      dispatch(UpdateUserInfo(data))
        .unwrap()
        .then(() => {
          // console.log(res);
          dispatch(getUserInfo(UserId))
            .unwrap()
            .then((res) => {
              window.localStorage.setItem("souqUserName", res.name);
              window.localStorage.setItem("souqUserEmail", res.email);
              window.localStorage.setItem("souqUserPhone", res.phone);
              window.localStorage.setItem("souqUseraddress", res.address);
              window.localStorage.setItem("souqUserLogo", res.logo);
              setName(res.name);
              setMail(res.email);
              setPhone(res.phone);
              setAddress(res.address);
              setUploadLogo(res.logo);
              setLoadingImage(res.logo);
            });
          showSuccess();
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
        });
      // console.log(data);
    }
  };

  const UploadImge = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const baseURL = reader.result;
      const position = baseURL.search("base64,");
      const res = baseURL.slice(position + 7);
      setUploadLogo(res);
      setLoadingImage("");
    };
  };

  return (
    <div className={styles.setting} >
      <Toast ref={toast} />
      {userInfo && (
        <>
          <div className={styles.image_select_container}>
            <div className={styles.Card_image}>
              {loadngImage ? (
                <LazyLoadImage
                  src={`https://souq.deltawy.com/imag?id=${loadngImage}`}
                  // src={`data:image/jpeg;base64,${Logo}`}
                  // src={img}
                  alt={userInfo.name}
                  effect="blur"
                  width={100}
                  height={100}
                />
              ) : (
                <LazyLoadImage
                  // src={`https://souq.deltawy.com/imag?id=${userInfo.logo}`}
                  src={`data:image/jpeg;base64,${Logo}`}
                  // src={img}
                  alt={userInfo.name}
                  effect="blur"
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className={styles.select_div}>
              <label htmlFor="img">
                {" "}
                <AiFillCamera />
              </label>
              <input
                type="file"
                style={{ visibility: "hidden" }}
                id="img"
                name="img"
                accept="image/*"
                onChange={(e) => {
                  // getBase64(e.target.files[0]);
                  UploadImge(e.target.files[0]);
                }}
                // onChange={onFileChange}
              />
            </div>
          </div>
          <h1>{userInfo.name}</h1>
        </>
      )}
      <form className="form_UserSetting">
        <Row>
          <Col md={12}>
            <div className={`${styles.search_section} ${styles.contol_in_div}`} >
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
          </Col>
          <Col md={12}>
            <div className={`${styles.search_section} ${styles.contol_in_div}`} >
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="رقم التليفون"
                value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                disabled
              />
              <label htmlFor="phone" className="label_icon">
                <BsTelephone />
              </label>
            </div>
          </Col>
          <Col md={12}>
            <div className={`${styles.search_section} ${styles.contol_in_div}`} >
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="البريد الالكتروني"
                value={mail}
                disabled
              />
              <label htmlFor="mail" className="label_icon">
                <HiOutlineMail />
              </label>
            </div>
          </Col>
          <Col md={12}>
            <div className={`${styles.search_section} ${styles.contol_in_div}`} >
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
          </Col>
          <Col md={12}>
            <div className={`${styles.search_section} ${styles.contol_in_div}`} >
              <input
                type="text"
                name="address"
                id="address"
                placeholder="العنوان"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="address" className="label_icon">
                <GoLocation />
              </label>
            </div>
          </Col>
          <Col md={12}>
            <button
              name="save"
              type="submit"
              className={styles.submit_button}
              onClick={(e) => {
                SendDate(e);
              }}
            >
              حفظ
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default UserSetting;
