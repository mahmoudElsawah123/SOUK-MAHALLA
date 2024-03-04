// import fs from 'fs';
// import { Feed } from 'feed';
// import { baseUrl } from '../app/baseUrl';


//  export async function postApi(param) {
//   const res = await fetch(`${baseUrl}/rest/rest.matgar/getProductDetails`,{
//     method : 'POST',
//     body : JSON.stringify({
//       "productId" : param,
//     }),
//     cache : 'no-store',
//     headers : {
//       "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
//       'Content-Type': 'application/json',
//     } 
//   })

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     return ""
//   }
 
//   return res.json()
// }

  
// export default async function generateItemRss(param) {
//  const allPosts = await postApi(param)

//  const site_url = 'deltawy.net';

//  const feedOptions = {
//   title: 'دليل المحلة الإلكتروني',
//   description: 'دليل المحلة الإلكتروني - هو دليل ومحرك بحث شامل للشركات وهو دليل صناعي وتجاري وخدمي يشمل كافة القطاعات والأشخاص المهنيين ، من مميزات الدليل: طريقة العرض والبحث حداثة ودقة بياناته في جميع المجالات يتميز بأنه مطور بتقنيات برمجية حديثة الدليل بالكامل مجاناً لمن يريد البحث عن أي شئ يتميز بقوة نتائجه في محركات البحث يتميز الدليل بالسرعة في أرشفة البيانات في محركات البحث العالمية الدليل إشهار ممتاز للشركات التجارية والقطاعات الخدمية والأشخاص أصحاب الأعمال  ',
//   id: site_url,
//   link: site_url,
//   image: `${site_url}/logo.png`,
//   favicon: `${site_url}/favicon.png`,
//   copyright: `جميع الحقوق محفوظة لدي  شركه دلتاوي ${new Date().getFullYear()}, Ibas`,
//   generator: 'https://deltawy.com',
//   feedLinks: {
//    rss2: `${site_url}/rss.xml`,
//   },
//  };

//  const feed = new Feed(feedOptions);

//     feed.addItem({
//      title: allPosts.name,
//      id: `${allPosts.id}`,
//      link: `https://souq-mahala.com/product/${allPosts.id}/${allPosts.name.replace(/\s+/g, '-')}`,
//      description: allPosts.description.replace(/\s+/g, '-'),
//      author : allPosts.name,
//      copyright : 'https://deltawy.com',
//      content : allPosts.description.replace(/\s+/g, '-'),
//      guid : allPosts.name,
//      date: new Date(),
//     });
   
  
//  fs.writeFileSync(`./public/${param}.xml`, feed.rss2());
// }
import React from 'react'

const generateItemRss = () => {
  return (
    <div>
      
    </div>
  )
}

export default generateItemRss
