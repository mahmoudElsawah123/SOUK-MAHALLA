"use client"
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { catDetails } from "../../store/CategoriesSlice";
import SubSlickCat from "./SubSlickCat/SubSlickCat";
import { DeferredContent } from "primereact/deferredcontent";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "@/app/page.module.css";
// import { ImageUrlGlobal } from "@/app";
// const ReactTestLazy = React.lazy(() => import("./SubSlickCat/SubSlickCat"));
import { getBranchesProducts } from "@/store/CategoriesSlice";

const SlickCategories = ({ MainName, id, catList, backImage }) => {
  const {
    ColtheProducts,
    RoomsArr,
    FurnitureArr,
    getShoesArr,
    MobileArr,
    // SleepProducts,
    ChildrenArr,
    CarsArr,
    ComputerArr,
  } = useSelector((state) => state.CategoriesSlice);
  const dispatch = useDispatch();
  const ClotSLick = <SubSlickCat SlickId={id} />;
  const onDataLoad = () => {
    if (
      !ColtheProducts ||
      !FurnitureArr ||
      !getShoesArr ||
      !MobileArr ||
      !ChildrenArr ||
      !CarsArr ||
      !RoomsArr ||
      !ComputerArr
    ) {
      // catId: 3, userId: NaN, page: 0, query: ''
      const data = {
        catId: id,
        userId: 0,
        page: 0,
        query: "",
      };
      dispatch(getBranchesProducts(data));
    }
    return null;
  };
  const CatFilter = catList.map((ele, idx) => {
    return (
      <div key={idx} className={styles.Filter_section} >
        <button
          name={ele.nama}
          className={styles.buttonFilter}
          onClick={() => {
            dispatch(catDetails(ele.id));
          }}
        >
          {ele.name}
        </button>
      </div>
    );
  });

  return (
    <div className={styles.Slick_Categories_Home}>
      <Container fluid>
        <Row className="align-items-center ">
          <LazyLoadComponent>
            <Col md={3}>
              <div
                className={styles.MainCatBackgound}
                style={{
                  backgroundImage: `url(https://souq.deltawy.com/imag?id=${backImage})`,
                  position : 'relative'
                }}
              >
                <h2 className={styles.Main_title} style={{zIndex : 555}}>{MainName}</h2>
                <DeferredContent onLoad={() => onDataLoad()}>
                  <div>{CatFilter}</div>
                </DeferredContent>
                <div style={{position : 'absolute', width : '100%', height : '100%' , backgroundColor : '#00000036'}}></div>
              </div>
            </Col>
          </LazyLoadComponent>
          <Col md={8}>
            <LazyLoadComponent>{ClotSLick}</LazyLoadComponent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SlickCategories;
