import React, { useEffect, useState } from 'react'

const Home = () => {
    
    const [text , setText] = useState("");
    const [text_2 , setText_2] = useState("");
     const typeWrite = () => {
        let word = "";
        let text  = "Hello , I'm";

        let word2 = "";
        let text_2  = "A Front-end Developer";
        let index = 0;
        setInterval(() => {
            word += text.slice(0 + index , 1 + index)
            word2 += text_2.slice(0 + index , 1 + index)
            index++;
            setText(word);
            setText_2(word2);
       }, 200)
     }

    useEffect(() => {
        typeWrite();
    },[])

    return (
        <div className='container h-screen items-center gap-10 flex w-[80%] justify-between m-auto p-10'>
            <div className="content flex flex-col gap-2 w-[40%] items-start">
                <h1 className='text-8xl text-white'>{text}</h1>
                <h2 className=' text-3xl text-[#FD4C57]'>{text_2}</h2>
                <p className='text-white w-[100%] m-auto text-left'>As a front-end developer I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...</p>
                <button className='bg-[#FD4C57] p-3  rounded text-sm mt-4'>Download CV</button>
            </div>
            <div className="right-bar flex gap-10 relative">
                    <div className="btns flex flex-col gap-20 z-1">
                        <div className="circle ml-[-10] w-6 h-6 rounded-full bg-[#FD4C57] border border-[#FD4C57]"></div>
                        <div className="circle l-3 border-[3px] w-6 h-6 rounded-full   border-[#FD4C57] bg-[#23253A] "></div>
                        <div className="circle l-3 border-[3px] w-6 border-[#FD4C57]  h-6 rounded-full bg-[#23253A]"></div>
                    </div>

                    <div className="h-full w-1  bg-red-500 absolute left-[10px] z-[-1]"></div>
            </div>
        </div>
    )
}

export default Home