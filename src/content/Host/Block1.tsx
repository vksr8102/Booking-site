import React from 'react'

function Block1() {
  return (
    
    <div className="relative w-full h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-host"
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff]  to-transparent"></div>
      
      {/* Your Content */}
      <div className="w-11/12 absolute inset-0 flex items-start flex-col justify-center ml-14">
        <div className='flex items-start flex-col justify-between h-[180px]'>
        <h1 className="text-5xl font-bold text-gray-800">Try Hosting With Us</h1>
        <p className='text-base font-normal text-black-50 w-[600px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
        <div className={`hover:scale-95 transition-all duration-200 text-center text-[6px] md:text-base px-2 py-[1px] md:px-10 md:py-3 rounded-[30px] font-bold
         bg-green-1000 text-[#fff]`} >Lets Get Started</div>
        </div>
      </div>
    </div>
  )
}

export default Block1


