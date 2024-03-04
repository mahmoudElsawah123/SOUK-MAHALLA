import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import styles from "../../page.module.css";
import Link from "next/link";

const MatgerDescription = ({ description, face, address, name, call }) => {
  return (
    <div className={styles.MatgerDescription}>
      <Container>
        <h2  className={styles.heading}>وصف المتجر</h2>
        <Row>
          <Col md={6}>
            <div  className={styles.description_p}>{description}</div>
          </Col>
          <Col md={5}>
            <div  className={styles.Follow_us_div}>
              <h3>تابعنا عبر صفحتنا على الفيس بوك</h3>
              <span>
                <Link href={`${face}`} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF /> {name}
                </Link>
              </span>
              <div  className={styles.Facebook_iframe_container}>
                {/* <h2 className="text-center">تابعنا علي صفحتنا </h2> */}
                {/* <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${face}%2Ffacebook&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  // style="border:none;overflow:hidden"
                  style={{ width: "300px", height: "500px" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook"
                /> */}
                <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${
                    face && face.length > 10
                      ? face
                      : "https://www.facebook.com/souq.mahala"
                  }%2Ffacebook&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FdeltawyNet&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=604078597782974"
                  style={{ width: "300px", height: "500px" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook"
                ></iframe>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.LastDescription_div}>
              <div className={styles.div_info}>
                <h4>فروعنا</h4>
                <div>
                  <MdLocationPin />
                  <p>{address}</p>
                </div>
              </div>
              <div  className={styles.div_info}>
                <h4>للتواصل</h4>
                <div>
                  <p>{call}</p>
                  <FaPhoneAlt />
                  {/* <p>{phone}</p> */}
                </div>
              </div>
              {/* <div className="div-info">
                <h4>للتواصل</h4>
                <div>
                  <FaPhoneAlt />
                  <p>01149786406</p>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MatgerDescription;
