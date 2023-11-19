import React, { useState } from 'react';
import './App.css'

const BurgerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="lg:hidden cursor-pointer z-50"
                onClick={handleButtonClick}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {isOpen && (
                <header className='w-full h-[100vh] absolute inset-0'>
                    <div className='absolute inset-0'>
                        <ul className='h-full grid place-items-center py-20'>
                            <li className='hover:color-yellow'><a href="#home">Home</a></li>
                            <li className='hover:color-yellow'><a href="#AboutUs">About Us</a></li>
                            <li className='hover:color-yellow'><a href="#Managers">Managers</a></li>
                            <li className='hover:color-yellow'><a href="#Mentors">Mentors</a></li>
                            <li className='hover:color-yellow'><a href="#Participants">Participants</a></li>
                        </ul>
                    </div>
                </header>
            )}
        </div>
    );
};

export default BurgerButton;
