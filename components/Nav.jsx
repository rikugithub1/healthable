"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
      <div className='flex justify-between flex-row p-3'>  
        <div className='flex flex-row'>
          <Image
            src='/assets/logo.png'
            alt="Healthable Logo"
            width={50}
            height={20}
          />
          <h1 className='pt-3 logo_text max-sm:hidden text-left'>
            Healthable
          </h1>
        </div>

        {/* Desktop App */}
        <div className='max-sm:hidden'>
          <button className='px-5 py-1.5 mx-2 mt-2 text-sm bg-gray-300 rounded-full text-cyan-500'
>Log In</button>
          <button className='px-5 py-1.5 mx-1 text-sm bg-cyan-500 rounded-full text-white'
>Sign Up</button>
        </div>

        {/* Modbile App */}
        <div className='sm:hidden flex flex-col'>
          <button className='px-5 py-1.5 mt-1 text-sm bg-gray-300 rounded-full text-cyan-500'
>Log In</button>
          <button className='px-5 py-1.5 mt-3 text-sm bg-cyan-500 rounded-full text-white'
>Sign Up</button>
        </div>
      </div>
      <hr className='max-md:hidden' />

      <div className='flex justify-center flex-row p-4 pl-1 pr-1'>
        <Link
        href='/'
        className='menu_text'
        onClick={() => {}}
        >
        <div className='border border-cyan-600 px-3 py-1 rounded-md'>Home</div>
        </Link>
        <Link
        href='/explore'
        className='menu_text'
        onClick={() => {}}
        >
        <div className='border border-cyan-600 px-3 py-1 rounded-md'>Explore</div>
        </Link>
        <Link
        href='/new-post'
        className='menu_text'
        onClick={() => {}}
        >
        <div className='border border-cyan-600 px-3 py-1 rounded-md'>Upload</div>
        </Link>
        <Link
        href='/my-posts'
        className='menu_text'
        onClick={() => {}}
        >
        <div className='border border-cyan-600 px-3 py-1 rounded-md'>My Posts</div>
        </Link>
      </div>

    </nav>
  )
}

export default Nav