"use client"
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiData, BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { BsInfoLg, BsStack } from "react-icons/bs";
import {
  MdSettingsSuggest,
  MdLocalOffer,
  MdDesignServices,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { TbMessages } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@/store/ControlPanalSlice";
import { ClearCart } from "@/store/ShopSlice";

import styles from "@/app/page.module.css"
import Link from "next/link";
const ControlNav = ({ type, handleClose }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.ControlPanalSlice);
  const [getSouqLogin , setGetSouqLogin] = useState(false)
  useEffect(() => {
    setGetSouqLogin(window.localStorage.getItem('souqLogin'))
  }, []);
  const NavHeader = userInfo && (
    <div  className={styles.control_nav_header}>
      <div className={styles.Card_image}>
        <LazyLoadImage
          src={`https://souq.deltawy.com/imag?id=${userInfo.logo}`}
          alt="name"
          effect="blur"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <h4> {userInfo.name}</h4>
        <p>{userInfo.email}</p>
        <Link
          onClick={() => {
            if (type === "navBottom") {
              handleClose();
            }
          }}
          // // style={navLinkStyles}
         href={"/cp/UserSetting"}
          className={styles.edite_buuton}
        >
          تعديل الملف الشخصي
        </Link>
      </div>
    </div>
  );
  return (
    <div className={`ContolNav ${type === "navBottom" ? "navBottom" : ""}`}>
      {NavHeader}
      {getSouqLogin ? (
        <div  className={`${styles.nav_pad} ${styles.Admin_control_nav}`}>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/store-data"}
          >
            <BiData />
            بيانات المتجر
          </Link>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/orders"}
          >
            <BsStack />
            الطلبات
          </Link>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/my-products"}
          >
            <MdProductionQuantityLimits />
            منتجاتي
          </Link>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/my-offers"}
          >
            <MdLocalOffer />
            العروض
          </Link>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/services"}
          >
            <MdDesignServices />
            خدماتي
          </Link>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/contact"}
          >
            <TbMessages />
            معلومات التواصل
          </Link>
        </div>
      ) : (
        <div  className={`${styles.nav_pad} ${styles.client_control_nav}`}>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/all-products"}
          >
            <TbMessages />
            جميع الطلبات
          </Link>
          <Link
            // style={navLinkStyles}
            onClick={() => {
              if (type === "navBottom") {
                handleClose();
              }
            }}
           href={"/cp/active-products"}
          >
            <TbMessages />
            الطلبات النشطة
          </Link>
        </div>
      )}
      <div className={`${styles.nav_pad} ${styles.main_control_nav}`}>
        <Link
          // style={navLinkStyles}
          onClick={() => {
            if (type === "navBottom") {
              handleClose();
            }
          }}
         href={"/cp/invitation"}
        >
          <IoIosPersonAdd />
          دعوة الاصدقاء
        </Link>
        <Link
          // style={navLinkStyles}
          onClick={() => {
            if (type === "navBottom") {
              handleClose();
            }
          }}
         href={"/cp/technical-support"}
        >
          <BiSupport />
          الدعم الفنى
        </Link>
        <Link
          // style={navLinkStyles}
          onClick={() => {
            if (type === "navBottom") {
              handleClose();
            }
          }}
         href={"/cp/suggestion"}
        >
          <MdSettingsSuggest />
          عمل اقتراح او شكوى
        </Link>
        <Link
          // style={navLinkStyles}
          onClick={() => {
            if (type === "navBottom") {
              handleClose();
            }
          }}
         href={"/cp/about"}
        >
          <BsInfoLg />
          عن التطبيق
        </Link>
        <Link
          // style={navLinkStyles}
          onClick={() => {
            dispatch(Logout());
            dispatch(ClearCart());
            if (type === "navBottom") {
              handleClose();
            }
          }}
         href={"/"}
        >
          <FiLogOut />
          تسجيل الخروج
        </Link>
      </div>
    </div>
  );
};

export default ControlNav;
