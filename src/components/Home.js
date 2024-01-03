import React, { useEffect, useState } from 'react'
import Indicators from './Indicators';
const Home = () => {
    const text = "Hello";
    const [displayText, setDisplayText] = useState("");
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        if (currentIndex >= text.length) {
          clearInterval(interval);
        }
      }, 200); // Adjust the interval for the typing speed
      return () => clearInterval(interval);
    }, []);

    return (
        <div className='container h-screen items-center gap-10 flex w-[80%] justify-between m-auto p-10' id='home'>
            <div className="content flex flex-col gap-2 w-[40%] items-start">
                <h1 className='text-8xl text-white'>Hello' I'm</h1>
                <h2 className=' text-3xl text-[#FD4C57]'>A Front-end developer</h2>
                <p className='text-white w-[100%] m-auto text-left'>As a front-end developer I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...</p>
                <button className='bg-[#FD4C57] p-3  rounded text-sm mt-4 font-bold text-white'>Download CV</button>
            </div>
            <Indicators/>
        </div>
    )
}

export default Home