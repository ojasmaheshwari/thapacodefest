import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkButton = (props: any) => {
  return (
    <NavLink to={props.url ? props.url : `#`} className='bg-indigo-600 text-white
    text-center rounded-md py-4 px-8 hover:bg-indigo-800 w-64 sm:w-fit'>
        {props.content}
    </NavLink>
  )
}

export default LinkButton