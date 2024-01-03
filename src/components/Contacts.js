import React from 'react'

const Contacts = () => {
    return (
        <div className='form-field w-4/5 m-auto p-4 mt-12' id='contact'>
            <div className="heading text-left mb-4">
                <h1 className='text-2xl text-left  text-white font-bold '>CONTACTS</h1>
                <hr className='w-[50px] h-[2px]  mb-4' />
            </div>
            <div className="input flex flex-col gap-4 items-start">
                <div className='w-full gap-3 flex'>
                 <input className='p-3 w-[55%] rounded' type="text" placeholder='Name'  />
                 <input className='p-3 w-[55%] rounded' type="email" placeholder='email' />
                </div>
                <div className='w-full gap-3 flex'> 
                 <input className='p-3 w-[55%] rounded' type="password" placeholder='password' />
                  <input className='p-3 w-[55%] rounded' type="tel" placeholder='Phone' />
                </div>
                <div>
                  <button className=' rounded border p-2 px-10 flex-start bg-white font-bold'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts