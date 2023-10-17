import { PaymentRequestwithUPI } from '@/src/redux/slices/payment';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { RootState } from '@/src/redux/store/store';
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

interface props{
  pricePay:number | null; 
    setPricePay: (value: number | null)=>void
    name:string,
      phone:string,
      email:string,
      countryCode:string | undefined
}

function Upi({pricePay,setPricePay,name,email,phone,countryCode}:props) {

  const dispatch = useAppDispatch();
  const {room} = useSelector((state:RootState)=>state.room)
  const [htmlContent, setHtmlContent] = useState('');

        const [upi,setUpi] = useState<string | null>(null);



const handleBankSelect = (e: React.ChangeEvent<HTMLInputElement>)=>{
  setUpi(e.target.value);
}

const handlePay = async()=>{
        try {
                let data = {
                  "txnid": localStorage.getItem("enquiryKey"),
                  "amount": `${pricePay}`,
                  "firstname": name,
                  "email": email,
                  "phone": `${countryCode+phone}`,
                  "productinfo": "Hotel",
                  "pg": "UPI",
                  "bankcode": "UPI",
                  "vpa": "anything@payu",
                  "surl": `${window.location.origin}/confirm`,
                  "furl": "https://apiplayground-response.herokuapp.com/",
                  "clientid": "0"
                }
                if( !data.phone || !data.email || !data.firstname){
                  toast.error("please fill all required filled!")
                  return;
                }
                const res = await dispatch(PaymentRequestwithUPI(data));
                if(res){
                  setHtmlContent(res)
                }
              } catch (error) {
                console.log(error);
              }
}

  return (
    <div>
      <div>
        <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Slect Any UPI</h3>
      </div>
      <form className=''>
        <div className='flex items-center gap-3 py-4'>
          <input type="radio" value="payu" id="" name='upi' onChange={handleBankSelect} checked={upi==="payu"} />
          <Image src="/img/download (1).png" alt=" payu" height={30} width={50} />
          <p className='text-base'>Payu</p>
        </div>
        <div className='flex items-center gap-3 py-4'>
          <input type="radio" value="amazone pay" id="" name='upi' onChange={handleBankSelect} checked={upi==="amazone pay"} />
          <Image src="/img/download (2).png" alt="amazone pay" height={40} width={60} />
          <p className='text-base'>amazone pay</p>
        </div>
        <div className='flex items-center gap-3 py-4'>
          <input type="radio" value="Paytm" id="" name='upi' onChange={handleBankSelect} checked={upi==="Paytm"} />
          <Image src="/img/download (3).png" alt="Paytm" height={40} width={60} />
          <p className='text-base'>Paytm</p>
        </div>
        <div className='flex items-center gap-3 py-4'>
          <input type="radio" value="Phonepay" id="" name='upi' onChange={handleBankSelect} checked={upi==="Phonepay"} />
          <Image src="/img/download (4).png" alt="Phonepay" height={40} width={60} />
          <p className='text-base'>Phonepay</p>
        </div>
      </form>
    </div>
  )
}

export default Upi