import React from 'react'
import Button from '../../../src/components/home/Button'
// const interface Props {
//     id: number;
//     dir: string;
//     name: string;
// }
const Blockdata = [
    {
        id:"1",
        dir:"https://images.pexels.com/photos/1013427/pexels-photo-1013427.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Beloshi’s Cliffhanger House",
        bedroom:["10 Bedrooms","10 Bathrooms"],
        garage:"",
        btn:"$45,545",
        posted:"Posted by Dr.Drake",
    },
    {
        id:"2",
        dir:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Sky Penthouse | Luxurious 3bhk",
        bedroom:["10 Bedrooms"],
        garage:"2 Garage",
        btn:"$45,545",
        posted:"Posted by Dr.Drake",
    },
    {
        id:"3",
        dir:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Mystic Abode | An old colonial house",
        bedroom:["10 Bedrooms"],
        garage:"2 Garage",
        btn:"$45,545",
        posted:"Posted by Dr.Drake",
    },
    {
        id:"4",
        dir:"https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Waking Dream Cottage Bhimtal Lake View",
        bedroom:["10 Bedrooms","10 Bathrooms"],
        garage:"2 Garage",
        btn:"$45,545",
        posted:"Posted by Dr.Drake",
    },
]

function Block4() {
  return (
    <div className=' border-black-100 w-full flex justify-center md:items-center h-auto md:h-max mt-10'>
    <div className='w-11/12 flex flex-col '>
        <h1 className='text-black-100 font-semibold  text-lg md:text-4xl'>The very best of our Selections</h1>
        <div className='flex justify-between items-center'>
            <p className='text-black-100 font-normal text-[10px] md:text-xl'>Take a look at the best places in the Work</p>
            <p className='text-green-1000 font-semibold text-[9px] md:text-md'>See all</p>
        </div>
        <div className='w-full justify-evenly items-center flex mt-1 md:mt-4 flex-wrap '>
            {
                Blockdata.map((item,i) => (
                    <div className="border border-richblue-5 w-[90%] h-[120px] md:w-[490px] md:h-[200px] rounded-[1rem] md:rounded-[2.5rem]  mt-5 md:mt-10 flex   items-center md:py-5 md:px-4 p-2"  key={i}>
                        <div className='md:w-[260px] md:h-[170px] w-[120px] h-[100px] flex justify-center items-center'>
                            <img alt='best_selection_image' src={item.dir} className='w-full h-[100px] md:w-[260px] md:h-[170px] rounded-[20px]' />
                        </div>
                        <div className='flex flex-col justify-around h-full ml-2'>
                            <div className='text-black-100 font-semibold text-sm md:text-[22px] leading-7'>{item.name}</div>
                            <div className='flex justify-between text-xs md:text-base'>
                                <div className='ml-2'>{item.bedroom.map((j)=> (j))}</div> 
                                <div>{item.garage}</div>
                            </div>
                            <div className='flex justify-between items-end md:w-full '>
                                <p className=' md:w-36 text-[8px] md:text-base'>{item.posted}</p>
                                <Button text={item.btn} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default Block4
