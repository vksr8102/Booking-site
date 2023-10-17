import React, { useState } from 'react'
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store/store';
import { Box } from '@mui/material';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { ApplyCoupon } from '@/src/redux/slices/payment';
import {ImCancelCircle} from 'react-icons/im'

interface props{
  ltPoint:number | null;
  giftCardRes:any;
  setGiftCardRes: (value:any)=> void
  pricePay:number | null,
  setPricePay: (value:number | null)=> void
  promoCode: any
  setPromoCode: (value:any)=> void
}

const BlockRight: React.FC<props> = ({ltPoint,giftCardRes,setGiftCardRes,pricePay,setPricePay,promoCode,setPromoCode}) => {
  const dispatch = useAppDispatch();
  const {room} = useSelector((state:RootState)=>state.room)
  const {coupons} = useSelector((state:RootState)=>state.payment)
  const [selectedCoupon,setSelectedCoupon] = useState<string | undefined>();
  const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
      if(!promoCode)
        setSelectedCoupon(event.target.value)
  }
  
  const handleApplyCode = async()=>{
    try {
      let data = {
        "Enquiryno": localStorage.getItem("enquiryKey"),
        "Product": "Hotel",
        "Type": "Hotel",
        "Amount":`${pricePay}`,
        "CouponCode": selectedCoupon
        // "CCNumber":"512345"     //optional will enter after cardnumber statting 6 digit of card number
    }
      const res = await dispatch(ApplyCoupon(data))
      if(res){
        setPromoCode(res)
        setPricePay(Number(res && res.NetAmount))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancelPromoCode = ()=>{
    setPricePay(promoCode && promoCode.Amount)
    setPromoCode(null)
    setSelectedCoupon(undefined)
  }

  return (
    <Box sx={{ maxWidth: { xs: 300, sm: '100%' }, padding: {xs:'10px',sm:'0px'}}}>
      <div className=''>
        <h1 className='md:text-2xl text-xl rozha-one text-[#0A225F] font-bold '>Tariff Details</h1>
      </div>
      {/* card 1 */}
      <div className='md:py-9 py-2  md:px-7 shadow-none md:shadow-xl  bg-white-5 my-1.5 montserrat rounded-[10px] '>
        <div className='flex justify-between pb-1.5 border-b border-[#E0E2E6]'>
          <p className='text-[#9A9A9A] text-base font-medium montserrat'>Hotel Charges</p>
          <p className='text-[#9A9A9A] text-base font-medium montserrat'>{room && room.length> 0 &&room[0].Currency === "EUR" ? "€" : room && room.length> 0 &&room[0].Currency === "INR" ? "₹" : "$"}  {room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net}</p>
        </div>
        <div className='border-b border-[#E0E2E6] py-3 '>
          <div className='flex justify-between pb-1.5 items-center'>
            <p className=' text-base font-medium montserrat'>Sub Total</p>
            <p className=' text-base font-medium montserrat'>{room && room.length> 0 &&room[0].Currency === "EUR" ? "€" : room && room.length> 0 &&room[0].Currency === "INR" ? "₹" : "$"}  {room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net}</p>
          </div>
          <div className='flex justify-between pb-1.5 items-center '>
            <p className='text-[#9A9A9A] text-base font-medium montserrat'>Hotel GST</p>
            <p className='text-[#9A9A9A] text-base font-medium montserrat'>{room && room.length> 0 &&room[0].Currency === "EUR" ? "€" : room && room.length> 0 &&room[0].Currency === "INR" ? "₹" : "$"}  {room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net}</p>
          </div>
          <div className='flex justify-between pb-1.5 items-center'>
            <p className='text-[#9A9A9A] text-base font-medium montserrat'>Service Charge</p>
            <p className='text-[#9A9A9A] text-base font-medium montserrat'>{room && room.length> 0 &&room[0].Currency === "EUR" ? "€" : room && room.length> 0 &&room[0].Currency === "INR" ? "₹" : "$"}  {room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net}</p>
          </div>
          {promoCode && <div className='flex justify-between pb-1.5 items-center'>
            <p className='text-[#2f9a36] text-base font-medium montserrat'>Promo Code</p>
            <p className='text-[#2f9a36] text-base font-medium montserrat'>-{room && room.length> 0 &&room[0].Currency === "EUR" ? "€" : room && room.length> 0 &&room[0].Currency === "INR" ? "₹" : "$"}  {promoCode && promoCode.CouponDiscount}</p>
          </div>}
        </div>
        <div className='flex justify-between py-4 items-center'>
          <p className='font-bold  md:text-2xl text-xl montserrat'>You Pay</p>
          <p className='font-bold  md:text-2xl text-xl montserrat'>{room && room.length> 0 &&room[0].Currency === "EUR" ? "€" : room && room.length> 0 &&room[0].Currency === "INR" ? "₹" : "$"}  {pricePay}</p>
        </div>
        <div className='flex justify-between flex-wrap py-4 items-center'>
          <div className='flex gap-1 items-center'>
            <HiOutlineOfficeBuilding />
            <p className='text-base font-medium montserrat'>Property Inquiry</p>
          </div>
          <div className='flex gap-1 items-center'>
            <BsTelephone />
            <p className='text-base font-medium montserrat'>Contact Host</p>
          </div>
        </div>
      </div>
      <div className='md:mx-6 md:mt-7 mt-4'>
        <h1 className='md:text-2xl text-xl rozha-one text-[#0A225F] font-bold '>Promo Codes</h1>
      </div>
      {/* card 2 */}
      <div className='md:py-9 py-2  md:px-7 shadow-none md:shadow-xl bg-white-5 my-1.5 montserrat rounded-[10px]'>
        <p className='md:text-base text-sm'>Select a Promo Code</p>
        <div className='flex gap-1 py-4 my-[23px]  items-center flex-wrap'>
          <input disabled={promoCode?true:false} onChange={handleCouponChange} type="text" placeholder='Your Promo Code' className='md:w-[225px] w-[200px] h-[45px] border px-2 ' value={selectedCoupon?selectedCoupon:""} />
          {!promoCode ? <button onClick={handleApplyCode} disabled={(selectedCoupon==="" || selectedCoupon===null || selectedCoupon===undefined)?true:false} type="button" className='bg-[#0A225F] px-4 h-[45px] text-white-5 disabled:cursor-not-allowed disabled:bg-[#6d6d6d]'> Apply</button> : 
          <button onClick={handleCancelPromoCode} type="button" className='ml-2'> <ImCancelCircle style={{fontSize:'25px'}}/></button>}
        </div>

        { ltPoint !== null && <p className='mb-[10px] ml-1'>Loyality Point : <span className='text-green-1000'>{ltPoint}</span></p>}
        {/* sub card */}
        {coupons && coupons.map((data:any,index:number)=>(
            <div className='border border-[#0A225F] bg-[rgba(252, 253, 255, 0.65)] rounded-[4px] px-[14px] py-[14px] mb-2' key={index} >
            <div className='flex gap-[12px] items-center'>
              <input onChange={handleCouponChange} checked={selectedCoupon === (data && data.CouponCode)} type='radio' name={`radio${index}`} className='w-[18px] h-[18px]' value={data && data.CouponCode} />
              <div className='h-[27px] w-[97px]  border-dashed border-[1px] border-y-black-100 py-1.5 px-3'>
                <p className='text-xs text-green-1000 font-medium'>{data && data.CouponCode}</p>
              </div>
              {/* <p className='text-[10px]'>Save ₹ 453</p> */}
            </div>
            <p className='pt-[19px] text-xs'>{data && data.Remarks}</p>
          </div>
        ))}
        
      </div>
    </Box>
  )
}

export default BlockRight