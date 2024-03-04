import { baseUrl } from "../baseUrl"

  export async function getMostViewed() {
    const res = await fetch(`${baseUrl}/rest/rest.matgar/getMostViewed`,{
      method : 'POST',
      body : JSON.stringify({
        "id" : 4,
        "page" : 0
      }),
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
        'Content-Type': 'application/json',
      } 
  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return ""
    }
   
    return res.json()
  }

  export default async function sitemap(){
  //   const baseLocalUrl = "https://souq-mahala.com"

  //  const mostView = await getMostViewed()

  //  const getViews = mostView? mostView.offers.map((item)=>{
  //    return {
  //      url : `${baseLocalUrl}/product/${item.id}`,
  //      lastModified : new Date()
  //    }
  // }) : []



      return [
        // {
        //     url: `${baseLocalUrl}`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cart`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cart/Process`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/about`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/active-products`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/all-products`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/contact`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/invitation `,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/my-offers `,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/my-products `,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/OrderDetails`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/orders`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/services`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/store-data`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/suggestion`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/technical-support`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/cp/UserSetting`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/login`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/matgars/NewPassword`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/offers`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/reset`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/SendCode`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/shop`,
        //     lastModified: new Date(),
        //   },
        //   {
        //     url: `${baseLocalUrl}/sign-up`,
        //     lastModified: new Date(),
        //   },
                // ...getViews
      ]
  }