import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image';

export const FitnessPostCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {

  const router = useRouter();

  const handlePostClick = () => {
    console.log(post);

    // if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/${post._id}`);
  };

  // const handleProfileClick = () => {
  //   console.log(post);

  //   if (post.creator._id === session?.user.id) return router.push("/profile");

  //   router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  // };

  return (
    <div className="post_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer flex-col " onClick={handlePostClick}>
          <img src={post.image} alt={post.title} className="rounded-md object-contain w-60 h-48" />
          <p className="my-4 font-satoshi text-md text-gray-700 truncate w-80 text-center">{post.title}</p>
          <div className='flex flex-row'>
            {post.tags.map((tag) => (
              <p key={tag} className="font-inter text-sm blue_gradient cursor-pointer px-2" onClick={() => handleTagClick && handleTagClick(tag)}>
                #{tag}
              </p>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="bg-black text-white py-2 px-4 rounded-lg mt-4">
              <p className="text-sm">{post.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // return (
  //   <div className='post_card'>
  //     <div className='flex justify-between items-start gap-5'>
  //       <div
  //         className='flex-1 flex justify-start items-center gap-3 cursor-pointer flex-col'
  //         onClick={handlePostClick}
  //       >
  //         <Image
  //           src={post.image}
  //           alt={post.title}
  //           width={250}
  //           height={200}
  //           className='rounded-md object-contain'
  //         />
  //         <p className='my-4 font-satoshi text-sm text-gray-700'>{post.title}</p>

  //         <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
  //         <p
  //           className='font-inter text-sm blue_gradient cursor-pointer'
  //           onClick={() => handleTagClick && handleTagClick(post.tag)}
  //         >
  //           #{post.tag}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default FitnessPostCard;
