import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setcategories] = useState([])

  useEffect(() => {
    getCategories()
    .then((newCategories) => setcategories(newCategories))
  }, [])
  
  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-8 mb-8 text-white'>
      <h3 className='text-xl mb-8 font-semibold  border-b pb-4'>
        Tags
      </h3>
      {categories.map((category) =>(
        <Link key={category.slug} href={`/category/${category.slug}`} >
          <div className='cursor-pointer pb-3 mb-3'>
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories