import generateProductRss from '@/lib/generateProductRss'
import MatagrComponent from '@/app/components/Matagr_Component/MatagrComponent'
 
export const metadata = {
  title: 'سوق المحله الكبري',
}


const page = async({params}) => {
  metadata.title = params.id.length > 1 ? decodeURIComponent(params.id[1]) :  'سوق المحله الكبري'
  await generateProductRss(params.id[0])
  return (
    <>
       <MatagrComponent params={params}/>
    </>
  )
}

export default page