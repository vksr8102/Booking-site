import React, { useEffect, useState } from 'react'
import {MdSoupKitchen} from 'react-icons/md'
import {PiTelevisionSimpleLight,PiWifiHighBold} from 'react-icons/pi'
import {MdBalcony} from 'react-icons/md'
import {TbAirConditioning} from 'react-icons/tb'
import {GiWashingMachine} from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/redux/store/store'

const Block3 = () => {
   const {room} = useSelector((state:RootState)=>state.room)
   const [count,setCount] = useState<number>(0);
   useEffect(()=>{
      if(room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length>10){
         setCount(10);
      }
      else{
         setCount(room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length);
      }
   },[room])
  return (
    <div>
      <div className='p-5  md:px-[100px] flex flex-col gap-4 lg:w-[1050px]' >
        <p className='font-bold lg:text-[24px] text-[18px]'>Offered Amenities</p>

        <div className='flex justify-between '>


            <div className='grid grid-cols-3 gap-2 w-full'>
                {room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length>0 && room[0].Amenities.slice(0,count).map((item:string,index:number)=>{
                  return <div key={index} className='flex items-center justify-start '>
                  {/* <MdSoupKitchen fontSize={'25px'}/> */}
                  <p className='text-[16px] text-[#484848]'>{item}</p>
               </div>
                })}

               </div>   
               </div>   
               {room && room.length>0 && room[0] && room[0].Amenities && (room[0].Amenities.length===0 || room[0].Amenities[0]==="") && <div className='flex justify-between '>
               <div className='flex flex-col gap-4 '>
               <div className='flex gap-1 items-center'>
                   <MdSoupKitchen fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Kitchen</p>
                </div>
                <div className='flex gap-1 items-center'>
                   <TbAirConditioning fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Air Conditioner</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <GiWashingMachine fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Wahser</p>
                </div>
                </div>


            <div className='flex flex-col gap-4 '>
                <div className='flex gap-1 items-center'>
                   <PiTelevisionSimpleLight fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Television with Netflix</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <PiWifiHighBold fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Free Wireless Internet</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <MdBalcony fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Balcony or Patio</p>
                </div>
            </div>


            <div className='hidden md:flex md:flex-col md:gap-4  '>
                <div className='flex gap-1 items-center'>
                   <PiTelevisionSimpleLight fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Television with Netflix</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <PiWifiHighBold fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Free Wireless Internet</p>
                </div>

                <div className='flex gap-1 items-center'>
                   <MdBalcony fontSize={'25px'}/>
                   <p className='text-[16px] text-[#484848]'>Balcony or Patio</p>
                </div>
            </div>

        </div>}


        {(room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length>10) && count<(room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length) ? <div onClick={()=> setCount(room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length)} className='w-[242px] h-[60px] rounded-[4px] border border-[#0A225F] mt-4 flex justify-center items-center'>
          <p className='text-[16px] text-[#0A225F] font-semibold '>Show All {(room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length)-count} Amenities</p>
        </div> : (room && room.length>0 && room[0] && room[0].Amenities && room[0].Amenities.length>10) && <div onClick={()=> setCount(10)} className='w-[242px] h-[60px] rounded-[4px] border border-[#0A225F] mt-4 flex justify-center items-center'>
          <p className='text-[16px] text-[#0A225F] font-semibold '>Show Less</p>
        </div>}
      </div>
    </div>
  )
}

export default Block3
