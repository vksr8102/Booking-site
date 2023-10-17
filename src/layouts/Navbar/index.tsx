
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import Logo from "/public/img/logo_pink-tour.png";
import {BiMenu} from "react-icons/bi"
import {RxCross1} from "react-icons/rx"
import Sidebar from './Sidebar/Sidebar';
import { useRouter } from 'next/router';
import Link from 'next/link';

const navData = [{title:"Home",link:"/"},{title:"Packages",link:"/packages"},{title:"Experiences",link:"experinces"},{title:"Become a Host",link:"/"}];
function Navbar() {
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false)

  const handleClick = ()=>{
    setShow(!show)
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
    <div className='w-full flex fixed top-0 z-[100] bg-white-5 justify-between items-center h-fit md:w-full py-2 px-4  shadow-md'>
      <div className='flex flex-start gap-5 w-11/12'>
          <div className='w-[92px] h-[23px] md:w-[242px] md:h-[58px]'>
           <Link href={"/"}> <Image src={Logo} alt="website-logo" layout={'responsive'} className='w-[242px] h-[58px]' /></Link>
          </div>
          <div className='hidden md:flex flex-row ml-14 '>
                {
                  navData.map((item,index) => (
                    <div key={index} className='flex justify-start items-center font-semibold px-6 '>
                      <div onClick={()=> router.push(`${item.link}`)} className='cursor-pointer'>{item.title}</div>
                    </div>
                  ))
                }
          </div>
      </div>
      <div ref={drawerRef} className='mr-4'>
          <span onClick={handleClick} className={`text-2xl md:hidden `}><BiMenu/></span>
          <div className={`flex md:hidden h-screen md:static md:transition-none md:translate-x-0 transition-transform ${show ? 'translate-x-0' :'translate-x-full'} right-0 fixed z-[1000] opacity-100 md:z-auto border-[#eee] border md:border-none  md:shadow-none shadow-2xl mt-2 bg-white-5 md:p-0 p-4 w-3/4 `}>
            <Sidebar/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
