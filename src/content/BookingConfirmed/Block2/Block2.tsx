import { RootState } from '@/src/redux/store/store';
import React from 'react'
import {BsCalendarCheckFill,BsFillCalendarXFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';

const Block2 = () => {

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
    <div className='flex flex-col gap-8 md:px-12 px-6 pb-12'>
        <div className='flex flex-col gap-8'>
            <p className='text-xl md:text-2xl font-semibold'>Your Trip starts {getDay}, {date + " " +  getMonth + " "+  year}</p>
            <div className='flex gap-4 '>
                <div className='font-medium'>
                    <p className='flex items-center gap-2 mb-2'> <BsCalendarCheckFill/>Check-in</p>
                    <p className='flex items-center gap-2'> <BsFillCalendarXFill/>Check-out</p>
                </div>
                <div>
                    <p className='mb-2'>{getDay}, {date + " " +  getMonth + " "+  year}, from 12 AM</p>
                    <p>{getDay1}, {date1 + " " +  getMonth + " "+  year}, until 12 AM</p>
                </div>
            </div>
            <div className='border-t border-t-black-50 '></div>
        </div>
        <div className='flex flex-col gap-8'>
            <div className='flex gap-4 '>
                <div className='font-semibold flex flex-col gap-2'>
                    <p>Hotel Address</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                    <p>pinkytourtravel@gmail.com</p>
                    <p>+91 9999999999</p>
                </div>
            </div>
            <div className='border-t border-t-black-50 '></div>
        </div>
        <div className='flex gap-12 items-center'>
            <p>Total Price</p>
            <div className='flex items-center gap-2'>
                <p>₹{room && room.length> 0 &&room[0]?.Rooms.length> 0 && room[0]?.Rooms[0].Rates.length> 0 && room[0]?.Rooms[0].Rates[0]?.Net}</p>
                <div className='px-6 py-1 rounded-3xl text-green-1000 bg-green-100'>Paid</div>
            </div>
        </div>
        <div className='border-t border-t-black-50 '></div>
        <div className='flex gap-6 flex-wrap'>
            <button className='px-16 py-2 rounded-3xl text-white-5 bg-[#1D64EC]'>Contact Property</button>
            <button className='px-16 py-2 rounded-3xl text-[#1D64EC] border border-[#1D64EC]'>Cancel reservation</button>
        </div>
    </div>
  )
}

export default Block2