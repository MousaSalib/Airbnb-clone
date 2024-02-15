import React from 'react'
import ExploreCard from '../ExploreCard/ExploreCard'
import { getExplore } from '@/app/utils/api'
import { ExploreData } from '@/app/types/app';
import MainHeader from '../MainHeader/MainHeader';

const Explore = async() => {
  const exploreData: ExploreData = await getExplore();
  return (
    <section className='pt-5'>
        <div className="container">
            <MainHeader title='Explore Nearby'/>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {exploreData.map((item) => (
                <ExploreCard 
                  key={item.img} 
                  img={item.img} 
                  distance={item.distance} 
                  location={item.location}
                  /> 
              ))}
            </div>
        </div>
    </section>
  )
}

export default Explore