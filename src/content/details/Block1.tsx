import { RootState } from '@/src/redux/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Block1 = () => {
  const {room} = useSelector((state:RootState)=>state.room)
  console.log(room);
  
  
  return (
    <div className='flex p-3 flex-col lg:flex-row gap-4 justify-center sm:items-center md:p-10 md:mt-[80px] mt-[45px]' >

        <div >
           <img className='w-full h-[200px] rounded-[10px] xl:w-[685px] xl:h-[400px] lg:w-[650px] lg:h-[500px] md:w-[720px] md:h-[500px] sm:w-[600px] sm:h-[300px]   ' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${room && room.length>0 && room[0] && room[0].images && room[0].images.length>0 && room[0].images[0] && room[0].images[0].originalimage}`}/>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div className='flex gap-2'>
                <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[350px] md:h-[200px] sm:w-[300px] sm:h-[200px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${room && room.length>0 && room[0] && room[0].images && room[0].images.length>0 && room[0].images[1] && room[0].images[1].image}`}/>
                <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[350px] md:h-[200px] sm:w-[300px] sm:h-[200px] ' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${room && room.length>0 && room[0] && room[0].images && room[0].images.length>0 && room[0].images[2] && room[0].images[2].image}`}/>
            </div>
            <div className='flex gap-2'>
            <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[350px] md:h-[200px] sm:w-[300px] sm:h-[200px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${room && room.length>0 && room[0] && room[0].Rooms && room[0].Rooms.length>0 && room[0].Rooms[0] && room[0].Rooms[0].RoomImages && room[0].Rooms[0].RoomImages.length>0 && room[0].Rooms[0].RoomImages[0] && room[0].Rooms[0].RoomImages[0].image}`}/>
            <div>
            <img className='h=[114px] w-[162px] xl:w-[330px] xl:h-[200px] lg:w-[270px] lg:h-[230px] md:w-[350px] md:h-[200px] sm:w-[300px] sm:h-[200px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${room && room.length>0 && room[0] && room[0].Rooms && room[0].Rooms.length>0 && room[0].Rooms[0] && room[0].Rooms[0].RoomImages && room[0].Rooms[0].RoomImages.length>0 && room[0].Rooms[0].RoomImages[1] && room[0].Rooms[0].RoomImages[1].image}`}/>
             
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Block1
