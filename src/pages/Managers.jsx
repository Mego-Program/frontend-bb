import React from 'react'
import OurStory from '../components/OurStory'
import ManagerLayout from '../components/ManagerLayout'
import { Outlet } from 'react-router-dom'

export default function Managers() {
  return (<>
    <div className='w-[100vw] min-h-screen flex flex-col justify-center'>
      <div className='w-full flex justify-center bg-gray-950'
        style={{ backgroundImage: "url('Lines 1.png')" }}>
        <div className='w-4/5'>
          <div className='flex flex-col lg:flex-row items-center h-[750px] lg:h-[450px] w-full '>
            <div className='flex flex-col w-full lg:w-1/2 '>
              <div className='text-left text-white text-4xl font-bold capitalize leading-10 my-5'>
                <div className='my-5  '>
                  <span>We are the </span>
                  <span className="text-amber-400 ">brand identity </span>
                  <span>house <br /> of the South.</span>
                </div>
                <p className='text-lg font-normal'>
                  We believe that identity is essential, and to stand out in your space,
                  you have to know who you are. Our work does just that—<span className="text-amber-400 ">helping brands uncover
                    and express</span> what makes them unique and how they can drive culture forward.</p>
              </div>

              <div className="flex items-center justify-between w-60 h-12 bg-amber-400 rounded  pl-3 my-3">
                <h4>Learn More</h4>
                <button className=" flex justify-center items-center w-20 h-10 bg-gray-950 rounded m-1 ">
                  <img className='w-5 h-3.5' src="arrow_home.png" alt="yellow arrow" />
                </button>
              </div>

            </div>
            <div className='flex col-span-1 w-full lg:w-1/2 h-full  justify-end items-end'>
              <img className='h-full' src="web-development-team.png" alt="" />
            </div>
          </div>


          <div className='max-w-full my-8'>
            <div className=' flex flex-row justify-between overflow-scroll text-base text-center'>
              <div className="flex justify-start items-center min-w-[180px] h-16 text-amber-400 text-2xl font-bold  capitalize leading-10">
                <h1>OUR STORY</h1>
              </div>
              <OurStory title='THE BEGINNING' year='1997' />
              <OurStory title='FINDING OUR FEET' year='1999' />
              <OurStory title='DIGITAL SINGULARITY' year='2000' />
              <OurStory title='ONWARDS' year='2003' />
              <OurStory title='EXPANDING' year='2015' />
              <OurStory title='UPWARDS' year='2020' />
            </div>
          </div>

        </div>
      </div>

      <div className='w-full flex justify-center bg-gray-950'
        style={{ backgroundImage: "url('little-witch-folded-notes 1.png')" }}>
        <div className='w-4/5'>
          

          <div className='w-full'>
            <ManagerLayout />
          </div>


          <div className="w-full text-white text-base text-left font-light capitalize leading-10">
            <p>
              we have become specialists at turning new ideas into viable products for our client’s organizations.
              Some of the more rewarding projects we have had the honour to be involved in,
              started with simple ideas and grew into profitable businesses
              from the ground up. <br /> It brings us great joy to see our clients gain market share in their industries through
              our web-based solutions.
            </p>
          </div>

          <div>
            <Outlet />
          </div>

          <div className='text-white text-base my-5 font-light capitalize leading-10'>
            <h3>we have become specialists at turning new ideas into viable products for our client’s organizations.</h3>
          </div>
        </div>
      </div>
    </div>
  </>)
}
