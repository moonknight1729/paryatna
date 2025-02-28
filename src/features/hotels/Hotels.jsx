import React from 'react'
import HotelSearch from './HotelSearch'
import DestinationList from './DestinationList'
import Offers from '@/features/offers/Offers'
import AppDownload from '@/AppDownload'

const Hotels = () => {
  return (
    <div>
      <HotelSearch/>
      <Offers/>
      <AppDownload/>
      <DestinationList/>

    </div>
  )
}

export default Hotels