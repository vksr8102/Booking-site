import React from 'react'
 interface Props {
    id: number;
    dir: string;
    name: string;
}
const Blockdata :Props[]= [
    {
        id:1,
        dir:"/img/Rectangle 7.svg",
        name:"Goa"
    },
    {
        id:2,
        dir:"/img/Rectangle 8.svg",
        name:"Himachal Pradesh"
    },
    {
        id:3,
        dir:"/img/Rectangle 9.svg" ,
        name:"Kerala"
    },
    {
        id:4,
        dir:"/img/Rectangle 10.svg"    ,
        name:"Rajasthan"
    },
    {
        id:5,
        dir:"/img/Rectangle 11.svg"    ,
        name:"UttaraKhand"
    },
    {
        id:6,
        dir:"/img/Rectangle 11.svg"    ,
        name:"UttaraKhand"
    },
]

function Block2() {
  return (
    <div className='w-full flex justify-center items-center h-max mt-10'>
    <div className='w-11/12 flex flex-col'>
        <h1 className='text-black-100 font-semibold text-lg md:text-4xl'>Choose Your Destination</h1>
        <p className='text-black-100 font-normal text-xs md:text-xl'>Take a look at the best places in the Work</p>
        <div className='flex justify-center items-center w-full'>
            <div className='  md:w-11/12 flex justify-center items-center mt-5 flex-wrap'>
                {
                    Blockdata.map((item,i) => (
                        <div className={`rounded-md justify-center items-center flex flex-col w-[110px] h-[115x] md:w-[210px] odd:mt-[45px] even:mb-[45px]  ${item.id == 6 ? "flex md:hidden " : ""}`} key={i}>
        
                            <img src={item.dir}  alt='homePage_destination_images' className="shadow-gray-md w-[100px] md:w-[230px] h-[122px] md:h-[250px]" />
                             
                            <p className='w-[90px]  md:w-full items-center text-center text-black-100 font-semibold '>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default Block2
