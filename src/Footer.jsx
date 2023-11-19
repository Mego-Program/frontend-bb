import React from 'react'
import './App.css'

export default function Footer() {
  return (<>
    <footer className=' w-full justify-center'>
      <div className='w-4/5  flex flex-col lg:flex-row justify-center'>
        <div className='flex flex-col w-1/2 lg:w-full lg:justify-center'>
          <div className='font-bold text-xl'>
            <span>Colman</span>
            <span className='color-yellow'>Dev</span>
            <span>Cluc</span>
          </div>
        
          <div className='mt-5 pb-3'>
            <img className=' w-28' src="../public/aikon_footer.png" alt="icon footer" title='icon footer'/>
          </div>
        </div>

        <div className='flex flex-col justify-end lg:justify-center w-1/2 lg:w-full'>
          <div className='flex flex-col justify-end'>
            <ul className='flex flex-row lg:flex-col text-right space-x-6'>
              <li className='hover:color-yellow'><a href="#home">Home</a></li>
              <li className='hover:color-yellow'><a href="#About">About</a></li>
              <li className='hover:color-yellow'><a href="#Tutorials">Tutorials</a></li>
              <li className='hover:color-yellow'><a href="#Resources">Resources</a></li>
              <li className='hover:color-yellow'><a href="#Contact">Contact</a></li>
            </ul>
          </div>
          <div className='flex f text-right mt-5 pb-3'>
            <h3>© copyright | All Rights Reserved</h3>
          </div>
        </div>
      </div>



    </footer>

  </>
  )
}
