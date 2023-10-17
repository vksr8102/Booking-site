import { ApplyGiftCard } from '@/src/redux/slices/payment';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { RootState } from '@/src/redux/store/store';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

interface cardDetail{
  CardNo:string,
  PinNum:string
}

interface props{
  giftCardRes:any;
  setGiftCardRes: (value:any)=> void
  pricePay:number | null; 
    setPricePay: (value: number | null)=>void
    promoCode: any
  setPromoCode: (value: any) => void
}

function GiftCard({giftCardRes,setGiftCardRes,pricePay,setPricePay, promoCode, setPromoCode}:props) {
  const dispatch = useAppDispatch();
  const {room} = useSelector((state:RootState)=>state.room)

  const [details,setDetails] = useState<cardDetail | null>(null)
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setDetails((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
console.log(details);
  const handleApply = async() =>{
    try {
      if(!giftCardRes){
      let data = {
        "EnquiryNo": localStorage.getItem("enquiryKey"),
        "CardNo":details?.CardNo,
        "PinNum":details?.PinNum,
        "Amount":`${pricePay}`
    }
    console.log(data);
    if(!data.CardNo || !data.PinNum){
      toast.error('please enter required filled!')
      return
    }

    const res = await dispatch(ApplyGiftCard(data));
      if(res){
        toast.success("you have successfully applied gift card")
        setGiftCardRes(res)
        setPricePay(res && res.NetAmount)
      }
    }
    else{
      let data = {
        "EnquiryNo": localStorage.getItem("enquiryKey"),
        "CardNo":details?.CardNo,
        "PinNum":details?.PinNum,
        "Amount":`${promoCode===null?(room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net):promoCode?.NetAmount}`
    }
    if(!data.CardNo || !data.PinNum){
      toast.error('please enter required filled!')
      return
    }

    const res = await dispatch(ApplyGiftCard(data));
      if(res){
        toast.success("you have successfully applied gift card")
        setGiftCardRes(res)
        setPricePay(res && res.NetAmount)
      }
    }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
       <div>
            <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Enter Gift Card Details</h3>
        </div> 
        <div className=' flex flex-col mt-3'>
            <label htmlFor="number" className=' '>Card Number </label>
            <input onChange={handleInputChange} type="number" name="CardNo" id="" placeholder=' Card Number' className='h-[40px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3'  />
            </div> 
            <div className=' flex flex-col'>
            <label htmlFor="number" className=' '>Pin Number </label>
            <input onChange={handleInputChange} type="number" name="PinNum" id="" placeholder='Pin Number' className='h-[40px] md:w-[65%] w-full border border-[#DADCE0] p-3 my-3'/>
            </div> 
            <button onClick={handleApply} className='md:w-[65%] w-full capitalize md:h-[50px] h-[35px] rounded-md text-white-5 bg-richblue-5 my-3'>Procced to pay</button> 
            {<div className='text-green-500'>
                {giftCardRes && giftCardRes.Message}
            </div>}
    </div>
  )
}

export default GiftCard