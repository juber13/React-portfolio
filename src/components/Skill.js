import React from "react"

const Skill = ({ color, icon: Icon, text }) => {
    return (
        <div className="skill w-[200px] h-[250px] items-center justify-center border p-2 flex flex-col rounded-md  shadow-md" style={{"--border-color": {color}}}>
            <Icon className='text-red-500 text-5xl mb-3' color={color} />
            <small className='text-white text-xs text-left'>{text}</small>
        </div >
    )
}

export default Skill