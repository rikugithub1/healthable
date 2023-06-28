"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const Home = () => {
  // const { data: session } = useSession();

  // const [providers, setProviders] = useState(null);
  // const [toggleDropdown, setToggleDropdown] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);
  
  const router = useRouter()

  return (
    <section >
      <div className='flex-center flex-col m-6 p-5 bg-white rounded-xl'>
        <h1 className='head_text text-center'>
          'The clock is ticking. Are you becoming the person you want to be?'
          <br /> <span className='font-semibold text-sm'>- Greg Plitt, fitness model</span>
        </h1>
      </div>
      <div className='flex-center flex-col m-6 p-5 bg-white rounded-xl'>
        <h1 className='text-center'>
          Are you struggling to take time for your daily exercise? Perhaps, you are too tired after work that you have no energy and motivation left to go to gym.
          <br /><em><b>Say no more!</b></em> Healthable App is here to help you browse any exercises to stay fit! We are committed to help every user to acheive their health goals.
          <br />If you are an instructor, you can share your favorite exercises on this platform!
        </h1>
      </div>
      <div className='flex justify-center m-4'>
        <button 
          className='px-5 py-1.5 mx-1 text-sm bg-cyan-500 rounded-full text-white'
          // href={!loggedIn ?? "/logIn" : "/explore"}
          type='button' onClick={() => router.push('/explore')}
        >
          Explore Exercises
        </button>
      </div>
    </section>
  )
}

export default Home