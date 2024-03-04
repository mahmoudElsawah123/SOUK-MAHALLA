"use client"
import React, { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import  styles from "@/app/page.module.css";
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
const Invitation = () => {
  const [inviteLink, setInviteLink] = useState(
    "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"
  );
  return (
    <>
    <div className={styles.Invitation} >
      <h1 className={styles.main_heading}>دعوة الاصدقاء </h1>
      <div className={styles.InviteIcons}>
        <FacebookShareButton
          url={
            "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"
          }
          title="facebook"
          quote={"title"}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <LinkedinShareButton
          url={
            "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"
          }
          title="facebook"
          quote={"title"}
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <TelegramShareButton
          url={
            "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"
          }
          title="facebook"
          quote={"title"}
        >
          <TelegramIcon size={40} round />
        </TelegramShareButton>
        <TwitterShareButton
          url={
            "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"
          }
          title="facebook"
          quote={"title"}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={
            "https://play.google.com/store/apps/details?id=com.detawy.souq_ma7alla"
          }
          title="facebook"
          quote={"title"}
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </div>
      <div className={styles.pro_input_div}>
        <label htmlFor="name">الموقع</label>
        <input
          disabled
          type="text"
          name="name"
          id="name"
          value={inviteLink}
          onChange={(e) => setInviteLink(e.target.value)}
        />
      </div>
    </div>

    <Service />
   <LastofOffersProducts />
    <FooterBar />
    
    </>
  );
};

export default Invitation;
