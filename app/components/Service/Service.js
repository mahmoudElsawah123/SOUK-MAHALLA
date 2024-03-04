"use client"
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdSettings } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { MdOutlineRestore } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import styles from "@/app/page.module.css"
const Service = () => {
  return (
    <div  className={styles.service}>
      <Container>
        <Row className={styles.service_row}>
          <Col>
            <div  className={styles.column_content}>
              <IoMdSettings />
              <div className={styles.info}>
                <p>الدعم الفني</p>
                <span>دعم فنى على مدار الساعة</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.column_content}>
              <RiVisaLine />
              <div className={styles.info}>
                <p>الدفع</p>
                <span> %100 دقع امن و موثق</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.column_content}>
              <MdOutlineRestore />
              <div className={styles.info}>
                <p>ضمان الجودة</p>
                <span>منتجات عالية الجودة</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.column_content}>
              <HiLockClosed />
              <div className={styles.info}>
                <p>حسابات امنة</p>
                <span>حسابك مؤمن تماما</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
