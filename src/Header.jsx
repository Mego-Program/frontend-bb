import React from 'react'
import './App.css'
import BurgerButton from './BurgerButton'


export default function Header() {

  return (<>
    <header className='sticky top-0  w-full flex justify-center'>
      <div className=' flex flex-row items-center justify-center py-6 space-x-6 w-4/5'>

        <div className='w-3/4 hidden lg:flex justify-end'>
          <ul className='flex text-right space-x-6'>
            <li className='hover:color-yellow'><a href="#home">Home</a></li>
            <li className='hover:color-yellow focus:color-yellow'><a href="#AboutUs">About Us</a></li>
            <li className='hover:color-yellow focus:color-yellow'><a href="#Managers">Managers</a></li>
            <li className='hover:color-yellow focus:color-yellow'><a href="#Mentors">Mentors</a></li>
            <li className='hover:color-yellow focus:color-yellow'><a href="#Participants">Participants</a></li>
          </ul>
        </div>

        <div className='w-1/4 flex justify-end items-end'>
          <ul className='flex text-right space-x-6'>
            <li className='hover:color-yellow items-end'><a href="#SignIn">Sign In</a></li>
            <li className='color-yellow b-yellow rounded-md hover:text-neutral-50'>
              <button className='btn'> Sign Up</button>
            </li>
          </ul>
        </div>

      </div>

      <BurgerButton />
    </header>

  </>
  )
}
