import React from 'react'

function IntrestFreeEMI() {
  return (
    <div>
        <div>
        <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Pay With EMI</h3>
    </div>
    <div className=' flex flex-col py-3 justify-center'>
            <label htmlFor="number" className=' md:text-base text-sm'>Select Your card Issue</label>
            <select className='  md:h-[40px] h-[30px]  text-gray-300 focus:text-[#000]  md:w-[65%] w-full border border-[#DADCE0]  my-3 md:text-sm text-xs'>
                <option value="01">Select Your card Issue</option>
  <option value="boi">Bank of India (BOI)</option>
  <option value="canara">Canara Bank</option>
  <option value="bob">Bank of Baroda (BOB)</option>
  <option value="indusind">IndusInd Bank</option>
  <option value="yes">Yes Bank</option>
  <option value="uco">UCO Bank</option>
  <option value="central">Central Bank of India</option>
  <option value="sib">South Indian Bank</option>
</select>
<div className='flex gap-3'>
    <input type="checkbox" name="" id="" />
   <p className='md:text-sm text-xs'>I agree to the terms and conditions.</p> 
</div>
            </div>
            <div className='py-3 flex flex-col justify-center'>
            <label htmlFor="number" className='md:text-base text-sm '>Enter Credit Card Number</label>
            <input type="number" name="number" id="" placeholder='Card Number' className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 md:text-sm text-xs'/>
            </div>
            <div className=' flex flex-col'>
            <label htmlFor="number" className='md:text-base text-sm '>Card Holder Name <span className='md:text-sm text-xs'>(Please Enter the same name which is written on your card)</span> </label>
            <input type="text" name="name" id="" placeholder='Card Holder Name' className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 md:text-sm text-xs'/>
            </div> 
            <div className='flex md:gap-4 gap-1 items-center w-full '>
            <div className=' flex flex-col  justify-center md:w-[22%] w-[33%]'>
            <label htmlFor="number" className='md:text-base text-xs'>Expiry Month</label>
            <select className='  md:h-[40px] h-[30px]  text-gray-300 focus:text-[#000]  md:w-[65%] w-full border border-[#DADCE0]  my-3 md:text-sm text-xs'>
                <option value="" >Enter Month</option>
                <option value="01">January</option>
  <option value="02">February</option>
  <option value="03">March</option>
  <option value="04">April</option>
  <option value="05">May</option>
  <option value="06">June</option>
  <option value="07">July</option>
  <option value="08">August</option>
  <option value="09">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option>
</select>
            </div>
            <div className='py-3 flex flex-col md:w-[22%] w-[34%]'>
            <label htmlFor="number" className='md:text-base text-xs'>Expiry Year</label>
            <select className=' text-gray-300 focus:text-[#000] p-2  border border-[#DADCE0] md:text-sm text-xs md:h-[40px] h-[30px] my-3 w-full  '>
                <option value="" className=''>Enter Month</option>
                <option value="01">January</option>
  <option value="02">February</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  <option value="2030">2030</option>
  <option value="2031">2031</option>
  <option value="2032">2032</option>
  <option value="2033">2033</option>
  <option value="2034">2034</option>
  <option value="2035">2035</option>
  <option value="2036">2036</option>
  <option value="2037">2037</option>
  <option value="2038">2038</option>
  <option value="2039">2039</option>
  <option value="2040">2040</option>
</select>
            </div>
            <div className='py-3 flex flex-col md:w-[22%] w-[33%]'>
            <label htmlFor="number" className='md:text-base text-xs'>CVV</label>
            <input type="password" name="number" id="" placeholder=' CVV ' className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 md:text-sm text-xs'/>
            </div>
            </div>
            <div className='flex gap-5 items-center'>
            <div>
        <h3 className='md:text-2xl text-sm font-bold'>₹24,479</h3>
    </div>
    <button className='  md:h-[40px] h-[30px] w-[80px] bg-richblue-15 text-white-5 text-sm  hover:bg-richblue-5'>
               Pay Now
       </button> 
            </div>
            <div className=''>
                <p className=' mt-6 md:text-sm text-xs text-[gray]  flex flex-wrap items-center '>By clicking on Pay Now ,you are agreeing our <span className='md:text-sm text-xs text-[blue]'>Terms&Condations,Privecy Policy and User Aggrement</span>  </p>   
            </div>
    </div>
  )
}

export default IntrestFreeEMI