import { RootState } from '@/src/redux/store/store'
import React from 'react'
import {FcOk} from 'react-icons/fc'
import { useSelector } from 'react-redux'

const Block1 = () => {
    const {room} = useSelector((state:RootState)=>state.room)

    let shortMonthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    let shortDayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday"
      ];
      
      let dataItem:any = localStorage.getItem("dataItem") 
      dataItem = JSON.parse(dataItem)
      // console.log(dataItem)
      const month = new Date(dataItem && dataItem.checkIn).getMonth()
      const date = new Date(dataItem && dataItem.checkIn).getDate()
      const day = new Date(dataItem && dataItem.checkIn).getDay()
      const year = new Date(dataItem && dataItem.checkIn).getFullYear()
    
      const month1 = new Date(dataItem && dataItem.checkOut).getMonth()
      const date1 = new Date(dataItem && dataItem.checkOut).getDate()
      const day1 = new Date(dataItem && dataItem.checkOut).getDay()
      const year1 = new Date(dataItem && dataItem.checkOut).getFullYear()
      const getMonth = shortMonthNames[month];
      const getMonth1 = shortMonthNames[month1];
      const getDay = shortDayNames[day];
      const getDay1 = shortDayNames[day1];
    
      function dateDifference(startDateStr:any, endDateStr:any) {
        let startDateParts = startDateStr && startDateStr.split('-');
        let endDateParts = endDateStr && endDateStr.split('-');
        
        let startDate:any = new Date(startDateStr && startDateParts[0], startDateStr && startDateParts[1] - 1, startDateStr && startDateParts[2]);
        let endDate:any = new Date(endDateStr && endDateParts[0], endDateStr && endDateParts[1] - 1, endDateStr && endDateParts[2]);
      
        let timeDifference = endDate - startDate;
        
        let millisecondsPerDay = 1000 * 60 * 60 * 24;
        let daysDifference = Math.floor(timeDifference / millisecondsPerDay);
        
        return daysDifference;
      }
      
      // Example usage
      let startDateStr = dataItem && dataItem.checkIn ; // January 1, 2023
      let endDateStr = dataItem && dataItem.checkOut;  // August 31, 2023
      
      let difference = dateDifference(startDateStr, endDateStr);


  return (
    <div className='flex gap-12 flex-col-reverse md:flex-row md:mt-[78px] mt-[45px] md:px-12 px-6 md:pt-12 pt-6'>
        <div className='flex-2 flex gap-4 flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-3xl'>
            <div>
                <img className='w-full' src={room && room.length>0 && room[0] && room[0].Rooms && room[0].Rooms.length>0 && room[0].Rooms[0] && room[0].Rooms[0].RoomImages && room[0].Rooms[0].RoomImages.length>0 && room[0].Rooms[0].RoomImages[0] && room[0].Rooms[0].RoomImages[0].image} alt='hotel'/>
            </div>

            <div>
                <div className='flex text-xl md:text-2xl gap-2 font-medium items-center'>{room && room.length> 0 &&room[0]?.HotelName} <span><img src='/star row.jpg' alt='star'/></span> </div>
                <div>3-star hotel located in {room && room.length> 0 &&room[0]?.ZoneName}</div>
            </div>

            <div className='flex gap-2 '>
                <div className='font-medium'>
                    <p>Check-in</p>
                    <p>Check-out</p>
                </div>
                <div>
                    <p>{getDay}, {date + " " +  getMonth + " "+  year}</p>
                    <p>{getDay1}, {date1 + " " +  getMonth + " "+  year}</p>
                </div>
            </div>
            <div className='border-t border-t-black-50 '></div>
            <div className='font-semibold'>{room && room.length>0 && room[0] && room[0].Rooms && room[0].Rooms.length>0 && room[0].Rooms[0] && room[0].Rooms[0].RoomName}</div>

        </div>
        <div className='flex-2 flex gap-4 flex-col justify-center items-center text-2xl md:text-3xl'>
            <i className='text-5xl md:text-7xl'><FcOk/></i>
            <div className='text-center'>Your booking is now confirmed!</div>
        </div>
    </div>
  )
}

export default Block1