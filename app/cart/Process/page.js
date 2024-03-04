// "use client"
// import React, { useState } from "react";
// import Visa from "@/public/images/Visa.png";
// import PayPal from "@/public/images/PayPal.png";
// import HomeDelivary from "";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { Container } from "react-bootstrap";
// import styles from "../../page.module.css"
// import Link from "next/link";
// import Image from "next/image";
// import Service from "@/app/components/Service/Service";
// import LastofOffersProducts from "@/app/components/lastProduct/LastofOffersProducts";
// import FooterBar from "@/app/components/FooterBar/FooterBar";
// const CartProcess = () => {
//   const [name, setName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardDate, setCardDate] = useState("");
//   const [password, setPassword] = useState("");
//   const [PayHome, setPayHome] = useState(true);
//   const [Confirmation, setConfirmation] = useState(false);
//   const CardInfo = !PayHome && (
//     <div>
//       <h3>معلومات الدفع</h3>
//       <div className={`${styles.input_div} ${styles.search_section}`}>
//         <label htmlFor="name">الاسم في البطاقة</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="برجاء ادخال الاسم "
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className={`${styles.input_div} ${styles.search_section}`} >
//         <label htmlFor="cardNumber"> رقم البطاقة</label>
//         <input
//           type="text"
//           name="cardNumber"
//           id="cardNumber"
//           placeholder="  برجاء ادخال رقم البطاقة "
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//         />
//       </div>
//       <div className={`${styles.input_div} ${styles.search_section}`}>
//         <label htmlFor="cardDate">تاريخ البطاقة</label>
//         <input
//           type="text"
//           name="cardDate"
//           id="cardDate"
//           placeholder="برجاء ادخال تاريخ البطاقة "
//           value={cardDate}
//           onChange={(e) => setCardDate(e.target.value)}
//         />
//       </div>
//       <div className={`${styles.input_div} ${styles.search_section}`}>
//         <label htmlFor="password2"> الرقم السرى </label>
//         <input
//           type="password"
//           name="password2"
//           id="password2"
//           placeholder="برجاء ادخال  الرقم السرى "
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//     </div>
//   );

//   const FinalPay = (
//     <div>
//       <h2 className="text-center">الشحن و الدفع</h2>
//       <h3 className="text-right" >اخر طريقة الدفع</h3>
//       <div className={styles.Select_PatType_container}>
//         <div className={styles.radio_container}>
//           <label htmlFor="home">
//             <div className={styles.card_image}>
//               <Image
//                 effect="blur"
//                 src={HomeDelivary}
//                 alt="HomeDelivary"
//               />
//             </div>
//             <p>الدفع عند الاستلام</p>
//           </label>
//           <input
//             type="radio"
//             id="home"
//             name="pay"
//             value="home"
//             onChange={() => setPayHome(true)}
//             checked={PayHome === true}
//           />
//         </div>

//         <div className={styles.radio_container}>
//           <label htmlFor="visa">
//             {" "}
//             <div className={styles.card_image}>
//               <Image effect="blur" src={Visa} alt="Visa" />
//             </div>
//             <p>الفيزا</p>
//           </label>
//           <input
//             type="radio"
//             id="visa"
//             name="pay"
//             value="visa"
//             onChange={() => setPayHome(false)}
//           />
//         </div>
//         <div className={styles.radio_container}>
//           <label htmlFor="paypal">
//             {" "}
//             <div className={styles.card_image}>
//               <Image effect="blur" src={PayPal} alt="PayPal" />
//             </div>
//             <p>البى بال</p>
//           </label>
//           <input
//             type="radio"
//             id="paypal"
//             name="pay"
//             value="paypal"
//             onChange={() => setPayHome(false)}
//           />
//         </div>
//       </div>
//       {CardInfo}
//       <button
//         name="login"
//         type="submit"
//          className={styles.submit_button}
//         onClick={(e) => {
//           // SendDate(e);
//           setConfirmation(true);
//         }}
//       >
//         تاكيد
//       </button>
//     </div>
//   );

//   const ConfirmationContainer = Confirmation ? (
//     <div  className={styles.Confirmed}>
//       <AiFillCheckCircle className={styles.Confirmed_icon} />
//       <h2>عملية الشراء تمت بنجاح</h2>
//       <p>ستصلك رسالة عبر بريدك الالكترونى ببيانات الشحنة</p>
//       <span>رقم الشحنة هو 51597 </span>
//       <button
//         name="BackHome"
//         type="button"
//         className={styles.submit_button}
//         onClick={(e) => {
//           // SendDate(e);
//         }}
//       >
//        <Link href={"/"}> العودة الى الرئيسية
//        </Link>
//       </button>
//     </div>
//   ) : (
//     FinalPay
//   );

//   return (
// <>
//     <div  className={styles.CartProcess}>
//       {/* <MetaTags>
//         <title> سوق المحلة</title>
//       </MetaTags> */}
//       <Container className="pb-4">
//         <div  className={styles.CartProcess_container}>{ConfirmationContainer}</div>
//       </Container>
//       </div>
//        <Service />
//     <LastofOffersProducts />

//     <FooterBar />
  
//     </>
//     );
// };

// export default CartProcess;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page