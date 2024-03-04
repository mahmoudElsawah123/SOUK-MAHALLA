"use client"
import React from "react";
import {
  BsFillTelephoneFill,
  BsMessenger,
  BsWhatsapp,
  BsFileEarmarkPdf,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
// FaFacebookF
import styles from "@/app/page.module.css";
import Link from "next/link";
// import { ImageUrlGlobal } from "@/app";



const MatgerCard = ({
  name,
  face,
  whats,
  messenger,
  type,
  prodCount,
  offerCount,
  buys,
  rate,
  pdf,
  id,
  coverImage,
  matgarImage,
  catName,
  address,
  call,
  rateCount,
  pathName,
}) => {

  return (
    // `/matgar/${ele.id}/${pathname}
    <div  className={styles.MatgerCard} >
      <div
        className={styles.cardImage}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 100,
            behavior: "instant",
          });
        }}
      >
      <Link href={`/matgar/${id}/${pathName}`} > <LazyLoadImage
          effect="blur"
          src={`https://souq.deltawy.com/imag?id=${matgarImage}`}
          alt={name}
          width={200}
          height={200}
          // placeholderSrc={process.env.PUBLIC_URL + loading}
        /></Link>
      </div>
      <h2 className="text-center">{name}</h2>
      <h5>{catName}</h5>
      <div className={styles.Links}>
        <span>
          <Link href={`tel:${call}`} target="_blank" rel="noopener noreferrer">
            {" "}
            <BsFillTelephoneFill />
          </Link>
        </span>
        <span>
          <Link href={`${face}`} target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
        </span>

        <span>
          <Link href={`${messenger}`} target="_blank" rel="noopener noreferrer">
            <BsMessenger />
          </Link>
        </span>

        <span>
          <Link href={`${whats}`} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </Link>
        </span>

        <span>
          <Link
            href={`https://souq.deltawy.com${pdf}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFileEarmarkPdf />
          </Link>
        </span>
      </div>
      <div  className={styles.MatgerNumbers}>
        <div>
          <span>منتج</span>
          <p>{prodCount}</p>
        </div>
        <div>
          <span>عرض</span>
          <p>{offerCount}</p>
        </div>
        <div>
          <span>شراء</span>
          <p>{buys}</p>
        </div>
      </div>
    </div>
  );
};

export default MatgerCard;
