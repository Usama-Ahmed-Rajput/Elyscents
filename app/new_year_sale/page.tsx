import React from 'react'
import New_year_special from '@/share-component/components/new_year_special/new_year_special'
import Best_perfume from '@/share-component/components/best_seller-perfume/best_perfume'
import Perfume_for_him from '@/share-component/components/perfume_for_him/perfume_for_him'
import Perfume_for_her from '@/share-component/components/perfume_for_her/perfume_for_her'
// import New_arrivals from '@/share-component/components/new_arrivals/new_arrivals'
import Oud_collection from '@/share-component/components/oud_collection/oud_collection'
const Page = () => {
  return (
    <>
      <New_year_special />
      <Best_perfume />
      <Perfume_for_him />
      <Perfume_for_her />
      {/* <New_arrivals /> */}
      <Oud_collection />
    </>
  )
}

export default Page
