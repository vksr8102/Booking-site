import { useRouter } from 'next/router'
import React from 'react'

const Block4 = () => {
    const router = useRouter();
  return (
    <div className='mb-24'>
      <div className='p-4 xl:flex  lg:mx-[100px] lg:gap-10'>
        <div className='lg:flex xl:block lg:gap-24'>
        <img className='w-full h-[180px] lg:w-[420px] lg:h-[280px]' src='/Rectangle 249 (1).png'/>
        <div className=' hidden lg:block  lg:w-[351px]'>

            <p className='text-[25px] font-bold text-[#0A225F]'>Guest Room, 2 Double Beds, City View </p>

            <div className='pl-5'>
            <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>409 sq.feet(38 sq meter)</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        
                    </ul>
            </div>

            <div className=' '>
                <p className='font-bold text-[18px]'>Amenities</p>
                <div className='pl-8'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Television</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Television</li>
                        <li className='text-[14px] text-[#484848]'>Television</li>
                    </ul>
                </div>
                </div>

        </div>

        </div>

        <div className='flex justify-evenly md:flex-col'>


            <div>
                <div className='w-[100px] h-[30px] bg-richblue-10 flex justify-center items-center rounded-md'>
                    <p className='text-[white]'>Option-1</p>
                </div>

                <div className='md:flex md:justify-center md:items-center md:mb-2'>

                
                <div className='md:p-8 md:border-r-2'>
                <p className='font-bold text-[18px]'>Room Plan</p>
                <div className='px-5'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                    </ul>
                </div>
                </div>

                <div className='md:p-8 md:border-r-2'>
                <p className='font-bold text-[18px]'>Room Plan</p>
                <div className='px-5'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                    </ul>
                </div>
                </div>


                <div className='md:p-8 '>
                <p className='font-bold text-[18px]'>Room Plan</p>
                <div className='px-5'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                    </ul>
                </div>
                </div>

                <div>
                      <div className='flex mt-4 items-center justify-center'>
                        <p className='font-bold md:text-[18px]'>₹76,599</p>
                        <p className='text-[12px]'>per Night</p>
                      </div>
                      <div onClick={()=> router.push('/details')} className='w-[120px] cursor-pointer h-[40px] bg-green-1000 rounded-[50px] flex justify-center items-center mt-3'>
                     <p>Book Room</p>
                </div>
                </div>


                </div>
                
            </div>


<hr></hr>


            <div className='md:mt-10'>
                <div className='w-[100px] h-[30px] bg-richblue-10 flex justify-center items-center rounded-md'>
                    <p className='text-[white]'>Option-2</p>
                </div>

                <div className='md:flex md:items-center md:justify-center'>

                <div className='md:p-8 md:border-r-2'>
                <p className='font-bold text-[18px]'>Room Plan</p>
                <div className='px-5'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                    </ul>
                </div>
                </div>

                <div className='md:p-8 md:border-r-2'>
                <p className='font-bold text-[18px]'>Room Plan</p>
                <div className='px-5'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                    </ul>
                </div>
                </div>

                <div className='md:p-8'>
                <p className='font-bold text-[18px]'>Room Plan</p>
                <div className='px-5'>
                    <ul style={{listStyleType:'inherit'}}>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                        <li className='text-[14px] text-[#484848]'>Free Self Parking</li>
                    </ul>
                </div>
                </div>

                <div>
                      <div className='flex mt-4 items-center justify-center'>
                        <p className='font-bold md:text-[18px]'>₹76,599</p>
                        <p className='text-[12px]'>per Night</p>
                      </div>
                      <div onClick={()=> router.push('/details')} className='w-[120px] cursor-pointer h-[40px] bg-green-1000 rounded-[50px] flex justify-center items-center mt-3'>
                     <p>Book Room</p>
                </div>
                </div>

                </div>
                
            </div>

        </div>


      </div>

      <div className='w-full h-[3px] bg-black-10 my-5'>

      </div>
    </div>
  )
}

export default Block4
