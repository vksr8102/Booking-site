import React from 'react'
import {GoHome} from 'react-icons/go'
import {FcPackage,FcApprove} from 'react-icons/fc'
import {FaGg} from 'react-icons/fa'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter();
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div onClick={()=> router.push('/')} className='flex gap-2 px-4 items-center text-lg border border-[#eee] w-full cursor-pointer shadow-sm '>
            <GoHome/>
            <span>Home</span>
        </div>
        <div onClick={()=> router.push('/packages')} className='flex gap-2 px-4 items-center text-lg border border-[#eee] w-full cursor-pointer shadow-sm '>
            <FcPackage/>
            <span>Packages</span>
        </div>
        <div onClick={()=> router.push('/experinces')} className='flex gap-2 px-4 items-center text-lg border border-[#eee] w-full cursor-pointer shadow-sm'>
            <FcApprove/>
            <span>Experiences</span>
        </div>
        <div onClick={()=> router.push('/')} className='flex gap-2 px-4 items-center text-lg border border-[#eee] w-full cursor-pointer shadow-sm'>
            <FaGg/>
            <span>Become a Host</span>
        </div>
    </div>
  )
}

export default Sidebar