import Block1 from '../../src/content/PaymentMethod/Block1'
import Block2 from '../../src/content/PaymentMethod/Block2'
import Block3 from '../../src/content/PaymentMethod/Block3'
import React from 'react'

function index() {
  return (
    <div className='flex flex-col w-full h-max pt-[100px] justify-center items-center pr-5 mt-[90px]'>
        <h1 className='text-5xl font-medium text-black-100 '>Payment Methods</h1>
    <div className='flex justify-between items-start w-full  '>
      <Block1/>
      <Block2/>
      <Block3/>
    </div>
    </div>
  )
}

export default index
