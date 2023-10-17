import { RootState } from '@/src/redux/store/store';
import { useRouter } from 'next/router';
import React from 'react'
import {BsBuildings} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'
import { useSelector } from 'react-redux';

const Block6 = () => {
     const router = useRouter();
     const { room } = useSelector((state: RootState) => state.room);

     const price = room && room.length > 0 && room[0]?.Rooms.length > 0 && room[0]?.Rooms[0].Rates.length > 0 && room[0]?.Rooms[0].Rates[0]?.Net-(parseFloat(room && room.length > 0 && room[0]?.Rooms.length > 0 && room[0]?.Rooms[0].Rates.length > 0 && room[0]?.Rooms[0].Rates[0]?.Offers && room[0]?.Rooms[0].Rates[0]?.Offers.Amount) || 0)
  return (
    <div className='flex justify-center mb-24'>
      <div className=' lg:hidden w-[320px] lg:h-[460px] border border-[rgba(0,0,0,0.1)] rounded-[10px] shadow-lg p-8 '>
     <p className=' font-bold text-[24px] mb-[30px]'>{room && room.length > 0 && room[0]?.Currency} {price}</p>
     <hr></hr>

     <div className='mt-[40px]'>

     <p className='text-[#9A9A9A]'>Short Period: {room && room.length > 0 && room[0]?.Currency} {price}</p>
     <p className='text-[#9A9A9A]'>Medium Period: {room && room.length > 0 && room[0]?.Currency} {price}</p>
     <p className='text-[#9A9A9A]'>Long Period: {room && room.length > 0 && room[0]?.Currency} {price}</p>
     </div>

     <div>
     <div onClick={() => router.push('/payment')} className='w-[250px] cursor-pointer h-[50px] rounded-[30px] bg-green-1000 mt-[35px] flex justify-center items-center'>
             <p className='font-bold text-white-5'>Reserve Now</p>
        </div>

        <div onClick={() => router.push('/moreDetails')} className='w-[250px] cursor-pointer h-[50px] rounded-[30px] bg-[#9C9B9B] mt-[15px] flex justify-center items-center'>
             <p className='font-bold text-white-5'>More Deatils</p>
        </div>
     </div>

     <div className='flex flex-wrap gap-4 justify-between mt-5'>
        <div className='flex items-center gap-2'>
             <BsBuildings/>
            <p>Property Inquiry</p>
        </div>

        <div className='flex items-center gap-2'>
            <MdCall/>
            <p>Contact Host</p>
        </div>
     </div>


</div>
    </div>
  )
}

export default Block6
