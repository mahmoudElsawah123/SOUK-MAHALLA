import dynamic from 'next/dynamic'
import React from 'react'
// import generateRssCats from '@/lib/generateBranchRss'
import BranchesProducts from '@/app/components/branch/Branch'


export const metadata = {
  title: 'سوق المحله الكبري',
  type : 'market',
  description: 'سوق المحلة شباشب حريمي محفظة حريمي موبايلات مكياج'
}


const page = async({params}) => {
  // await generateRssCats(params.id[0])
  metadata.title = params.id.length > 1 ? decodeURIComponent(params.id[1]) :  'سوق المحله الكبري'
  return (
    <>
       <BranchesProducts params={params}/>
    </>
  )
}

export default page
