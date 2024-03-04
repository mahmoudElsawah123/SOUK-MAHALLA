import React from "react";
import {
  BsFillTelephoneFill,
  BsMessenger,
  BsWhatsapp,
  BsFileEarmarkPdf,
} from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebookF } from "react-icons/fa";
import styles from "../../page.module.css";
import Link from "next/link";
// import { ImageUrlGlobal } from ".@/app";
const MatgerHeader = ({
  coverImage,
  name,
  phone,
  face,
  messenger,
  whats,
  pdf,
}) => {
  return (
    <div className={styles.MatgerHeader}>
      <div className={styles.cardImage}>
        <LazyLoadImage
          effect="blur"
          src={`https://souq.deltawy.com/imag?id=${coverImage}`}
          alt={name}
        />
      </div>
      <h1>{name}</h1>
      <div className={styles.Links}>
        <span>
          <Link href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
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
            href={`https://souq.deltawy.com/${pdf}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFileEarmarkPdf />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default MatgerHeader;
