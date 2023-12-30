import React from 'react'

const Home = () => {
    return (
        <div className='container h-screen items-center gap-10 flex w-[80%] justify-between m-auto p-10'>
            <div className="content flex flex-col gap-2 w-[40%] items-start">
                <h1 className='text-8xl text-white'>Hello , I'm </h1>
                <h2 className=' text-3xl text-[#FD4C57]'>A Front-end developer</h2>
                <p className='text-white w-[100%] m-auto text-left'>As a front-end developer I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...</p>
                <button className='bg-[#FD4C57] p-3  rounded text-sm mt-4'>Download CV</button>
            </div>
            <div className="right-bar border-r-2 relative flex flex-col gap-20">
                {/* <div className="line w-[0.1rem] left-2 z-[-1]"></div> */}
                    <div className="circle relative l-3 z-1 w-4 h-4 rounded-full bg-[#FD4C57] border-2 border-[#FD4C57]"></div>
                    <div className="circle relative l-3 z-1 border-2 w-4 h-4 rounded-full  border-[#FD4C57]"></div>
                    <div className="circle relative l-3 z-1 border-2  h-4 rounded-full bg-transparent border-[#FD4C57]"></div>
            </div>
        </div>
    )
}

export default Home