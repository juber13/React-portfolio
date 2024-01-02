import React from 'react'

const Project = ({heading : title}) => {
    return (
        <div className='project border w-[200px] h-[300px] p-3 flex flex-col items-center gap-2 rounded-md'>
            <h1 className='text-white font-bold text-xl'>{title}</h1>
            <small className="text-white text-xs">
                It is a web application that emulates the functionality and design
                of the Amazon e-commerce platform. It is built using the React
                JavaScript library, which allows for the creation of dynamic and
                responsive user interfaces
            </small>
            <small className="text-white text-xs">
                <strong className="font-bold">Tech Stack Used</strong>
                : HTML, CSS, JAVASCRIPT , REACT , REDUX-TOOLKIT
                CONTEXT{" "}
            </small>
            <div className="btn">
                <button className="border bg-white m-3 rounded p-1 text-xs">Code</button>
                <button className="border bg-white p-1 rounded text-xs">Live Project</button>
            </div>
        </div>
    )
}

export default Project