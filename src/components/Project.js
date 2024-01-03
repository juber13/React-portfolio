import React from 'react'

const Project = ({heading : title , link , githubLink}) => {
    return (
        <div className='project shadow-lg shadow-stone-500  w-[200px] h-[300px] p-3 flex flex-col items-center gap-2 rounded-md text-gray-500'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <small className=" text-xs">
                It is a web application that emulates the functionality and design
                of the Amazon e-commerce platform. It is built using the React
                JavaScript library, which allows for the creation of dynamic and
                responsive user interfaces
            </small>
            <small className="text-xs">
                <strong className="font-bold">Tech Stack Used</strong>
                : HTML, CSS, JAVASCRIPT , REACT , REDUX-TOOLKIT
                CONTEXT{" "}
            </small>
            <div className="btn">
                <button className="border bg-white m-3 rounded p-1 text-xs"><a href={link} >Code</a></button>
                <button className="border bg-white p-1 rounded text-xs"><a href={githubLink}>Live Project</a></button>
            </div>
        </div>
    )
}

export default Project