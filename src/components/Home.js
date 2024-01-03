import React, { useEffect, useState } from 'react'
import Indicators from './Indicators';
const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [Text, setText] = useState("");
  
  
  const TypeWriter = () => {
    const text = "Hello' I'm";
    const text_2 = "A Front-end developer wanna be no stack to full-stack";
    let index = 0;
    let index_2 = 0;
    let word = "";
    let word_2 = "";
    let id;
    let id_2;
    id = setInterval(() => {
       word += text.charAt(index);
       index++;
       setDisplayText(word);
       if(index >= text.length){
        clearInterval(id)
       }
    },200)

      id_2 = setInterval(() => {
        word_2 += text_2.charAt(index_2);
        index_2++;
        setText(word_2);
        if(index_2 >= text_2.length){
        clearInterval(id_2)
        }
    },150)

    
    }
  
    useEffect(() => {
     TypeWriter();
    }, []);

    return (
        <div className='container h-screen items-center gap-10 flex w-[80%] justify-between m-auto p-10' id='home'>
            <div className="content flex flex-col gap-2 w-[40%] items-start">
                <h1 className='text-8xl text-white'>{displayText}</h1>
                <h2 className=' text-sm text-[#FD4C57]'>{Text}</h2>
                <p className='text-white w-[100%] m-auto text-left'>As a front-end developer I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...</p>
                <button className='bg-[#FD4C57] p-3  rounded text-sm mt-4 font-bold text-white'>Download CV</button>
            </div>
            <Indicators/>
        </div>
    )
}

export default Home