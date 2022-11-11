import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react'
import {FeaturedPosts} from '../sections';
import {PostCard, Categories, PostWidget} from '../components'
import {getPosts} from '../services'



// const posts = [
//   {title: 'Dark scary night', excerpt: 'lorem ipsum whatever'},
//   {title: 'The all seeing eye', excerpt: 'Darkness is rising to cover the middle earth'},
// ]

const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bee Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post: { node: any; title: Key | null | undefined }) => (
       <PostCard post={post.node} key={post.title}/>
        ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget slug={undefined} categories={undefined}/>
            <Categories/>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Home

export async function getStaticProps(){
  const posts = (await getPosts()) || []

  return {
    props: {posts}
  }
}
