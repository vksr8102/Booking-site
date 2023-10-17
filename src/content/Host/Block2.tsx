import React from 'react'

function Block2() {
  return (
    <div className='w-full flex justify-center items-center mt-[100px] mb-[100px]'>
        <div className='w-11/12 flex justify-between items-center'>
            <div className='flex justify-between items-center gap-10'>
                <img src="/img/mid image.svg" alt='host_images' className='shadow-black-5 shadow-sm object-cover w-[500px] h-[450px] rounded-[12px]'/>
                <div className='flex flex-col justify-between h-[350px] w-[500px]'>
                    <h1 className='text-5xl font-bold text-black-100'>Some Title Here</h1>
                    <p className='text-base font-normal text-black-50'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                    <p className='text-base font-normal text-black-50'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                    <p className='text-base font-normal text-black-50'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Block2
