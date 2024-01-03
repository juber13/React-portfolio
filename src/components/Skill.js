import React from "react"

const Skill = ({ color = "red", icon: Icon, text , title }) => {
    return (
        <div className="skill w-[200px] h-[250px] items-start  justify-center  px-2 flex flex-col rounded-md  shadow-lg shadow-stone-500">
            <Icon className='text-red-500 text-5xl mb-1' color={color} />
            <h4 style={{color: color}}>{title}</h4>
            <small className='text-gray-500 text-xs text-left'>{text}</small>
        </div >
    )
}

export default Skill