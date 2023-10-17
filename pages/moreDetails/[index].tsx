import React, { useEffect, useState } from 'react'

import Block1 from '../../src/content/moreDetails/Block1'
import Block2 from '../../src/content/moreDetails/Block2'
import Block3 from '../../src/content/moreDetails/Block3'
import Block4 from '../../src/content/moreDetails/Block4'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/redux/store/store'
import { useRouter } from 'next/router'


const More = () => {
  const {asPath, pathname} = useRouter()
    const id  = asPath.split("/")[2]
    const {hotels} = useSelector((state:RootState) => state.hotels)
    let hotel = hotels.filter((i:any) => i.HotelCode===id);

    useEffect(()=>{
      if(id){
        hotel = hotels.filter((i:any) => i.HotelCode===id);
      }
    },[id])
    
    let unique:string[] = [];
    hotel&&hotel.length>0&&hotel[0]&& hotel[0].Rooms&&hotel[0].Rooms.forEach((element:any) => {
        if (!unique.includes(element.RoomName)) {
            unique.push(element.RoomName);
        }
    });

    const [selectedTab, setSelectedTab] = useState('');

    useEffect(() => {
      // Check if hotel and hotel[0].Rooms exist and if selectedTab is an empty string
      if (
        hotel &&
        hotel.length > 0 &&
        hotel[0] &&
        hotel[0].Rooms &&
        selectedTab === ''
      ) {
        setSelectedTab(hotel[0].Rooms[0].RoomName); // Set the initial selectedTab
      }
    }, [hotel]); 
    // const [selectedRoom,setselectedRoom] = useState(hotel&&hotel.length>0&&hotel[0]&& hotel[0].Rooms&&hotel[0].Rooms.filter((i:any)=> i.RoomName===hotel&&hotel.length>0&&hotel[0]&& hotel[0].Rooms&&hotel[0].Rooms[0].RoomName))

    
    // useEffect(()=>{
    //   console.log(selectedTab);
    //   if(selectedTab)

    //     setselectedRoom(hotel&&hotel.length>0&&hotel[0]&& hotel[0].Rooms&&hotel[0].Rooms.filter((i:any) => i.RoomName===selectedTab))
    // },[selectedTab])

  return (
    <div className='md:mt-[90px] mt-[50px]'>
      <Block1 hotel={hotel} unique={unique} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      { hotel&&hotel.length>0&&hotel[0]&& hotel[0].Rooms&&hotel[0].Rooms.filter((i:any)=> i.RoomName === selectedTab).map((item:any,index:number)=>{
                return <Block2 key={index} item={item}/>
      })}
      
      {/* <Block3/>
      <Block4/> */}
      
    </div>
  )
}

export default More
