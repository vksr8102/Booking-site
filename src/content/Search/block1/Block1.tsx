/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import BlockLeft from './BlockLeft'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFilter } from "react-icons/bs"
import { CiCircleRemove } from "react-icons/ci"
import BlockTop from './BlockTop';
import { useRouter } from 'next/router';
import { fetchHotel } from '@/src/redux/slices/hotels';
import { usePathname } from 'next/navigation'
import {useAppDispatch} from "@/src/redux/store/rootReducer"
import { useAppSelector } from '@/src/redux/store/rootReducer';
import {Pagination} from "@mui/material"
import toast from 'react-hot-toast';
import axios from 'axios';
import { getHotel } from '@/src/redux/slices/hotels';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
interface Destination {
  id: number;
  Code: string;
  Name: string;
  Country: string;
  value: any;
}

const PreviousBtn = (props: any) => {

  const { onClick } = props;
  return (
    <div className='absolute top-1/2 left-4 cursor-pointer z-10' onClick={onClick}>
      <img src='/img/arrow-left.svg' alt='Arrow Left' />
    </div>
  )
}

const NextBtn = (props: any) => {
  const { onClick } = props;
  return (
    <div className='absolute top-1/2 right-4 cursor-pointer z-10' onClick={onClick}>
      <img src='/img/arrow-right.svg' alt='Arrow Right' />
    </div>
  )
}





