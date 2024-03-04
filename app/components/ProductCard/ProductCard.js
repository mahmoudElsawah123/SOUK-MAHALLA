"use client"
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Rating } from "primereact/rating";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({

  image,
  CatName,
  ProductName,
  priceBefore,
  priceAfter,
  Rate,
  id,
  pathName,
  MarketImage,
  styleClass,
  Goto,
  imgWid,
  imgHei,
  matgarId,
  matgarName,
  hideLogo
}) => {
  const router = useRouter();

  return (
    // <div className={styles.ProductCard}>
    <div className={`${styles.ProductCard} ${styleClass ? styleClass : styles["normal_div"]}`}>
      <div className={styles.Card_img}  >
        {hideLogo ? null :
          <div className={styles.card_logo}>
            <Link href={`/matgar/${matgarId}/${matgarName}`} id="Card_img">
              <LazyLoadImage
                src={`https://souq.deltawy.com/imag?id=${MarketImage}`}
                alt="marketLogo"
                effect="blur"
                width={50}
                height={50}
                className={styles.logo}

              />
            </Link>
          </div>
        }


        <div className="IMG_CARD_CATEGORY" >
        <div className={styles.logo_imgg}  >
          <LazyLoadImage
            src={`https://souq.deltawy.com/imag?id=${image}`}
            alt={ProductName}
            className="logo_imgg"
            effect="blur"
            onClick={() => {
              if (Goto === "product") {
                router.push(`/product/${id}/${pathName}`);
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }
              if (Goto === "matgar") {
                router.push(`/matgar/${id}/${pathName}`);
                window.scrollTo({
                  top: 0,
                  left: 100,
                  behavior: "instant",
                });
              }
            }}
          />
        </div>
        </div>
      </div>

      <div className={styles.CardInfo}
      >
       

        <div className={styles.Product_Name}>
          <h3 onClick={() => {
            if (Goto === "product") {
              router.push(`/product/${id}/${pathName}`);
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }
            if (Goto === "matgar") {
              router.push(`/matgar/${id}/${pathName}`);
              window.scrollTo({
                top: 0,
                left: 100,
                behavior: "instant",
              });
            }
          }}>{ProductName.substring(0, 20) + '...'}</h3>

        </div>
        {/* onClick={() => {
            router.push(`/category/${matgarId}/${CatName}`);
          }} */}
        <h5 className=" "
          ><Link href={`/category/${matgarId}/${CatName}`} >{CatName}</Link> </h5>

      </div>
    </div>
    // </div>

  );
};

export default ProductCard;
