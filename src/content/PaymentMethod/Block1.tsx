import React from 'react'

const data = ["Credit Card","Debit Card","Prepaid Card","UPI","Wallet"]

function Block1() {
  return (
    <div className='bg-green-1000 w-[250px] h-[350px] rounded-r-[35px]  flex justify-evenly pt-10 flex-col'>
        {
            data.map((item,i)=> (
                <div key={i} className='bg-[#fff] w-[210px]  items-center text-center py-2 rounded-r-[45px] text-2xl text-green-1000 font-semibold'>{item}</div>
            ))
        }
    </div>
  )
}

export default Block1
