const Qas = (props: any) => {
    return (
        <div className='flex flex-col w-full items-center justify-center'>
            <div className='w-[90%] p-2 bg-gray-100 rounded-md
        shadow-md flex items-center justify-start relative'>
                <div className='h-full w-[15%] sm:w-[5%] grid place-items-center'>
                    <div className='w-10 h-10 rounded-full'>
                        <img src={props.askedBy} alt="user" className='w-full h-full rounded-full' />
                    </div>
                </div>
                <div className='w-full ml-2 text-md'>
                    {`${props.id}) ${props.question}`} ?
                    <br />
                    <p className='w-full text-sm text-right pt-1'>
                        Asked By <span className='text-indigo-600 font-extrabold'>{props.askedByName}</span>
                    </p>
                </div>
            </div>
            <div className='w-[90%] bg-gray-800 rounded-md p-2
        shadow-md flex items-center justify-start relative text-white'>
                <div className='h-full w-[15%] sm:w-[5%] grid place-items-center'>
                    <div className='w-10 h-10 rounded-full'>
                        <img src={props.answeredBy} alt="user" className='w-full h-full rounded-full' />
                    </div>
                </div>
                <div className='w-full ml-2 text-md'>
                    {`${props.answer}`}
                    <p className='w-full text-sm text-right pt-1'>
                        Answered By <span className='text-indigo-600 font-extrabold'>{props.answeredByName}</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Qas