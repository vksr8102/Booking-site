import React, { useState,useRef,useEffect } from 'react'
import BlockLeft from './blockleft/BlockLeft'
import BlockRight from './blockright/BlockRight'
import { IoIosArrowDropdown } from 'react-icons/io';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { DisplayCoupon, GetLoyaltyPoints } from '@/src/redux/slices/payment';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store/store';

const useStyle = makeStyles((theme) => ({
  drawerPaper: {
      top: '40px',
      "@media (min-width:768px)":{
          top:'72px'
      }
  }
}))

const Block = () => {
  const dispatch = useAppDispatch();
  const classes = useStyle();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [ltPoint, setLtPoint] = useState<number | null>(null)
  const [promoCode, setPromoCode] = useState<any>(null)
  const [pricePay, setPricePay] = useState<number | null>(null)
  const [giftCardRes,setGiftCardRes] = useState()

  const {room} = useSelector((state:RootState)=>state.room)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  // const handleClick = ()=>{
  //   setShow(!show)
  // }

  // const handleOutsideClick = (event: MouseEvent) => {
  //   if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
  //     setShow(false);
  //   }
  // };

  const fetchCoupon = async ()=>{
    try {
        let data = {
          "Enquiryno": localStorage.getItem("enquiryKey"),
          "Product": "Hotel",
          "Type": "Hotel",
          "CCNumber":"" 
      }
      const res = await dispatch(DisplayCoupon(data));

    } catch (error) {
      console.log(error);
    }
}
  const fetchLoyality = async ()=>{
    try {
        let data = {
          "Enquiryno": localStorage.getItem("enquiryKey"),
          "Product": "Hotel",
          "Type": "Hotel",
          "Amount": `${room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net}`
      }
      const res = await dispatch(GetLoyaltyPoints(data));
      if(res)
        setLtPoint(res)
    } catch (error) {
      console.log(error);
    }
}

  useEffect(() => {
    if(room){
      setPricePay(Number(room && room.length> 0 &&room[0]?.Rooms.length>0 && room[0]?.Rooms[0] &&room[0]?.Rooms[0].Rates.length>0&&room[0]?.Rooms[0].Rates[0].Net))
    }
    fetchLoyality()
    fetchCoupon();
    
  }, []);
  
  return (
   <div className='flex  my-12 md:px-20 px-5 gap-5 mt-[90px]'>
      <div ref={drawerRef} onClick={handleOpen}  className={`cursor-pointer fixed bottom-[10%] md:hidden w-fit flex gap-4 items-center border rounded ${open ? "border-[red]" : 'border-green-300'} px-2  py-2 right-5 z-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-base bg-green-400`}><span className={`text-2xl ${show ? 'rotate-180' : 'rotate-0'} `}><IoIosArrowDropdown style={{color:'white'}}/></span>
      </div>
      <BlockLeft giftCardRes={giftCardRes} setGiftCardRes={setGiftCardRes} pricePay={pricePay} setPricePay={setPricePay} promoCode={promoCode} setPromoCode={setPromoCode} />
      <div className={`md:flex hidden md:static bg-white-5 w-3/4 md:w-[380px] md:mt-0`}>
        <BlockRight ltPoint={ltPoint} giftCardRes={giftCardRes} setGiftCardRes={setGiftCardRes} pricePay={pricePay} setPricePay={setPricePay} promoCode={promoCode} setPromoCode={setPromoCode} />
     </div>
      <Drawer anchor='left' BackdropProps={{ invisible: true }} classes={{ paper: classes.drawerPaper}} open={open} onClose={handleClose} transitionDuration={{ enter: 400, exit: 400 }} ModalProps={{ sx: { position: 'absolute' } }}>
        <BlockRight ltPoint={ltPoint} giftCardRes={giftCardRes} setGiftCardRes={setGiftCardRes} pricePay={pricePay} setPricePay={setPricePay} promoCode={promoCode} setPromoCode={setPromoCode} />
      </Drawer>
   </div>
  )
}

export default Block