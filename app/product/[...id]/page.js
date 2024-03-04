import React from 'react'
import generateItemRss from '@/lib/generateItemRss'
import ProductDetails from '@/app/components/product/page'

export const metadata = {
  title: 'سوق المحله الكبري',
}


const page = async({params}) => {
  metadata.title = params.id.length > 1 ? decodeURIComponent(params.id[1]) :  'سوق المحله الكبري'
  await generateItemRss(params.id[0])
  return (
    <>
       
       <ProductDetails params={params}/>
    </>
  )
}

export default page