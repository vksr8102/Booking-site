import React from 'react'
import Logo from "/public/img/logo_pink-tour.png";
import Image from "next/image"

const lowerFooterData = ["Privacy Policy","Terms of Use","Sales and Refunds","Legal","Site Map"]
const data2 = ["About Us","Contact Us","Book your Stay","Become a Host","Careers"]
const data3 = ["Help Center","Safety information","Cancellation Options","Our COVID-19 Response","FAQs"]
const data4 = [
    "/img/social.svg","/img/social (1).svg","/img/social (2).svg","/img/social (3).svg","/img/social (4).svg","/img/social (1).svg"
]
function Footer() {
  return (
    <footer className='mt-[50px]'>
    <div className='bg-richblue-5 relative text-[#fff] flex flex-col justify-between pt-[100px]'>
        <div className='w-full px-4 md:px-[50px] h-0'>
        <div className=' -translate-y-36 w-full h-[100px] flex items-center justify-between gap-2 bg-gradient-to-r from-[#94a3b8] to-[#fff] rounded-md p-4'>
            <h2 className='font-bold text-black-100 text-[18px] md:text-[26px]'>Buy Roamhome gift cards</h2>
            <div className='flex justify-center items-center gap-5 font-semibold'>
                <p className='text-black-100'>Lets do it! — </p>
                <div className='w-[120px] py-3 text-[#fff] gap-1 text-[14px] md:text-lg flex justify-center items-center bg-gradient-to-r from-[#002257] to-[#0A225FA6] rounded-[50px]'>
                                <span>Learn More</span>
                </div>
            </div>
        </div>
        </div>
        <div className='items-center flex flex-wrap gap-6 mb-10 justify-between  w-full '>
            <div className='w-[300px] md:w-[345px] h-[112px] bg-white-10 rounded-r-full flex justify-center items-center'>
                 <Image src={Logo} alt="website-logo" 	width={242} height={58} className='' />
            </div>
            <div className='mx-4 flex flex-col gap-4'>
                <h2 className='font-semibold'>Resources</h2>
                <div>
                    {
                        data2.map((item,i)=> (
                            <div key={i} className='flex flex-col'>{item}</div>
                        ))
                    }
                </div>
            </div>
            <div className='mx-4 flex flex-col gap-4'>
                <h2 className='font-semibold'>Support</h2>
                <div>
                    {
                        data3.map((item,i)=> (
                            <div key={i} className='flex flex-col'>{item}</div>
                        ))
                    }
                </div>
            </div>
            <div className='mx-4 flex flex-col gap-4'>
                <h2 className='font-semibold'>Let s do it</h2>
                <div className='flex w-[200px] justify-between'>
                    {
                        data4.map((item,i)=> (
                                <div key={i} className='flex flex-col'>
                                <img src={item} alt="footer logo"  className='w-5 h-5'/>    
                                </div>
                            ))
                    }   
                </div>
                <h2 className='font-semibold'>Subscribe</h2>
                <p className='md:w-[400px]'>
                    Subscribe to stay tuned for new web design and latest updates. Lets do it!
                </p>
                <div className='flex'>
                    <input className='px-2 py-[2px]' type="email" name="email" id="email" placeholder='Enter your mail' />
                    <button className='px-[26px] py-[5px]'>Subscribe</button>
                </div>

            </div>
        </div>
        <div className='p-4 w-full flex justify-center items-center border-t border-[#fff]'>
            <div className='w-11/12 flex-wrap gap-2 flex justify-between items-center'>
                <div className='flex flex-wrap gap-2 md:gap-6 justify-evenly'>   
                {
                    lowerFooterData.map((data,i)=> (
                        <div key={i} className='text-sx md:text-base w-full md:w-auto'>
                            {data}
                        </div>
                    ))
                }
                </div>
                <div>
                © 2021 All Rights Reserved
                </div>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer
