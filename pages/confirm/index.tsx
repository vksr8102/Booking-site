import Block1 from '../../src/content/BookingConfirmed/Block1/Block1'
import Block2 from '../../src/content/BookingConfirmed/Block2/Block2'
import React from 'react'

const index = () => {
  return (
    <div className='flex w-full flex-col gap-12 p-12 '>
        <Block1/>
        <Block2/>
    </div>
  )
}

export default index