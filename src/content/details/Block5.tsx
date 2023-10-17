import { GetCommentReviews } from '@/src/redux/slices/payment';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { RootState } from '@/src/redux/store/store';
import React, { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useSelector } from 'react-redux';

interface props{
    review:any;
    setReview: (value:any)=>void
}

const Block5:React.FC<props> = ({review,setReview}) => {
    const dispatch = useAppDispatch();
    const { room } = useSelector((state: RootState) => state.room); 
    

    let shortMonthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

    const handleDateChange = (date:Date)=>{
        let date1 = new Date(date);
        let day = date1.getDate();
        let month = date1.getMonth();
        let month1 = shortMonthNames[month]
        let year = date1.getFullYear();

        let fullDate = `${day} ${month1} ${year}`

        return fullDate
    }

  return (
    <div>
      <div className='p-5  md:px-[100px] flex flex-col gap-4 '>
      <p className='font-bold lg:text-[24px] text-[18px] flex items-center gap-2'>Reviews <AiFillStar color='yellow'/> 5.0</p>
      <div className='md:flex md:gap-[100px]'>

        <div className='flex gap-10'>
            <div>
                <p className='text-[#9A9A9A]'>Amenities</p>
                <p className='text-[#9A9A9A]'>Communication</p>
                <p className='text-[#9A9A9A]'>Value of Money</p>
            </div>

            <div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
            </div>

        </div>

        <div className='flex gap-10'>
            <div>
                <p className='text-[#9A9A9A]'>Amenities</p>
                <p className='text-[#9A9A9A]'>Communication</p>
                <p className='text-[#9A9A9A]'>Value of Money</p>
            </div>

            <div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
            </div>

        </div>


        <div  className='hidden lg:flex gap-10'>
            <div>
                <p className='text-[#9A9A9A]'>Amenities</p>
                <p className='text-[#9A9A9A]'>Communication</p>
                <p className='text-[#9A9A9A]'>Value of Money</p>
            </div>

            <div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
               <div className='flex gap-3 items-center'>
                   <div className='h-[1.5px] w-[100px] bg-[#9A9A9A]'></div>
                   <p className='text-[#9A9A9A]'>5.0</p>
               </div>
            </div>

        </div>

      </div>
      </div>








      <div className='p-5 md:px-[100px] flex md:flex-row flex-col gap-5 md:gap-10'>


    {review && review.length>0 && review.map((data:any,index:number)=>(
        <div key={index} className='flex flex-col gap-2 md:w-[380px]'>
        <div className='flex items-center gap-2'>

            <div>
               <img className='md:h-[70px] md:w-[70px] h-[50px] w-[50px]' src={data && data.ImageURL}/>
            </div>
            <div>
               <p>{data && data.CustomerName}</p>
               <p>{handleDateChange(data && data.CommentDate)}</p>
            </div>

        </div>

        <div>
            <p className='text-[14px]'>{data && data.Comments}</p>
        </div>
    </div>
    ))}
        




        {/* <div className='flex flex-col gap-2 md:w-[380px]'>
            <div className='flex items-center gap-2'>

                <div>
                   <img className='md:h-[70px] md:w-[70px] h-[50px] w-[50px]' src='/Ellipse 4.svg'/>
                </div>
                <div>
                   <p>John Doberman</p>
                   <p>13 Aug 2023</p>
                </div>

            </div>

            <div>
                <p className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consectetur, non facere ratione, qui aut illo eum totam consequatur magnam suscipit ex facilis sit reprehenderit dolore atque, tempora maxime quisquam!</p>
            </div>
        </div>


        
        <div className='flex flex-col gap-2 md:w-[380px]'>
            <div className='flex items-center gap-2'>

                <div>
                   <img className='md:h-[70px] md:w-[70px] h-[50px] w-[50px]' src='/Ellipse 4.svg'/>
                </div>
                <div>
                   <p>John Doberman</p>
                   <p>13 Aug 2023</p>
                </div>

            </div>

            <div>
                <p className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consectetur, non facere ratione, qui aut illo eum totam consequatur magnam suscipit ex facilis sit reprehenderit dolore atque, tempora maxime quisquam!</p>
            </div>
        </div>


      </div>





      <div className='hidden p-5 md:px-[100px] md:flex md:flex-row flex-col gap-5 md:gap-10'>



        <div className='flex flex-col gap-2 md:w-[380px]'>
            <div className='flex items-center gap-2'>

                <div>
                   <img className='md:h-[70px] md:w-[70px] h-[50px] w-[50px]' src='/Ellipse 4.svg'/>
                </div>
                <div>
                   <p>John Doberman</p>
                   <p>13 Aug 2023</p>
                </div>

            </div>

            <div>
                <p className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consectetur, non facere ratione, qui aut illo eum totam consequatur magnam suscipit ex facilis sit reprehenderit dolore atque, tempora maxime quisquam!</p>
            </div>
        </div>




        <div className='flex flex-col gap-2 md:w-[380px]'>
            <div className='flex items-center gap-2'>

                <div>
                   <img className='md:h-[70px] md:w-[70px] h-[50px] w-[50px]' src='/Ellipse 4.svg'/>
                </div>
                <div>
                   <p>John Doberman</p>
                   <p>13 Aug 2023</p>
                </div>

            </div>

            <div>
                <p className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consectetur, non facere ratione, qui aut illo eum totam consequatur magnam suscipit ex facilis sit reprehenderit dolore atque, tempora maxime quisquam!</p>
            </div>
        </div>


        
        <div className='flex flex-col gap-2 md:w-[380px]'>
            <div className='flex items-center gap-2'>

                <div>
                   <img className='md:h-[70px] md:w-[70px] h-[50px] w-[50px]' src='/Ellipse 4.svg'/>
                </div>
                <div>
                   <p>John Doberman</p>
                   <p>13 Aug 2023</p>
                </div>

            </div>

            <div>
                <p className='text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consectetur, non facere ratione, qui aut illo eum totam consequatur magnam suscipit ex facilis sit reprehenderit dolore atque, tempora maxime quisquam!</p>
            </div>
        </div> */}


       

      </div>


      <div className='w-[242px] h-[60px] rounded-[4px] border border-[#0A225F] mt-4 flex justify-center items-center m-5 md:mx-[100px]'>
          <p className='text-[15px] text-[#0A225F] font-semibold'>Show All 100 Reviews</p>
        </div>

    </div>
  )
}

export default Block5
