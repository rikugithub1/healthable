'use client'

import { redirect, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FitnessPostCard } from '@/components/FitnessPostCard';

const SearchPage = () => {
  const search = useSearchParams()
  const searchQuery = search ? search?.get('q') : null
  const searchTag = search ? search?.get('tag') : null

  const encodedSearchQuery = encodeURI(searchQuery || "")
  const encodedSearchTag = encodeURI(searchTag || "")

  const [posts, setPosts] = useState([])

  useEffect(() => {
    handleGet(encodedSearchQuery, encodedSearchTag)
  });

  const handleGet = async (query, tag) => {
    const address = `/api/explore/search?q=${query}&tag=${tag}`;

    try {
      const response = await fetch(address, { method: "GET" })

      if (response.ok) {
        setPosts(response)
      }
    
    } catch (error) {
      console.log(error);
      redirect('/error') 
    } 
  }

  const handleTagClick = async (tag) => {
    const address = `/api/explore/search?tag=${tag}`
    try {
      const response = await fetch(address, { method: "GET" })

      if (response.ok) {
        setPosts(response)
      }
    
    } catch (error) {
      console.log(error);
      redirect('/error') 
    } 

  }

  return (
    <div className='mt-16 prompt_layout'>
      {posts.map((post) => (
        <FitnessPostCard
          key={post._id}
          post={post} // title (name), video, image, description, tags, userRef (creater's name, image, list of posts)
          handleTagClick={() => handleTagClick}
        />
      ))}
    </div>
  )
}

export default SearchPage