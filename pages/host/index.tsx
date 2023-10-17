import Block2 from '../../src/content/Host/Block2'
import Block1 from '../../src/content/Host/Block1'
import Block3 from '../../src/content/Host/Block3'
import React from 'react'
import { useSelector } from 'react-redux'

function index() {
  // const auth = useSelector((state)=>state.auth)
  return (
    <div className='md:mt-[90px] mt-[50px]'>
    {/* <Block1/> */}
    <Block2/>
    <Block3/>
    </div>
  )
}

export default index

