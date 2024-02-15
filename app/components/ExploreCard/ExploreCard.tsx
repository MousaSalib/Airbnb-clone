import React from 'react'
import { ExploreItem } from '@/app/types/app'
import Image from 'next/image';
type ExploreCardProps = ExploreItem;

const ExploreCard = ({ img, location, distance}: ExploreCardProps) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative w-16 h-16'>
        <Image src={img} alt='exploreCard-image' fill/>
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default ExploreCard