function Block1() {
  const pathname = usePathname()
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false)

  //--------REdux SETUP ------------------
  const {hotels} = useAppSelector((state) => state.hotels)
  const dispatch = useAppDispatch();
  const [hotelsData,setHotelsData] = useState(hotels && hotels);

  useEffect(()=>{
    if(hotels)
      setHotelsData(hotels)
  },[hotels])

  const [page,setPage] = useState(1);
  // loading 
  const [loading,setLoading] = useState(false);
  const [state, setState] = useState([
    {
      startDate: undefined,
      endDate: undefined,
      key: 'selection'
    }
  ]);
  const count = hotelsData && hotelsData.length>0 ? Math.ceil(hotelsData.length / 20) : 0;

  //------------------- FILTER SETUP ----------

  const handleClick = () => {
    setShow(!show)
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const settings1 = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ]

  };

  // ------------------------------------------------------------------------//
  // ----------THE FUNCTION FOR FETCH DATA FROM APIs------------------------//
  console.log(pathname);
  
  const id = pathname && pathname.split('/')[2];
  console.log(id,pathname);
  const [refresh,setRefresh] = useState<string>(id)

  useEffect(()=>{
    if(id)
      setRefresh(id)
  },[id])
  console.log("refresh",refresh)
  const fetchDataHandle = async() => {
    setLoading(true);
    try{
      if(!id){
        return;
      }
      // console.log("id 2",id);
      
      const result = await dispatch(fetchHotel(id));
        if(result){
          console.log(result) 
        }else{
          return ;
        }
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() =>{
    // setLoading(true);
    // setTimeout(() => {
    //   fetchDataHandle()
    // }, 10000);
  },[refresh]);

 
  return (
    <>
    {
      loading ? <div className='h-screen w-full flex justify-center items-center'><div className="spinner"></div></div> : 
          <div>
            <BlockTop setRefresh={setRefresh} setLoad={setLoading} setHotelsData={setHotelsData} />
            <div ref={drawerRef} onClick={handleClick} className={`cursor-pointer md:hidden w-fit flex gap-4 items-center border rounded ${show ? "border-[red]" : 'border-green-300'} px-6 py-2 ml-auto mr-6 mt-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-base`}>
          
                {!show && <span className='text-2xl'><BsFilter/></span>} 
                {show && <span className='text-2xl text-[red]'><CiCircleRemove/></span>}
                Filter
            </div>
          <div className='flex'>
            {/* Drawer start */}
            <div className='md:hidden absolute top-0 right-5'>
            <a className='text-3xl font-bold'>&#8801;</a>
          </div>
          {/* drawer end */}
            <div className={`flex md:static md:transition-none md:translate-x-0 transition-transform ${show ? 'translate-x-0' :'-translate-x-full'} absolute z-50 border-[#CBCBCB] border md:border-r-2  md:shadow-none shadow-[rgba(0,_0,_0,_0.4)_0px_30px_60px]`}>
              <BlockLeft hotelsData={hotelsData} setHotelsData={setHotelsData} setPage={setPage}/>
            </div>
            <div className='flex-[3]  pb-[30px] '>
              { 
                hotelsData.length>0 ? 
                <div>
                {
                hotelsData &&  hotelsData.slice((page*20)-20,(page*20)).map((data:any,i:number) => (
                  <div key={i} className='  md:pb-[30px] pb-4 md:pl-[28px] md:pr-[40px] pl-4 pr-4 border-b-[1px] pt-[30px]   bg-white-5 mb-1'>
                  <div className='flex  gap-[20px] md:flex-row flex-col justify-center w-full'>
                      <div className='relative md:w-[422px]  md:h-[284px] w-[300px] h-[200px]'>
                        <Slider {...settings1}>
                              {data && data.images && data.images.length>0 && data.images.slice(0,14).map((link:any,inedx:number)=>{
                                return <img key={inedx} src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${link && link.image}`} alt="" className='object-cover bg-no-repeat md:!w-[422px]  md:!h-[284px] !w-[300px] !h-[200px] md:rounded-br-[25px] md:shadow-[4px_4px_4px_0px_rgba(0, 0, 0, 0.25)]' />
                              })}
                                  
                                  
                         
                          {/* <img src="/Rectangle 250.jpg" alt="" className='object-cover bg-no-repeat md:w-[422px]  md:h-[284px] w-[300px] h-[200px] md:rounded-br-[25px] md:shadow-[4px_4px_4px_0px_rgba(0, 0, 0, 0.25)]' /> */}
                          {/* <img src="/Rectangle 250.jpg" alt="" className='object-cover bg-no-repeat md:w-[422px]  md:h-[284px] w-[300px] h-[200px] md:rounded-br-[25px] md:shadow-[4px_4px_4px_0px_rgba(0, 0, 0, 0.25)]' /> */}
                          {/* <img src="/Rectangle 250.jpg" alt="" className='object-cover bg-no-repeat md:w-[422px]  md:h-[284px] w-[300px] h-[200px] md:rounded-br-[25px] md:shadow-[4px_4px_4px_0px_rgba(0, 0, 0, 0.25)]' /> */}
                          {/* <img src="/Rectangle 250.jpg" alt="" className='object-cover bg-no-repeat md:w-[422px]  md:h-[284px] w-[300px] h-[200px] md:rounded-br-[25px] md:shadow-[4px_4px_4px_0px_rgba(0, 0, 0, 0.25)]' /> */}
                        </Slider>
                      </div>
                    <div className='py-3 flex flex-wrap justify-between gap-3 items-end w-full'>
                      <div >
                        <p className='text-[25px] font-bold'>{data && data.HotelName}</p>
                        <p className='text-[#45E203] font-bold uppercase'>Only {data && data.Rooms.length} room left</p>
                        <p>Near {data && data.DestinationName}</p>
                        <div className='h-[32px] w-[120px]  '>
                          <img src="star row.jpg" alt="" />
                        </div>
                        <ul className='list-disc px-4 py-2'>
                          <li>Free cancellation {i}</li>
                          <ul className='flex list-disc gap-10'>
                            <li>Elevator</li>
                            <li>coffee/tea in common area</li>
                          </ul>
                          <li>laundry</li>
                          <li>Break fast available (surcharge)</li>
                        </ul>
                      </div>
                      <div className='flex items-center justify-end flex-1'>
                        <div className='flex flex-col items-center gap-2'>
                        <div>
                          <p className='text-base font-bold'>{data && Math.floor(data?.MaxRate)}</p>
                          <p className=' text-slate-700 text-xs'>Per night</p>
                        </div>
                        <button onClick={()=> router.push(`/moreDetails/${data?.HotelCode}`)} className='hover:scale-95 transition-all duration-200 px-6 py-2 bg-green-1000 rounded-[50px] text-white-5 shadow-xl'>Book Now</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}

              <div className='w-full flex justify-center items-center my-8'>
                  <Pagination size='large' page={page} color='primary' sx={{"& .css-bf9wz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":{backgroundColor:'#052A5A'}}} count={count} showFirstButton showLastButton onChange={(e, value) =>setPage(value)} />
              </div>

              </div> : <div className='h-screen w-full flex justify-center items-center'><div className="shapes"></div><div className='md:text-5xl text-2xl text-[#000] font-semibold ml-5'>No Hotel in this Location </div></div>
              }
              
            </div>
          </div>
          
          </div>
     }
    </>
  )
}

export default Block1