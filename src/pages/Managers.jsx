import React from 'react'

export default function Managers() {
  return (<>
    <div className='w-[100vw] min-h-screen flex justify-center my-5'
      style={{ backgroundImage: "url('Lines 1.png')" }}>
      <div className='w-4/5'>
        <div className='flex flex-col lg:flex-row items-center h-[700px] lg:h-[450px] w-full '>
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

      </div>
    </div>


  </>)
}
