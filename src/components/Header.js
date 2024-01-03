import React from 'react'

const Header = () => {
    return (
        <header className=' z-40 md:flex md:items-center md:justify-between p-6 m-auto shadow-md w-full'>
            <nav className='w-4/5 m-auto flex justify-between'>
            <div className="logo text-gray-100 text-xl">PORT<span className='text-red-600'>F</span>OLIO</div>
            <div className="nav-items">
                <ul className='md:flex md:gap-5 text-gray-300'>
                    <li className='hover:text-gray-400'><a href="#home">Home</a></li>
                    <li className='hover:text-gray-400'><a href="#service">Services</a></li>
                    <li className='hover:text-gray-400'><a href="#more">More</a></li>
                    <li className='hover:text-gray-400'><a href="#project">Projects</a></li>
                    <li className='hover:text-gray-400'><a href="#contact">Contacts</a></li>
                </ul>
              </div>
            </nav>
        </header>
    )
}

export default Header