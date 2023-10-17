import React, { useRef, useState } from 'react'
import { FcLike } from 'react-icons/fc'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { LiaBedSolid } from 'react-icons/lia'
import { BsBuildings } from 'react-icons/bs'
import { MdCall, MdFavorite, MdFavoriteBorder, MdPets } from 'react-icons/md'
import { useRouter } from 'next/router'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/redux/store/store'
import { PiBathtub } from 'react-icons/pi'
import { FaCar } from 'react-icons/fa'
import { useSearchParams } from 'next/navigation'
import { Box, Checkbox, Typography } from '@mui/material'

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { BiShower } from 'react-icons/bi'


const Block2 = (props: any) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const setOpen = props.setOpen;
  const open = props.open;
  const [show, setShow] = useState(false)
  // const catMenu = useRef(null);
  const catMenu = useRef<HTMLDivElement>(null);
  const { room } = useSelector((state: RootState) => state.room)
  const router = useRouter();
  const [check, setCheck] = useState(false)
  const handleChange = () => {
    setCheck(!check);
    setOpen(!open)
  }
  const closeOpenMenus = (e: MouseEvent) => {
    if (catMenu.current && show && !catMenu.current.contains(e.target as Node)) {
      setShow(false);
    }

  };
  const price = room && room.length > 0 && room[0]?.Rooms.length > 0 && room[0]?.Rooms[0].Rates.length > 0 && room[0]?.Rooms[0].Rates[0]?.Net-(parseFloat(room && room.length > 0 && room[0]?.Rooms.length > 0 && room[0]?.Rooms[0].Rates.length > 0 && room[0]?.Rooms[0].Rates[0]?.Offers && room[0]?.Rooms[0].Rates[0]?.Offers.Amount) || 0)
  //  const closeOpenMenus = (e: MouseEvent) => {
  //    if (catMenu.current instanceof HTMLElement && open && !catMenu.current.contains(e.target as Node)) {
  //      setShow(false);
  //    }
  //  };
  document.addEventListener('mousedown', closeOpenMenus);
  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }
  const currentUrl: any = window.location.href;

  let dataItem:any = localStorage?.getItem('dataItem');
  dataItem = JSON.parse(dataItem)
  // console.log(room)
  return (
    <div className=' lg:flex lg:flex-col xl:flex-row md:flex-col'>



      <div className='lg:w-[1000px]  md:px-[100px] flex flex-col lg:gap-5'>

        <div className='flex justify-between p-5 items-center'>

          <div>
            <p className='text-[18px] font-[700] lg:text-[28px] '>{room && room.length > 0 && room[0]?.HotelName}</p>
         { room && room.length > 0 && room[0]?.AddressStreet !=="" &&  <p className='text-[16px] text-[#9A9A9A]'>{room && room.length > 0 && room[0]?.AddressStreet},{room && room.length > 0 && room[0]?.city},{room && room.length > 0 && room[0]?.State},{room && room.length > 0 && room[0]?.Country}
            </p>}
            {/* <div className='flex gap-2 items-center pt-[13px]'>
             <input className='h-[16px] w-[16px] border border-black-5 cursor-pointer' type="checkbox" id="" checked={check&&open} value="" onChange={handleChange}/>
            <p className='text-[#6A6A6B]' >Compare other plans</p>
             </div> */}
          </div>



          <div className='flex gap-1 items-center relative'>
            <Checkbox {...label} icon={<MdFavoriteBorder fontSize={'22px'} />} checkedIcon={<MdFavorite style={{ color: "red" }} fontSize={'22px'} />} />
            <AiOutlineShareAlt fontSize={'22px'} style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: "5px", color: "#878787", marginRight: "10px", cursor: "pointer", }} onClick={handleOpen} />
            <Box sx={{ width: "300px", height: "200px", background: "#fff", boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", position: "absolute", top: "30px", right: "0", padding: "10px", borderRadius: "8px" }} display={show ? "block" : "none"}  >
              <Typography variant='h5' sx={{ fontSize: "12px", padding: "5px 10px 15px 10px ", display: "flex", justifyContent: "space-between", textAlign: "center" }}  > Share with your friends and family <AiOutlineClose onClick={handleClose} style={{ color: "gray", padding: "0px", cursor: "pointer", fontSize: "16px" }} /> </Typography>
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", width: "100%" }} ref={catMenu} >

                <FacebookShareButton
                  url={currentUrl}
                  quote={"Pinki Tour & Travel"}
                  hashtag='#website#Apps#dashboard#CRM'
                >
                  <FacebookIcon size={40} round={true} />
                  <Typography sx={{ fontSize: "12px" }} >Facebook</Typography>
                </FacebookShareButton>

                <WhatsappShareButton
                  url={currentUrl}
                  title={"Pinki Tour & Travel"}
                  separator={'  '}
                >
                  <WhatsappIcon size={40} round={true} />
                  <Typography sx={{ fontSize: "12px" }} >Whatsapp</Typography>
                </WhatsappShareButton>

                <EmailShareButton
                  url={currentUrl}
                  subject={"Pinki Tour & Travel"}
                  body={"Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes."}
                >
                  <EmailIcon size={40} round={true} />
                  <Typography sx={{ fontSize: "12px" }} >Email</Typography>
                </EmailShareButton>

                <LinkedinShareButton
                  url={currentUrl}
                  title={"Pinki Tour & Travel"}
                  summary={'Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes.'}
                  source='Techpyro.com'
                >
                  <LinkedinIcon size={40} round={true} />
                  <Typography sx={{ fontSize: "12px" }} >LinkedIn</Typography>
                </LinkedinShareButton>

                <PinterestShareButton
                  url={currentUrl}
                  media={"https://techpyro.com"}
                  description='Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes.'
                >
                  <PinterestIcon size={40} round={true} />
                  <Typography sx={{ fontSize: "12px" }} >PinInterest</Typography>
                </PinterestShareButton>

                <TwitterShareButton
                  url={currentUrl}
                  title={"Pinki Tour & Travel"}

                >
                  <TwitterIcon size={40} round={true} />
                  <Typography sx={{ fontSize: "12px" }} >Twitter</Typography>
                </TwitterShareButton>
              </Box>

            </Box>
          </div>

        </div>




        <div className='flex justify-between p-2'>
          <div className='w-[82px] h-[75px] md:w-[176px] md:h-[160px] bg-[#EFF0F2] flex flex-col justify-center items-center rounded-[8px]'>
            <LiaBedSolid style={{ color: "#002257" }} fontSize={'35px'} />
            <p className='text-[16px] font-semibold text-[#002257] '>Bedrooms</p>
          </div>

          <div className='w-[82px] h-[75px] md:w-[176px] md:h-[160px] bg-[#EFF0F2] flex flex-col justify-center items-center rounded-[8px]'>
            <PiBathtub style={{ color: "#002257" }} fontSize={'35px'} />
            <p className='text-[16px] font-semibold text-[#002257] '> Bathroom</p>
          </div>

          <div className='w-[82px] h-[75px] md:w-[176px] md:h-[160px] bg-[#EFF0F2] flex flex-col justify-center items-center rounded-[8px]'>
            <FaCar style={{ color: "#002257" }} fontSize={'35px'} />
            <p className='text-[16px] font-semibold text-[#002257] '>Cars/Bike </p>
          </div>

          <div className='w-[82px] h-[75px] md:w-[176px] md:h-[160px] bg-[#EFF0F2] flex flex-col justify-center items-center rounded-[8px]'>
            <MdPets style={{ color: "#002257" }} fontSize={'35px'} />
            <p className='text-[16px] font-semibold text-[#002257] '>Pets Allowed</p>
          </div>
        </div>



        <div className='flex flex-col p-4 gap-2'>
          <p className='text-[18px] font-bold lg:text-[24px]'>Hotel Description</p>
          <p className='text-[15px] text-[#666666]'>{room && room.length > 0 && room[0]?.Description && room[0]?.Description !== "" ? room && room.length > 0 && room[0]?.Description && room[0]?.Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore nulla ex laboriosam illo eius necessitatibus sapiente? Blanditiis delectus recusandae totam inventore a rerum vitae error."}</p>
          <div className='flex md:gap-10 gap-2 flex-wrap'> 
             <p><span className='font-bold'>Latitude</span> : {room && room.length > 0 && room[0]?.Latitude}</p>
             <p><span className='font-bold'>Longitude</span> : {room && room.length > 0 && room[0]?.Longitude}</p>
        </div>
        </div>
        
      </div>



      <div className='hidden lg:block lg:w-[382px] lg:h-[460px] lg:border border-[rgba(0,0,0,0.1)] lg:rounded-[10px] lg:shadow-lg lg:p-[40px]'>
        <p className=' font-bold lg:text-[24px] mb-[30px]'>{room && room.length > 0 && room[0]?.Currency} {price}</p>
        <hr></hr>

        <div className='mt-[40px]'>

          <p className='text-[#9A9A9A]'>Short Period: {dataItem?.checkIn}</p>
          {/* <p className='text-[#9A9A9A]'>Medium Period: {price}</p> */}
          <p className='text-[#9A9A9A]'>Long Period: {dataItem?.checkOut}</p>
        </div>

        <div>
          <div onClick={() => router.push('/payment')} className='w-[300px] cursor-pointer h-[60px] rounded-[30px] bg-green-1000 mt-[35px] flex justify-center items-center'>
            <p className='font-bold text-white-5'>Reserve Now</p>
          </div>

          <div onClick={() => router.push('/moreDetails')} className='w-[300px] cursor-pointer h-[60px] rounded-[30px] bg-[#9C9B9B] mt-[15px] flex justify-center items-center'>
            <p className='font-bold text-white-5'>More Details</p>
          </div>
        </div>

        <div className='flex justify-between mt-5'>
          <div className='flex items-center gap-2'>
            <BsBuildings />
            <p>Property Inquiry</p>
          </div>

          <div className='flex items-center gap-2'>
            <MdCall />
            <p>Contact Host</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Block2
