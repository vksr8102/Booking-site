import React from 'react'

const data = [
    {
        id:1,
        img:"/img/Property col image.svg",
        name:"Choose the right property!",
        para:"Economy"
    },{
        id:2,
        img:"/img/Property col image (1).svg",
        name:"Best environment for rental",
        para:"Lifestyle"
    },{
        id:3,
        img:"/img/Property col image (2).svg",
        name:"Boys Hostel Apartment",
        para:"Property"
    }
]

function Block3() {
  return (
    <div className='w-full flex justify-center items-center mt-[100px] mb-[100px]'>
        <div className='w-11/12'>
            <h1 className='font-bold text-5xl text-black-1000 mb-[50px]'>Hosting Tips & Guides</h1>
        <div className='flex justify-between items-center'>
                {
                    data.map((item,i)=> (
                        <div key={i} className='flex flex-col items-start justify-start '>
                            <img src={item.img} alt='host_images' className='shadow-black-5 shadow-md object-cover w-[360px] h-[340px] rounded-[12px]'/>
                            <h1 className='text-lg font-bold text-black-100'>{item.name}</h1>
                            <p className='text-sm font-normal text-black-50'>{item.para}</p>
                        </div>
                    ))
                }
        </div>
        </div>
    </div>
  )
}

export default Block3
