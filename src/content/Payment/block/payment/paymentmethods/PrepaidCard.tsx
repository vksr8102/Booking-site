import React from 'react'
interface FormDataProps{
  formData:{
    cardNumber:string ,
    holder: string,
    expiryMonth: string,
    expiryYear: string,
    cvv: string,
  },
  formData1:{
    cardNumber:string,
    holder: string,
    expiryMonth: string,
    expiryYear: string,
    cvv: string,
  },
  formData2:{
    cardNumber:string,
    holder: string,
    expiryMonth: string,
    expiryYear: string,
    cvv: string,
  },
  setFormData:any
  setFormData1:any
  setFormData2:any
  }
function PrepaidCard({formData,setFormData,formData1,setFormData1,formData2,setFormData2}:FormDataProps) {
  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setFormData2((prevformData2: any) => ({
      ...prevformData2,
      [name]: value,
    }));
  };
  // console.log("formData2",formData2);
  const handleContinue =(e:any)=>{
    e.preventDefault()
  setFormData(formData)
  setFormData1({})
  setFormData2({})
  }
  return (
    <div>
     
       
     <div>
            <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Enter Prepaid Card Details</h3>
        </div>
        <form action="submit">
            <div className='py-3 flex flex-col justify-center'>
            <label htmlFor="number" className='md:text-base text-xs' >Enter Credit Card Number</label>
            <input type="text
            " name="cardNumber" id="" placeholder='Card Number' value={(formData2.cardNumber)} onChange={handleInputChange} className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 text-xs md:text-sm'/>
            </div>
            <div className='flex md:gap-4 gap-1 items-center w-full '>
            <div className=' flex flex-col  justify-center md:w-[22%] w-[33%]'>
            <label htmlFor="number" className='md:text-base text-xs'>Expiry Month</label>
            <select className='  md:h-[40px] h-[30px]  text-gray-300 focus:text-[#000]  md:w-[65%] w-full border border-[#DADCE0]  my-3 md:text-sm text-xs' name='expiryMonth' value={formData2.expiryMonth.toString()} onChange={handleInputChange} >
                <option value="" >Enter Month</option>
                <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>
            </div>
            <div className='py-3 flex flex-col md:w-[22%] w-[34%]'>
            <label htmlFor="number" className='md:text-base text-xs'>Expiry Year</label>
            <select className=' text-gray-300 focus:text-[#000] p-2  border border-[#DADCE0] md:text-sm text-xs md:h-[40px] h-[30px] my-3 w-full ' name='expiryYear' value={parseInt(formData2.expiryYear.toString())} onChange={handleInputChange} >
                <option value="" className=''>Enter Year</option>
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
            <input type="text" name="cvv" id="" placeholder=' CVV ' value={parseInt(formData2.cvv.toString())} onChange={handleInputChange}  className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 md:text-sm text-xs'/>
            </div>
            </div>
            <div className=' flex flex-col'>
            <label htmlFor="number" className=' md:text-base text-xs'>Card Holder Name</label>
            <input type="text" name="holder" id="" placeholder='Card Holder Name' value={formData2.holder.toString()} onChange={handleInputChange}  className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 text-xs md:text-sm'/>
            </div>  
            <div className='flex justify-end'>
<button className='p-[8px] bg-[#032C5C] text-white-5'onClick={handleContinue} >Continue</button>
    </div>
        </form>
    </div>
  )
}

export default PrepaidCard