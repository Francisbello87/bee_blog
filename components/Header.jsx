import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
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
            <div className="md:float-left block flex">
                <Link href='/' className='flex  items-center'>
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        Couch 'n' Coffee
                    </span>
                    <img src="/coffee2.svg" 
                    alt="coffee image"
                    width={50} 
                    height={40}
                    className='text-red  ml-3' 
                    />
                    
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
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