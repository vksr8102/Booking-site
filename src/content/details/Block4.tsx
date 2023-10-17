import React from 'react'

import {TbRibbonHealth} from 'react-icons/tb'
import {AiFillStar} from 'react-icons/ai'
import {BsArrowRightCircleFill} from 'react-icons/bs'

const Block4 = () => {
  return (
    <div>
      <div className='p-5  md:px-[100px] flex flex-col gap-4 ' >
        <p className='font-bold lg:text-[24px] text-[18px]'>Safety and Hygiene</p>

        <div className='flex justify-between lg:w-[600px] '>


            <div className='flex flex-col gap-4 '>
                <div className='flex gap-1 items-center'>
                   <TbRibbonHealth fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Daily Cleaning</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <TbRibbonHealth fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Disinfections</p>
                </div>

                
            </div>


            <div className='flex flex-col gap-4 '>
                <div className='flex gap-1 items-center'>
                   <TbRibbonHealth fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Fire Extinguishers</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <TbRibbonHealth fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Smoke Detectors</p>
                </div>

               
            </div>

        </div>


        <div>
            <img className='h-[160px] mt-4 lg:w-[1035px] lg:h-[450px]' src='/Map-Placeholder@2x 2.png'/>
        </div>


        <p className='font-bold lg:text-[20px] text-[18px]'>Nearby Services</p>

        <div className='flex gap-4  items-center'>

            <div className='w-[120px] h-[60px] md:w-[240px] md:h-[100px] shadow-lg border border-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col'>
                <p className='text-[13px] md:text-[18px] font-bold'>Grill Restro bar</p>
                <p className='text-[10px] text-[#484848]'>100 meters awaay</p>
                <div className='flex'>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                </div>
            </div>

            <div className='w-[120px] h-[60px] md:w-[240px] md:h-[100px] shadow-lg border border-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col'>
                <p className='text-[13px] md:text-[18px] font-bold'>Grill Restro bar</p>
                <p className='text-[10px] text-[#484848]'>100 meters awaay</p>
                <div className='flex'>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                </div>
            </div>

            <div className='hidden lg:flex w-[120px]  h-[60px] md:w-[240px] md:h-[100px] shadow-lg border border-[rgba(0,0,0,0.1)]  justify-center items-center flex-col'>
                <p className='text-[13px] md:text-[18px] font-bold'>Grill Restro bar</p>
                <p className='text-[10px] text-[#484848]'>100 meters awaay</p>
                <div className='flex'>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                </div>
            </div>

            <div className='hidden lg:flex w-[120px]  h-[60px] md:w-[240px] md:h-[100px] shadow-lg border border-[rgba(0,0,0,0.1)]  justify-center items-center flex-col'>
                <p className='text-[13px] md:text-[18px] font-bold'>Grill Restro bar</p>
                <p className='text-[10px] text-[#484848]'>100 meters awaay</p>
                <div className='flex'>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                </div>
            </div>


            <div className='hidden lg:flex w-[120px]  h-[60px] md:w-[240px] md:h-[100px] shadow-lg border border-[rgba(0,0,0,0.1)]  justify-center items-center flex-col'>
                <p className='text-[13px] md:text-[18px] font-bold'>Grill Restro bar</p>
                <p className='text-[10px] text-[#484848]'>100 meters awaay</p>
                <div className='flex'>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                   <AiFillStar fontSize={'15px'}/>
                </div>
            </div>

              
              <div>
                 <BsArrowRightCircleFill fontSize={'35px'}/>
              </div>

        </div>


        <div className='w-[120px] h-[40px] md:w-[250px] md:h-[50px] rounded-[30px] bg-green mt-[15px] flex justify-center items-center'>
             <p className='font-bold text-white-5'>Show on Map</p>
        </div>

      </div>
    </div>
  )
}

export default Block4
