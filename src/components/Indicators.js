import React from 'react'

const Indicators = () => {
    return (
        <div className="right-bar flex gap-10 relative">
            <div className="btns flex flex-col gap-20 z-1">
                <div className="circle ml-[-10] w-6 h-6 rounded-full bg-[#FD4C57] border border-[#FD4C57]"></div>
                <div className="circle l-3 border-[3px] w-6 h-6 rounded-full   border-[#FD4C57] bg-[#23253A] "></div>
                <div className="circle l-3 border-[3px] w-6 border-[#FD4C57]  h-6 rounded-full bg-[#23253A]"></div>
            </div>

            <div className="h-full w-1  bg-red-500 absolute left-[10px] z-[-1]"></div>
        </div>
    )
}

export default Indicators