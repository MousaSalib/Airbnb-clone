import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Searchbar from '@/app/components/Header/Searchbar'
import Navbar from '@/app/components/Header/Navbar'

const Header = () => {
  return (
    <header className='sticky top-0 bg-white py-5 z-50 shadow-md'>
        <div className="container grid grid-cols-3">
            <Link href={"/"} className='relative flex items-center h-10 my-auto'>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                     alt="logo-image"
                     fill
                     className='object-contain object-left'
                    />
            </Link>
            <Searchbar />
            <Navbar />
        </div>    
    </header>
  )
}

export default Header