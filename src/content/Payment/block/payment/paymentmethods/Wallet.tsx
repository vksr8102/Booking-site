import Image from 'next/image'
import React from 'react'

function Wallet() {
        return (
                <div className='md:w-[65%] w-full'>
                        <div>
                                <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Pay Payment any Wallet</h3>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                                <div className='flex gap-2 items-center'>
                                        <input type="radio" name="Test Wallet" id="" />
                                        <Image src="/img/download (5).png" alt="Test Wallet" height={30} width={50} />
                                </div>
                                <div>
                                        <p className='md:text-base text-xs'>Test Wallet</p>
                                </div>
                                <div>
                                        <button className=' md:h-[30px] md:w-[80px] h-[30px] w-[60px] bg-richblue-15 text-white-5 rounded-md hover:bg-richblue-5'>
                                                Pay
                                        </button>
                                </div>
                        </div>
                        <div className='flex items-center justify-between  py-2'>
                                <div className='flex gap-2 items-center'>
                                        <input type="radio" name="PayTm" id="" />
                                        <Image src="/img/download (3).png" alt=" PayTm" height={30} width={50} />
                                </div>
                                <div>
                                        <p className='md:text-base text-xs'>PayTm</p>
                                </div>
                                <div>
                                        <button className=' md:h-[30px] md:w-[80px] h-[30px] w-[60px] bg-richblue-15 text-white-5 rounded-md hover:bg-richblue-5'>
                                                Pay
                                        </button>
                                </div>
                        </div>
                        <div className='flex items-center justify-between  py-2'>
                                <div className='flex gap-2 items-center'>
                                        <input type="radio" name="payu" id="" />
                                        <Image src="/img/download (6).png" alt=" FreeCharge" height={20} width={30} style={{ backgroundBlendMode: "darken" }} />
                                </div>
                                <div>
                                        <p className='md:text-base text-xs'>FreeCharge</p>
                                </div>
                                <div>
                                        <button className=' md:h-[30px] md:w-[80px] h-[30px] w-[60px] bg-richblue-15 text-white-5 rounded-md hover:bg-richblue-5'>
                                                Pay
                                        </button>
                                </div>
                        </div>
                        <div className='flex items-center justify-between  py-2'>
                                <div className='flex gap-2 items-center'>
                                        <input type="radio" name="amazonPay" id="" />
                                        <Image src="/img/download (2).png" alt="amazonPay" height={40} width={60} />
                                </div>
                                <div>
                                        <p className='md:text-base text-xs'>amazonPay</p>
                                </div>
                                <div>
                                        <button className=' md:h-[30px] md:w-[80px] h-[30px] w-[60px] bg-richblue-15 text-white-5 rounded-md hover:bg-richblue-5'>
                                                Pay
                                        </button>
                                </div>
                        </div>
                        <div className='flex items-center justify-between  py-2'>
                                <div className='flex gap-2 items-center'>
                                        <input type="radio" name="AirtelMoney" id="" />
                                        <Image src="/img/download (7).png" alt="AirtelMoney" height={30} width={50} />
                                </div>
                                <div>
                                        <p className='md:text-base text-xs'>AirtelMoney</p>
                                </div>
                                <div>
                                        <button className=' md:h-[30px] md:w-[80px] h-[30px] w-[60px] bg-richblue-15 text-white-5 rounded-md hover:bg-richblue-5'>
                                                Pay
                                        </button>
                                </div>
                        </div>
                        <div className='flex items-center justify-between  py-2'>
                                <div className='flex gap-2 items-center'>
                                        <input type="radio" name="MobiKwik" id="" />
                                        <Image src="/img/download (8).png" alt="MobiKwik" height={30} width={50} />
                                </div>
                                <div>
                                        <p className='md:text-base text-xs'>MobiKwik</p>
                                </div>
                                <div>
                                        <button className=' md:h-[30px] md:w-[80px] h-[30px] w-[60px] bg-richblue-15 text-white-5 rounded-md hover:bg-richblue-5'>
                                                Pay
                                        </button>
                                </div>
                        </div>
                </div>
        )
}

export default Wallet