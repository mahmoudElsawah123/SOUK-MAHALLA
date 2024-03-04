"use client"
import styles from "@/app/page.module.css"
import Service from "@/app/components/Service/Service";
import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
import FooterBar from "@/app/components/FooterBar/FooterBar";
import React, { useEffect, useState, useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EmptyCart from "@/public/images/emptyCart.svg";
import { TiDelete } from "react-icons/ti";
import { RiAddCircleLine } from "react-icons/ri";
// RiAddCircleLine
import {
  AddOffer,
  GetMatgerCats,
  GetMatgerOffers,
  getMatgarType,
} from "@/store/ControlPanalSlice";
import Modal from "react-bootstrap/Modal";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

import { Subcategories } from "@/store/CategoriesSlice";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { baseUrl } from "../../baseUrl";

const MyOffers = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const toast = useRef(null);
  const [priceBefor, setPriceBefor] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [description, setDescription] = useState("");
  const [date2, setDate2] = useState(null);
  const [images, setimages] = useState([]);
  const [cat, SelectCat] = useState(null);
  const [catid, SelectCatid] = useState(null);
  const [Matgercat, SelectMatgerCat] = useState(null);
  const [Matgercatid, MatgerSelectCatid] = useState(null);
  const [catSelected , setCatSelected] = useState(0)
  const { MatgerOffersArr } = useSelector(
    (state) => state.ControlPanalSlice
  );
  const { SubcategoriesArr } = useSelector((state) => state.CategoriesSlice);
  const [Categories , setCategories] = useState(null)
  const [RelatedCat , setRelatedCat] = useState(null)
const [RelatedcatSelected , setRelatedCatSelected] = useState(0)
  useEffect(()=>{
    if(catSelected > 0){
      const filterData = Categories.filter((ele)=>ele.id == catSelected)
      setRelatedCat(filterData[0].catList)
    }
 })
 
 
 
   useEffect(()=>{
     const UserId = window.localStorage.getItem("ClientId");
     dispatch(getMatgarType(UserId)).unwrap()
     .then((res) => {
        setCategories(res.categoriesData)
     });
   },[])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (!MatgerOffersArr) {
      const UserId = window.localStorage.getItem("ClientId");
      const Data = {
        id: UserId,
        page: 0,
      };
      dispatch(GetMatgerOffers(Data));
      dispatch(GetMatgerCats(UserId));
    }
  }, [dispatch, MatgerOffersArr]);

  const MatgerOfferData =
    MatgerOffersArr && MatgerOffersArr.length > 0 ? (
      MatgerOffersArr.map((ele, idx) => {
        const pathName = ele.name.replace(/\s/g, "-");
        const imageID = ele.images[0];
        return (
          <Col className={styles.Product_col} md={3} xs={6} key={idx}>
            <ProductCard
              key={idx}
              CatName={ele.catName}
              ProductName={ele.name}
              priceBefore={ele.priceBefore}
              priceAfter={ele.priceAfter}
              image={imageID}
              Rate={ele.rate}
              id={ele.id}
              pathName={pathName}
              MarketImage={ele.matgarLogo}
              Goto={"product"}
              matgarName={ele.matgarName}
            />
          </Col>
        );
      })
    ) : (
      <div className={styles.CartEmpty}>
        <div className={styles.card_container_empty}>
          <Image src={EmptyCart} effect="blur" alt="empty" />
        </div>
        <h3> لم يتم اضافة منتجات</h3>
        <p>اضف منتجاتك و عروضك الخاصة في المتجر</p>
      </div>
    );

  const UploadImge = (file) => {
    // console.log(file[0]);
    const test = [...file];
    // console.log(test);
    test.map((ele) => {
      const reader = new FileReader();
      reader.readAsDataURL(ele);

      return (reader.onload = () => {
        // Make a fileInfo Object
        const baseURL = reader.result;
        const position = baseURL.search("base64,");
        const res = baseURL.slice(position + 7);
        setimages((current) => [...current, res]);
      });
    });
  };
  const DeletImage = (e) => {
    const result = images.filter((ele) => ele !== e);
    setimages(result);
  };

  const ProductsImage = images.map((ele, idx) => {
    return (
      <div className={styles.Card_image} key={idx}>
        <LazyLoadImage
          src={`data:image/jpeg;base64,${ele}`}
          // src={`data:image/jpeg;base64,${Logo}`}
          // src={img}
          alt="matgerLogo"
          effect="blur"
          width={70}
          height={70}
        />
        <TiDelete onClick={() => DeletImage(ele)} />
      </div>
    );
  });
  let Selectcats = Categories && Categories.cats;
  const SelectMatgerCatsFilter = SubcategoriesArr && SubcategoriesArr.cats;


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
    const UserId = window.localStorage.getItem("ClientId");
    const today = new Date();
    if (
      name.length === 0 ||
      priceBefor.length === 0 ||
      priceAfter.length === 0 ||
      description.length === 0 ||
      images.length <= 0
    ) {
      showError();
    } else {
      const data = {
        userId: UserId,
        categoryId: 45,
        startDate: today,
        endDate: date2,
        OfferName: name,
        price: priceAfter,
        priceBefore: priceBefor,
        description,
        images,
      };
      dispatch(AddOffer(data));
      dispatch(GetMatgerOffers( {
        id: UserId,
        page: 0,
      }));
      showSuccess();
      handleClose()
    }
  };

  const onCatChange = (e) => {
    SelectCat(e);
    SelectCatid(e);
    dispatch(Subcategories(e));
  };

  const onMatgerCatChange = (e) => {
    SelectMatgerCat(e.value);
    MatgerSelectCatid(e.value.id);
  };

  return (
    <>
    <div className={styles.MyProducts}>
      <Toast ref={toast} />
      <h1 className={styles.main_heading}> جميع العروض</h1>
      <button
        name="اضافة عرض"
        type="button"
        className={styles.submit_button}
        onClick={() => {
          handleShow();
        }}
      >
        اضغط لاضافة عرض جديد
        <RiAddCircleLine />
      </button>
      <Row>{MatgerOfferData}</Row>
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>اضافة عرض جديد</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.pro_input_div}>
              <label htmlFor="selectcat">اختار التصنيف</label>
              <select className="form-select" aria-label="Default select example" onChange={(e)=> setCatSelected(e.target.value)}>
               {Categories ?
                 Categories.map((ele)=>{
                  return (
                     <option value={ele.id} key={ele.id} >{ele.name}</option>
                  )
                 })
                : null}
            </select>
            </div>
            {RelatedCat ? 
               <div className={styles.pro_input_div}>
               <label htmlFor="selectcat">اختار التصنيف الفرعي</label>
               <select className="form-select" aria-label="Default select example" onChange={(e)=> setRelatedCatSelected(e.target.value)}>
               {RelatedCat ?
                 RelatedCat.map((ele)=>{
                  return (
                     <option value={ele.id} key={ele.id} >{ele.name}</option>
                  )
                 })
                : null}
            </select>
             </div>
              : null}
            <div className={styles.pro_input_div}>
              <label htmlFor="name">اسم العرض</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={`${styles.grid} ${styles.formgrid} ${styles.p_fluid}`}>
              {/* <div className="field col-12 md:col-4">
                <label htmlFor="basic">اختار تاريخ النهاية</label>
                <Calendar
                  id="basic"
                  value={date2}
                  onChange={(e) => setDate2(e.value)}
                  dateFormat="mm-dd-yy"
                />
              </div> */}

              <div className={`${styles.field}  md:col-4`}>
                <label htmlFor="basic" className="text-start">اختار تاريخ النهايه</label>
                <input type="date"
                className="w-100"
                  id="basic"
                  value={date2}
                  onChange={(e) => setDate2(e.target.value)}
                  dateFormat="mm-dd-yy"
                />
              </div>
            </div>
            <div className={styles.pro_input_div}>
              <label htmlFor="price">السعر قبل </label>
              <input
                type="number"
                name="price"
                id="price"
                value={priceBefor}
                onChange={(e) => setPriceBefor(e.target.value)}
              />
            </div>
            <div className={styles.pro_input_div}>
              <label htmlFor="price">السعر بعد</label>
              <input
                type="number"
                name="price"
                id="price"
                value={priceAfter}
                onChange={(e) => setPriceAfter(e.target.value)}
              />
            </div>

            <div className={styles.pro_input_div}>
              <label htmlFor="storeImage">صورة المنتج</label>
              <div className={styles.select_product_Image}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="storeImage"
                  name="storeImage"
                  accept="image/*"
                  multiple={true}
                  onChange={(e) => {
                    UploadImge(e.target.files);
                  }}
                />
                <label htmlFor="storeImage" className={styles.chosseProImages}>
                  اختر
                </label>
              </div>
            </div>
            <div  className={`${styles.MatgerImage}  ${styles.ProductIamge}`}>{ProductsImage}</div>

            <div className={styles.pro_input_div}>
              <label htmlFor="description">وصف العرض</label>
              <Form.Control
                as="textarea"
                id="description"
                placeholder="وصف العرض"
                style={{ height: "200px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              name="حفظ"
              type="submit"
              className={styles.submit_button}
              onClick={(e) => {
                SendDate(e);
              }}
            >
              رفع المنتج
            </button>
        </Modal.Body>
      </Modal>
    </div>
    <Service />
   <LastofOffersProducts />
    <FooterBar />
    </>

  );
};

export default MyOffers;
