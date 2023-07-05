'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchInput = () => {

  const [searchQuery, setSerchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()  

  const onSearch = (event) => {
    event.preventDefault()

    // const url = `${pathname}`

    const encodedSearchQuery = encodeURI(searchQuery)

    if (pathname === '/explore') {
      router.push(`${pathname}/search?q=${encodedSearchQuery}`)
    } else if (pathname === '/explore/search') {
      router.push(`${pathname}?q=${encodedSearchQuery}`)
    } else {
      router.push('/error')
    }

    // console.log("current.query", encodedSearchQuery)
  }


  return (
    <>
      <form className="flex justify-center w-4/5 lg:w-3/5 mt-5">
        <div className="relative w-full">
          <input
            value={searchQuery}
            onChange={(event) => setSerchQuery(event.target.value)}
            className="w-full py-2 px-4 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Press Enter or click the search button"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
      {/* <form className="flex justify-center w-2/3" onSubmit={onSearch}>
        <input
          value={searchQuery}
          onChange={(event) => setSerchQuery(event.target.value)}
          className="px-5 py-2 w-full sm:w-2/3 text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          placeholder="What are you looking for?"
        />
      </form> */}
    </>
  )
}

export default SearchInput