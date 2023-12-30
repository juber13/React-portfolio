import React from 'react'
import { LuMenu } from "react-icons/lu";

const Header = () => {
    return (
        <header className='md:flex md:items-center md:justify-between p-3 w-4/5 m-auto'>
            <div className="logo text-gray-100">PortFolio</div>
            <div className="nav-items">
                <ul className='md:flex md:gap-5 text-gray-300'>
                    <li className='hover:text-gray-400'><a href="#home">Home</a></li>
                    <li className='hover:text-gray-400'><a href="#home">Services</a></li>
                    <li className='hover:text-gray-400'><a href="#home">More</a></li>
                    <li className='hover:text-gray-400'><a href="#home">Projects</a></li>
                    <li className='hover:text-gray-400'><a href="#home">Contacts</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header