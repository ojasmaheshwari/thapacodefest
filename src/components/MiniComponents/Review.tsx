import React from 'react'

const Review = (props: any) => {
    return (
        <div className='w-[80%] min-h-20 bg-slate-100 flex items-center rounded-lg
                shadow-lg shadow-slate-500 p-2'>
            <div className="rounded-full w-10 h-10 ml-2 bg-black">
                <img src={props.image} alt="lol"
                    className='overflow-hidden w-full h-full rounded-full' />
            </div>
            <div className='w-[90%] ml-2 text-sm sm:text-md text-slate-800'>
                <div>
                    {props.message}
                    <p className='text-indigo-600 font-bold text-right'>
                        - {props.author}, {props.country}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review