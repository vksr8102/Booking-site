
import { RootState } from '@/src/redux/store/store'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useSelector } from 'react-redux'

interface props {
    hotel:any;
    unique:string[];
    selectedTab:string;
    setSelectedTab: (value:string) => void
}

const Block1: React.FC<props> = ({hotel,unique,selectedTab,setSelectedTab}) => {
    const { room } = useSelector((state: RootState) => state.room)

    let rating = (room && room.length > 0 && room[0] && room[0].StarRating && room[0].StarRating.split(" ")[0]) | 0
    
  return (

    <div>
   <div className='flex p-3 flex-col lg:flex-row gap-4 justify-center sm:items-center md:p-10' >

<div >
   <img className='w-full h-[200px] rounded-[10px] xl:w-[685px] xl:h-[400px] lg:w-[620px] lg:h-[500px] md:w-[720px] md:h-[400px] sm:w-[600px] sm:h-[300px]   ' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${hotel && hotel.length>0 &&hotel[0].images.length > 0 && hotel[0].images[0].biggerimage}`}/>
</div>
<div className='flex flex-col gap-2 justify-center items-center'>
    <div className='flex gap-2'>
        <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[330px] md:h-[200px] sm:w-[300px] sm:h-[200px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${hotel && hotel.length>0 &&hotel[0].images.length > 0 && hotel[0].images[1] && hotel[0].images[1].biggerimage}`}/>
        <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[330px] md:h-[200px] sm:w-[300px] sm:h-[200px] ' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${hotel && hotel.length>0 &&hotel[0].images.length > 0 && hotel[0].images[6] && hotel[0].images[6].image}`}/>
    </div>
    <div className='flex gap-2'>
    <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[330px] md:h-[200px] sm:w-[300px] sm:h-[200px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${hotel && hotel.length>0 &&hotel[0].images.length > 0 && hotel[0].images[5] && hotel[0].images[5].image}`}/>
    <div>
    <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[330px] md:h-[200px] sm:w-[300px] sm:h-[200px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${hotel && hotel.length>0 &&hotel[0].images.length > 0 && hotel[0].images[4] && hotel[0].images[4].biggerimage}`}/>
     
    </div>
    </div>

</div>

</div>

    <div className='md:m-0 mx-4 md:mx-[100px]'>
        <p className='md:text-[30px] text-[25px] font-bold text-[#0A225F]'>{hotel && hotel.length>0 && hotel[0].HotelName}</p>
        {rating > 0 && <div className='flex gap-2 '>
                ({Array.from({ length: rating }, (_, index) => index).map((e: any, index: number) => (
                  <AiFillStar key={index} style={{ color: '#FFC700', fontSize: '20px' }} />
                ))})
              </div>}
    </div>
    <div className='m-4 md:mx-[100px]'>
        <p className='text-[18px] font-bold lg:text-[24px]'>Room(s) Available</p>
    </div>

    <hr></hr>

    <div className='m-4 flex flex-col xl:flex-row items-center  lg:mx-[100px] gap-3'>
          <div className='flex lg:flex-row gap-3 flex-wrap'>
            {unique.map((item:any,index:number)=>{
                return <div onClick={()=> setSelectedTab(item)} key={index} className={`md:px-4 px-1 md:py-2 py-1 ${selectedTab===item?'bg-[#0A225F]':'bg-[#FFF]'} ${selectedTab===item?'border-none':'border'} border-[#0A225F] flex justify-center items-center flex-col md:flex-row`}>
                {/* <p className='text-[white] text-[18px]'>Room,</p> */}
                <p className={`${selectedTab===item ? "text-[#FFF]":"text-[#000]"} md:text-[16px] text-[13px]`}>{item}</p>
            </div>
            })}
        </div>
    </div>

    </div>
  )
}

export default Block1
