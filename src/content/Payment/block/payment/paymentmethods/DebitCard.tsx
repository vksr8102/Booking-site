import { PaymentWithCreditCard } from '@/src/redux/slices/payment';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { RootState } from '@/src/redux/store/store';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
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
  setFormData2:any;
  pricePay:number | null; 
    setPricePay: (value: number | null)=>void
    name:string,
      phone:string,
      email:string,
      countryCode:string | undefined
  }
function DebitCard({formData,setFormData,formData1,setFormData1,formData2,setFormData2,pricePay,setPricePay,name,email,phone,countryCode}:FormDataProps) {
  const dispatch = useAppDispatch();
  const {room} = useSelector((state:RootState)=>state.room)
  const [htmlContent, setHtmlContent] = useState('');


  const handleInputChange = (event:any) => {
    const { name, value} = event.target;
    setFormData1((prevformData1: any) => ({
      ...prevformData1,
      [name]: value,
    }));
  };
  // console.log("formData1",formData1);
  const handleContinue = async(e:any)=>{
    e.preventDefault()
    try {
      setFormData(formData)
      setFormData1({})
      setFormData2({})
      let data = {
        "txnid": localStorage.getItem("enquiryKey"),
        "amount": `${pricePay}`,
        "firstname": name,
        "email": email,
        "phone": `${countryCode+phone}`,
        "productinfo": "Hotel",
        "pg": "cc",
        "bankcode": "No Need, api will get it from card",
        "surl": `${window.location.origin}/confirm`,
        "furl": "https://apiplayground-response.herokuapp.com/",
        "ccnum": formData.cardNumber,
        "ccexpmon": formData.expiryMonth,
        "ccexpyr": formData.expiryYear,
        "ccvv": formData.cvv,
        "ccname": formData.holder,
        "clientid": "0"
      }
      if(!data.ccnum || !data.ccexpmon || !data.ccexpyr || !data.ccvv || !data.ccname || !data.phone || !data.email || !data.firstname){
        toast.error("please fill all required filled!")
        return;
      }
      const res = await dispatch(PaymentWithCreditCard(data));
      if(res){
        setHtmlContent(res)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
     
   <form action="" method="post">
     <div>
            <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Enter Debit Card Details</h3>
        </div>
            <div className='py-3 flex flex-col justify-center'>
            <label htmlFor="number" className='md:text-base text-xs' >Enter Credit Card Number</label>
            <input type="text" name="cardNumber" id="" placeholder='Card Number' value={(formData1.cardNumber)} onChange={handleInputChange} className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 text-xs md:text-sm'/>
            </div>
            <div className='flex md:gap-4 gap-1 items-center w-full '>
            <div className=' flex flex-col  justify-center md:w-[22%] w-[33%]'>
            <label htmlFor="text" className='md:text-base text-xs'>Expiry Month</label>
            <select className='  md:h-[40px] h-[30px]  text-gray-300 focus:text-[#000]  md:w-[65%] w-full border border-[#DADCE0]  my-3 md:text-sm text-xs' name='expiryMonth' value={formData1.expiryMonth} onChange={handleInputChange} >
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
            <select className=' text-gray-300 focus:text-[#000] p-2  border border-[#DADCE0] md:text-sm text-xs md:h-[40px] h-[30px] my-3 w-full ' name='expiryYear' value={(formData1.expiryYear)} onChange={handleInputChange} >
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
            <input type="number" name="cvv" id="" placeholder=' CVV ' value={formData1.cvv} onChange={handleInputChange}  className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 md:text-sm text-xs'/>
            </div>
            </div>
            <div className=' flex flex-col'>
            <label htmlFor="number" className=' md:text-base text-xs'>Card Holder Name</label>
            <input type="text" name="holder" id="" placeholder='Card Holder Name' value={formData1.holder} onChange={handleInputChange}  className='md:h-[40px] h-[30px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3 text-xs md:text-sm'/>
            </div> 
           
            <div className='flex justify-end'>
<button className='p-[8px] bg-[#032C5C] text-white-5' onClick={handleContinue} >Continue</button>
    </div>
    </form>
    {htmlContent && (
        <div>
          <iframe
            srcDoc={htmlContent} // Set the HTML content as srcDoc
            width="100%"
            height="500"
            frameBorder="0"
            title="API HTML Content"
          ></iframe>
        </div>
      )}
</div>
  )
}

export default DebitCard