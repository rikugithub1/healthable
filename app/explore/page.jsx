'use client'
import { React, useState, useEffect } from 'react';
import FitnessPostCard from '@/components/FitnessPostCard';

const Explore = () => {
  // const session = await getCurrentUser();
  // if (!session?.user) redirect("/")

  const [posts, setPosts] = useState([])

  useEffect(() => {
   handleGet()
  }, []);

  const handleGet = async () => {
    const address = `/api/explore`;

    try {
      const response = await fetch(address, { method: "GET" })
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        console.log("Something went wrong");
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
        const data = await response.json();
        setPosts(data.posts);
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
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default Explore