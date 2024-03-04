"use client"


import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import styles from "../page.module.css"
import Service from "../components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const NewPassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <>
    <div  className={styles.LoginPage}>
      
      <h2 className="text-center">انشاء كلمة سر جديدة</h2>
      <form>
        <div  className={`${styles.input_div} ${styles.search_section}`}>
          <input
            type="password"
            name="password1"
            id="password1"
            placeholder="كلمة السر الجديدة"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <label htmlFor="password1">
            <RiLockPasswordFill />
          </label>
        </div>

        <div className={`${styles.input_div} ${styles.search_section}`}>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="اعادة كتابة كلمة السر"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <label htmlFor="password2">
            <RiLockPasswordFill />
          </label>
        </div>

        <button
          name="login"
          type="submit"
          className={styles.submit_button}
          onClick={(e) => {
            // SendDate(e)
            navigate("/");
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "instant",
            });
          }}
        >
        <Link href={"/"} > ارسال
        </Link></button>
      </form>
    </div>
    <Service />
 <LastofOffersProducts />
 <FooterBar />
    </>
  );
};

export default NewPassword;
