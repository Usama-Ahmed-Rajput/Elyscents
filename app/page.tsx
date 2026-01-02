import React from 'react'
// import Header from '@/share-component/header/header'
import Main_image from '@/share-component/components/main_image/main_image'
import Crazy_deal from '@/share-component/components/crazy_deal/crazy_deal'
import Scents_deal from '@/share-component/components/scents_image/scents_deal'
import Best_perfume from '@/share-component/components/best_seller-perfume/best_perfume'
import Perfect_duo from '@/share-component/components/perfect_duo_image/perfect_duo'
import Perfume_for_her from '@/share-component/components/perfume_for_her/perfume_for_her'
import Perfume_for_him from '@/share-component/components/perfume_for_him/perfume_for_him'
import Oud_collection from '@/share-component/components/oud_collection/oud_collection'
import Product_collection_image from '@/share-component/components/product_collection_image/product_collection_image'
import Testimonials from '@/share-component/components/testimonials/testimonials'
import Retail_outlet from '@/share-component/components/our_retail_outlet/retail_outlet'
// import Footer from '@/share-component/footer/footer'
const page = () => {
  return (
    <>
      {/* <Header /> */}
      <Main_image />
      <Crazy_deal />
      <Scents_deal />
      <Best_perfume />
      <Perfect_duo />
      <Perfume_for_her />
      <Perfume_for_him />
      <Oud_collection/>
      <Product_collection_image/>
      <Testimonials/>
      <Retail_outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default page
