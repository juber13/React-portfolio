import React from 'react'

const More = () => {
    return (
        <div className='more w-4/5 m-auto mt-10 p-3' id='more'>
            <div className="exprience_1 flex flex-col gap-10 text-white ">
            <div className='heading'>
                <h1 className='text-2xl text-left  text-white font-bold'>EXPRIENCE</h1>
                <hr className='w-[50px] h-[2px] top-3'/>
            </div>
                <div className="content flex flex-col items-start  border rounded p-3">
                    <h2 className='text-3xl text-gray-600 mb-4'>Growify Digital | Web developer Intern</h2>
                    <p className='text-left text-sm  text-gray-400'>Making website from starting , handling all front-end work like updating websites and make sure website is working and it is responsive in mobile view and cross browsers working.</p>
                    <p className='text-left text-sm  text-gray-400'>Grabbing : I m getting the idea how websites work and having an experience of writing code and maintaining  websites and  mostly getting confident</p>
                </div>

                <div className="content flex flex-col items-start  border rounded p-3">
                    <h2 className='text-3xl text-gray-600 mb-4'>College dunia | Front-end developer</h2>
                    <p className='text-left text-sm text-gray-400'>I used to make website from scratch and was updating them if needed which were already created and used to  use these tech stack for making website HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP</p>
                </div>
            </div>
        </div>
    )
}

export default More