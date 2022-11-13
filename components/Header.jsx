import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import {motion} from 'framer-motion'
// import Image from '/next/image'


  
const Header = () => {
    const [categories, setcategories] = useState([])

    useEffect(() => {
      getCategories()
      .then((newCategories) => setcategories(newCategories))
    }, [])
  return (
    <div className='container mx-auto px-10 mb-8  '>
        <div className="border-b w-full inline-block border-gray-600 py-4 ">
            <div className="md:float-left block flex" >
                <Link href='/' className='flex  items-center'>
                    <span className="cursor-pointer font-bold text-2xl text-white slide-right lg:text-4xl ">
                        Couch 'n' Coffee
                    </span>
                    <img src="/hot-coffee.gif" 
                    alt="coffee image"
                    width={40} 
                    height={30}
                    className='text-red ml-3 slide-left fade-in-image' 
                    />
                    
                </Link>
            </div>
            <div className="hidden md:float-left md:contents ">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer bg-gray-200 p-2 rounded active:bg-violet-700 
                        focus:outline-none focus:ring focus:ring-gray-900 hover:bg-red-300 
                        transition duration-500 transform hover:-translate-y-1 fade-in-text">
                            {category.name}
                        </span>
                    </Link>
                ) )}
            </div>
        </div>
    </div>
  )
}

export default Header