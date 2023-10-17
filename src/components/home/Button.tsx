import React from 'react'

interface ButtonProps {
    text: string;
  }
const Button : React.FC<ButtonProps> = ({text}) => { 
  return (
    <div className='flex'>
        <div className={`hover:scale-95 transition-all duration-200 text-center text-xs md:text-[15px] px-2 py-[1px] md:px-6 md:py-3 rounded-md font-bold
         bg-richblue-5 text-[#fff]`} >{text}</div>
    </div>
  )
}


export default Button
