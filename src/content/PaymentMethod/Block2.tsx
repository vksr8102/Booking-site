import React from 'react'

function Block2() {
  return (
    <div className='flex flex-col w-[640px] mt-3'> 
        <div className='text-end justify-end  flex w-full'>
            <div className='flex gap-2 '>
                {
                    [0,2].map((i,y)=> (<div key={y} className='rounded-[8px] w-[40px] h-[40px] bg-richblue-10 text-[#fff] font-medium text-center text-2xl'>{i}</div>))
                }
            </div>
            <div className='font-medium text-center text-2xl'>:</div>
            <div className='flex gap-2 '>
                {
                    [3,1].map((i,y)=> (<div key={y} className='rounded-[8px] w-[40px] h-[40px] bg-richblue-10 text-[#fff] font-medium text-center text-2xl'>{i}</div>))
                }
            </div>
        </div>
        <div className='text-2xl font-medium'>Card Number</div>
            <p className='font-normal text-sm text-black-5'>Enter the 16-digit number on the card</p>
            <div className='border rounded-xl flex justify-between w-[95%] mx-auto'>
                <div className="h-[50px] w-full  flex items-center justify-center rounded-md">
                    <div className="w-[47px] h-[33px] ">
                    <svg viewBox="0 0 48 48" height="33" width="47" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path><path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path><path d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" fill="#ff3d00"></path>
                    </svg>
                    </div>
                <input placeholder="2412 - 2412 - 2412 - 2412" id="input" className="outline-none text-2xl px-8 mx-auto w-[300px]" name="text" type="text" />
                <div className='text-richblue-10 pr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                    <path d="M22.9173 12.4652V13.5002C22.916 15.9262 22.1887 18.2867 20.8437 20.2298C19.4987 22.1728 17.6082 23.5943 15.4541 24.2821C13.3001 24.97 10.9978 24.8874 8.89072 24.0466C6.78365 23.2059 4.98467 21.6521 3.76207 19.6169C2.53947 17.5818 1.95877 15.1743 2.10656 12.7536C2.25436 10.3328 3.12274 8.02858 4.58219 6.18442C6.04164 4.34026 8.01397 3.05502 10.205 2.52038C12.3961 1.98574 14.6884 2.23034 16.7402 3.21771" stroke="#0A225F" stroke-width="1.4144" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.9176 4.49915L12.501 15.7604L9.37598 12.3854" stroke="#0A225F" stroke-width="1.4144" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            </div>

            <div className='flex mt-2  justify-between px-4'>
                <div>
                    <h4 className='text-2xl font-medium'>CVV Number</h4>
                    <p className='text-sm font-normal text-black-5'>Enter the 3 or 04 digit number on the card</p>
                </div>
                <div className='h-[50px] w-[300px] translate-x-10 justify-end flex'>
                        <input type='text' className='text-2xl rounded-lg border-[#0A225F] border font-medium outline-none w-[260px] h-full p-5' placeholder='4412'/> 
                    <div className='flex flex-col p-0 -translate-x-10'>
                    <img src='/img/more-horizontal (1) 1.svg' alt='payment_method' className='p-0 m-0 -translate-y-2'/>
                    <img src='/img/more-horizontal (1) 1.svg' alt='payment_method' className='p-0 m-0 -translate-y-7'/>
                    <img src='/img/more-horizontal (1) 1.svg' alt='payment_method' className='p-0 m-0 -translate-y-[3.2rem]'/>
                    </div>
                </div>
            </div>

            <div className='flex mt-2 px-2   '>
                <div className='ml-2'>
                    <h4 className='text-2xl font-medium'>Expire Date</h4>
                    <p className='text-base font-normal text-black-5'>Enter the expiration date of the card</p>
                </div>
                <div className='h-[50px] w-[300px]  flex ml-10'>
                
                        <input type='text' className='text-2xl rounded-lg border-[#0A225F] border font-medium outline-none w-[150px] h-full p-5' placeholder='4412'/> 
                    
                    <div className='text-5xl'>/</div>
                
                        <input type='text' className='text-2xl rounded-lg border-[#0A225F] border font-medium outline-none w-[150px] h-full p-5' placeholder='4412'/> 
                    
                </div>
            </div>

            <div className='flex mt-2  px-4 justify-between   '>
                <div>
                    <h4 className='text-2xl font-medium'>Password</h4>
                    <p className='text-base font-normal text-black-5'>Enter your dynamic password</p>
                </div>
                <div className='h-[50px] w-[300px]  flex ml-10 translate-x-10'>
                        <input type='text' className='text-5xl text-center text-black-100  rounded-lg border-[#0A225F] border font-medium outline-none w-[260px] h-full pb-8 pt-1 pr-5' placeholder='..............'/> 
                    <div className='flex flex-col p-0 -translate-x-10'>
                    <img src='/img/more-horizontal (1) 1.svg' alt='payment_method' className='p-0 m-0 -translate-y-2'/>
                    <img src='/img/more-horizontal (1) 1.svg' alt='payment_method' className='p-0 m-0 -translate-y-7'/>
                    <img src='/img/more-horizontal (1) 1.svg' alt='payment_method' className='p-0 m-0 -translate-y-[3.2rem]'/>
                    </div>
                </div>
            </div>

            <div>
                <div className={`w-[205px]   hover:scale-95 transition-all duration-200 text-center text-[6px] md:text-base px-2 py-[1px] md:px-10 md:py-3 rounded-[30px] font-bold
                bg-green-1000 text-[#fff]`} >Lets Get Started</div>
            </div>
    </div>
  )
}

export default Block2
