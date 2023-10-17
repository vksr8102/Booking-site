import Link from 'next/link';
import React, { useState } from 'react'


function Block7(props:any) {
    const setOpen = props.setOpen;
    const open  = props.open
    const handleShow = ()=>{
        setOpen(!open);
    }
    const handleClose =()=>{
       setOpen(!open) 
    }
  return (
<div>
    { open && 
    <div className='bg-[#0A225F] fixed bottom-0 p-5 flex items-center justify-center gap-2 w-full '   >
        <button className='px-3 py-[6px] font-bold rounded-lg border-2 border-[#F5AB01]  text-white-5'>care-supreme-direct</button>
       <Link href={"/compare-plans-detailed"}> <button className='px-3 py-2 font-bold rounded-lg bg-[#F5AB01] text-white-5'>Compare Plans</button></Link>
        <button className='px-10 py-2 font-bold rounded-lg bg-[red] text-white-5' onClick={handleClose}>Close</button>
    </div>
  }
  </div>
    
       
  )
}

export default Block7