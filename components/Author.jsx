import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-8 relative rounded-lg bg-gray-600 bg-opacity-17'>
       <div className="absolute left-10 right-0  -top-14">
        <Image 
          src={author.photo.url} 
          alt={author.name} 
          className="align-middle rounded-full" 
          height= {80}
          width={80}
          unoptimized 
          />
       </div>
       <h3 className="text-white my-4 text-xl font-bold">
            {author.name}
        </h3>
        <p className="text-white text-lg">
          {author.bio}
        </p>
    </div>
  )
}

export default Author