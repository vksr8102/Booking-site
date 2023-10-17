import React from 'react'

function Block3() {
  return (
    <div className=' h-max relative'>
        <div  className='w-[220px] h-[350px] border-2 border-richblue-10 rounded-[50px] absolute bg-[#fff] translate-x-3 -translate-y-20'>
            <div className='flex pt-10 px-2 justify-between items-center '>
               <img src='/img/jpeg-removebg-preview 1.svg' alt='payment-Method' className='w-[90px]'/>
               <img src='/img/logo.svg' alt='payment-Method'  />
            </div>
            <div className='bg-richblue-10 w-11/12 h-[1px]  text-center ml-2 mt-2'></div>
            <div className='w-full h-28  flex '>
              <div className='w-[115px] text-sm justify-center items-center flex flex-col text-start ml-2'>
                <p className='font-bold'>Gabrielle Delacruz</p>
                <p className='font-medium'>4528 7056 9845 9641</p>
              </div>
              <div className='rotate-90 translate-y-4 -translate-x-1 text-richblue-10 text-sm font-medium'>
                AncorCoin<span className='text-[#00000080]'>pay</span>
              </div>
            </div>
            <div className='flex justify-between p-2 mx-2'>
              <div className='w-[20px] text-[#000] text-base font-medium'>09/12 valid date</div>
              <img src='/img/Group 8.svg' alt='payment-Method' className='w-[40px] h-[30px] mt-4' />
            </div>
        </div>

        <div  className='w-[250px] h-[400px] mb-10  flex flex-col justify-end  bg-[#0a225f54] rounded-[22px] mt-10'>
            <div className='px-2'>
            <div className='flex justify-between font-bold text-sm text-[#000]'>
              <div>Order Number</div>
              <div>25628</div>
            </div>
            <div className='flex justify-between font-bold text-sm text-[#000]'>
              <div>Insurance type</div>
              <div>Life</div>
            </div>
            <div className='flex justify-between font-bold text-sm text-[#000] mb-2'>
              <div>VAT (35%)</div>
              <div>$150.00</div>
            </div>
            <div className='bg-[#fff] border-2 border-richblue-10 h-[60px] px-2 rounded-md mb-2 w-[200px] mx-auto'>
                <div>You have to pay</div>
                <div className='flex justify-between'>
                <div className='font-bold text-sm text-[#000]'>870<span className='font-medium text-[11px] text-[#000]'>.56 USD</span></div>
                <img src='/img/credit-card 1.svg' alt='' className='w-[22px] h-[22px]'/>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Block3
