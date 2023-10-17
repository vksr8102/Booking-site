import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

function Block1() {
  const router = useRouter()
  const handleNevigate = ()=>{
    router.back()
  }
  return (
    <div className='pb-7 border-b-2 border-[#D1D2D4]'>
      <div className='flex gap-3 items-center py-4'>
        <AiOutlineArrowLeft  className='font-bold text-2xl' onClick={handleNevigate}/>
        <h1 className='text-[#0A225F] font-bold text-3xl'>Detailed Comparison</h1>
      </div>

      <div className='flex   items-center gap-4 md:flex-row flex-col'>
<div className='flex-[1]'>
<h2 className='text-base font-bold text-[#0A225F]'>Comparison summary</h2>
<p className=' text-xs'>4 key differences</p>
</div>

{/* card */}
<div className='flex gap-5 flex-[3] md:flex-row flex-col '>
<div className='px-5 py-2  card bg-white-5 pt-9  relative  w-[250px] h-[400px]'>
  <AiOutlineClose className='absolute right-2 top-2 text-xl'/>
  <div className='flex flex-col justify-center items-center'>
   <img src="https://health-insurance-seven.vercel.app/_next/image?url=%2Fassets%2Finsurance-companies%2Fcare.png&w=1080&q=75" alt=""  className='h-[100px] w-[100px]'/>
  </div>

   <br/>

   <div className='text-[#6AB47E] text-xs   flex flex-col justify-center items-center'>
   <p >13 more plans</p>
   <br/>
   <IoIosArrowDown />
   </div>

   <h2 className='text-xl font-bold text-[#0A225F]'>Care Supreme Direct</h2>
  <p className='text-xs text-[#6AB47E] font-semibold py-1'>
  5% Direct Discount*
  </p>
  <div className='flex items-center gap-1 text-[#726D76]'>
    <input type="radio" name="" id="" />
    <label htmlFor="" >Compare the plans</label>
  </div>
  <div className='flex items-center justify-between  text-xs py-1 text-[#726D76]'>
    <p> Cover amount</p>
    <p> Cashless Hospitals</p>
  </div>
  <div className='flex items-center gap-11 font-bold py-1 text-start'>
    <p>5 Lakh</p>
    <p> 292</p>
  </div>

<button className='w-full rounded-md bg-[#F5AB01] text-white-5 font-bold my-1 py-1 text-xs'>Buy Now</button>
<p className=' text-[#726D76] py-1 text-center'>Rs. 4378</p>
</div>

 {/* cards */}

 <div className='w-[250px] card p-5  h-[400px] flex justify-center items-center'>
<div className=' w-[100px] h-[100px] border-[2px] border-[#F5AB01] rounded-[50%] flex justify-center items-center'>
  <AiOutlinePlus className='text-[#F5AB01] font-extrabold text-[50px] '/>
</div>
</div>
      </div>
      </div>   
    </div>
  )
}

export default Block1