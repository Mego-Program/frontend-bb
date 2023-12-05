import React from 'react'
import '../App.css'
import CostumerComments from './CostumerComments'
import ItemTag from './ItemTag'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (<>
    <footer className=' w-full flex justify-center'>
      <div className='w-4/5  '>

        <div className='flex flex-col '>
          <div className='flex flex-col justify-center w-full my-7'>
            <div className='flex justify-center text-white text-4xl font-bold capitalize leading-10 mb-7'>
              <h1>Let them <span className=' text-amber-400'>speak for</span>  us!</h1>
            </div>

            <div className=' flex justify-center  text-base font-normal capitalize leading-relaxed mb-4'>
              <p className='w-4/5 text-center'>ColmanDevClub is a global training provider based acros the UK that specialises in development, a developers club training
                students for their job as full stack developers. our menors are coming from the industry to help us do it. the
                managares are currently students</p>
            </div>
            <div className='flex justify-center'>
              <div className="flex items-center justify-between w-60 h-12 bg-amber-400 rounded  pl-3 my-3">
                <h4>Get Started Now</h4>
                <button className=" flex justify-center items-center w-20 h-10 bg-gray-950 rounded m-1 ">
                  <img className='w-5 h-3.5' src="arrow_home.png" alt="yellow arrow" />
                </button>
              </div>
            </div>

          </div>


          <div className='flex flex-col justify-center w-full my-7'>
            <div className='flex justify-start text-white text-4xl font-bold capitalize leading-10 mb-7'>
              <h1>Our <span className=' text-amber-400'>customer</span> say</h1>
            </div>

            <div className='flex flex-col lg:flex-row w-full'>

              <CostumerComments
                h3='Finance Head At Ripple Co'
                h1='Natia  Gutowski'
                p='Marie provided me some invaluable advices.
                 i am very satisfied with how i was attebde. 
                 Her mentoship has truly helped  me to increase my sales.'
                srcImg='arrow_home.png' />

              <CostumerComments
                additionalClass='text-slate-950 bg-amber-400'
                h3ClassName='text-slate-950'
                h3='Team Leader'
                h1='Amanda Smith'
                p='Marie provided me some invaluable advices.
                 i am very satisfied with how i was attebde.
                  Her mentoship has truly helped  me to increase my sales.'
                srcImg='right_arrow_black.png' />

              <CostumerComments className='mr-0'
                h3='Web & Graphic Designer'
                h1='Gehrrett Thomas'
                p='Marie provided me some invaluable advices.
                 i am very satisfied with how i was attebde.
                  Her mentoship has truly helped  me to increase my sales.'
                srcImg='arrow_home.png' />

            </div>

          </div>
          <div className='max-w-[100vw] my-7'>
            <div className='flex flex-row w-full justify-between space-x-4 overflow-scroll'>
              <ItemTag srcImg='Flexible 1.png' />
              <ItemTag srcImg='Global.png' />
              <ItemTag srcImg='On-time.png' />
              <ItemTag srcImg='24_7.png' />
              <ItemTag srcImg='Seamless.png' />
              <ItemTag srcImg='SECURITY+&+COMPLIANCE.png' />
              <ItemTag srcImg='research-and-development.png' />
              <ItemTag srcImg='UX-focused.png' />
              <ItemTag srcImg='3456248-200.png' />
              <ItemTag srcImg='domain.png' />
              <ItemTag srcImg='Build.png' />

            </div>
          </div>


          <div className='flex flex-col justify-center items-center w-full h-96 lg:h-80 my-7 bg-amber-400 rounded-lg text-center'>

            <div className=" flex justify-center items-center w-full my-2 ">
              <h1 className='text-4xl  font-bold capitalize leading-[3rem]'>Start <span className='text-slate-900'>upgrading</span>  your <br /> <span className='text-slate-900'>skills free</span> for this month</h1>
            </div>
            <div className=" flex justify-center items-center w-4/5 my-2">
              <p className='text-sm font-light capitalize leading-relaxed'>ColmanDevClub is a global training provider based acros the UK that specialises in development,
                a developers club training students for their job as full stack developers.
                our menors are coming from the industry to help us do it.</p>
            </div>
            <div className=" flex justify-around items-center w-2/3 lg:w-1/3 my-4 lg:text-2xl text-lg font-medium capitalize leading-10">
              <button className=" flex justify-center items-center w-40 h-16 bg-slate-900 rounded-lg">
                <h1>Try Yourself</h1>
              </button>
              <button className=" flex justify-center items-center w-40 h-16 bg-white rounded-lg mx-3">
                <h1 className='text-slate-900'>Get Started</h1>
              </button>

            </div>
          </div>

          <div className='w-full flex flex-col lg:flex-row'>

            <div className='flex flex-col lg:w-1/2  text-center lg:text-left'>
              <div className='font-bold text-xl'>
                <span>Colman</span>
                <span className='color-yellow'>Dev</span>
                <span>Cluc</span>
              </div>

              <div className=' flex justify-center lg:justify-start mt-5 pb-3 '>
                <img className=' w-28' src="aikon_footer.png" alt="icon footer" title='icon footer' />
              </div>
            </div>

            <div className='flex flex-col justify-end lg:justify-center  lg:w-1/2'>
              <div className='lg:flex lg:justify-end'>
                <ul className='flex flex-col lg:flex-row text-center space-x-6'>
                  <li className='hover:color-yellow'><Link to="/">Home</Link></li>
                  <li className='hover:color-yellow'><Link to="/about">About Us</Link></li>
                  <li className='hover:color-yellow'><a href="/Tutorials">Tutorials</a></li>
                  <li className='hover:color-yellow'><a href="/Resources">Resources</a></li>
                  <li className='hover:color-yellow'><Link to="/contactus">Contact Us</Link></li>
                </ul>
              </div>
              <div className='lg:text-right text-center h-full mt-5 pb-3'>
                <h3>© copyright | All Rights Reserved</h3>
              </div>
            </div>
          </div>

        </div>


      </div>

    </footer>

  </>
  )
}
