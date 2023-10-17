
import { hotelApi } from '@/src/mocks/hotels';
import { RootState } from '@/src/redux/store/store';
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from '@/src/redux/store/rootReducer';


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

const Block2 = ({ item }: any) => {
    console.log(item);
    const router = useRouter();
    const {resultFilters } = useAppSelector((state) => state.hotels) 

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

    const handleRoomAmenities = (key:string) =>{
        const data = resultFilters && resultFilters.length>0 && resultFilters[5] && resultFilters[5].FilterValues.filter((i:any)=> i.Code===key)
        return data && data.length>0 && data[0].FilterValue
    }

    return (
        <div>

            <div className='p-4 xl:flex  lg:mx-[100px] lg:gap-10'>
                <div className='lg:flex xl:block lg:gap-24'>
                    {/* <div className='block h-[180px] lg:w-[420px] lg:h-[280px]'>
                        <Slider {...settings1}>
                            {item && item.RoomImages && item.RoomImages.length > 0 && item.RoomImages.slice(0,14).map((i:any,index:number)=>(
                            <img key={index} className='w-full h-[180px] lg:w-[420px] lg:h-[280px]' src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${i && i.image}`} />))}
                        </Slider>
                    </div> */}
                    <div className=' hidden lg:block  lg:w-[351px]'>

                        <p className='text-[25px] font-bold text-[#0A225F]'>{item && item.RoomName}</p>

                        <div className='pl-5'>
                            <ul style={{ listStyleType: 'inherit' }}>
                                <li className='text-[14px] text-[#484848]'>409 sq.feet(38 sq meter)</li>
                                <li className='text-[14px] text-[#484848]'>Free Self Parking</li>

                            </ul>
                        </div>

                        <div className=' '>
                            {item && item?.RoomAmenities && item?.RoomAmenities?.length > 1 &&
                            <>
                            <p className='font-bold text-[18px]'>Amenities</p>
                            <div className='pl-8'>
                                <ul style={{ listStyleType: 'inherit' }}>
                                    {item && item.RoomAmenities && item.RoomAmenities.length > 0 && item.RoomAmenities.map((i: string, index: number) => {
                                        return <li key={index} className='text-[14px] text-[#484848]'>{handleRoomAmenities(i)}</li>
                                    })}
                                </ul>
                            </div>
                                    </>
                                }
                        </div>
                    </div>

                </div>

                <div className='flex md:flex-col flex-wrap w-full'>


                    {item && item?.Rates?.map((data: any, index: number) => (
                        <div key={index} >
                            <div className='w-[100px] h-[30px] bg-richblue-10 flex justify-center items-center rounded-md my-3 '>


                                <p className='text-[white]' >Option- {index + 1}</p>
                            </div>

                            <div className='md:flex md:justify-evenly md:mb-2'>


                                <div className='md:p-8 md:border-r-2'>
                                    <p className='font-bold text-[18px]'>Room Plan</p>
                                    <div className='px-5 mt-2'>
                                        <ul className='flex flex-col gap-2' style={{ listStyleType: 'inherit' }}>
                                            <li className='text-[14px] text-[#484848]'>Free WiFi</li>
                                            <li className='text-[14px] text-[#484848]'>Free valet parking</li>
                                            <li className='text-[14px] text-[#484848]'>Accommodation</li>
                                            <li className='text-[14px] text-[#484848]'>{(data && data.CancellationPolicies.length>0 && data.CancellationPolicies[0].CancelFrom)?"Refundable":"Non-Refundable"}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='md:p-8 md:border-r-2'>
                                    <p className='font-bold text-[18px]'>Inclusions</p>
                                    <div className='px-5 mt-2'>
                                        <ul className='flex flex-col gap-2' style={{ listStyleType: 'inherit' }}>
                                            <li className='text-[14px] text-[#484848]'>Free WiFi</li>
                                            <li className='text-[14px] text-[#484848]'>Accommodation</li>
                                            <li className='text-[14px] text-[#484848]'>{data && data.BoardName}</li>
                                        </ul>
                                    </div>
                                </div>


                                {/* <div className='md:p-8 '>
                                    <p className='font-bold text-[18px]'>Amenities</p>
                                    <div className='px-5 mt-2'>
                                        <ul className='flex flex-col gap-2' style={{ listStyleType: 'inherit' }}>
                                            <li className='text-[14px] text-[#484848]'>Television</li>
                                            <li className='text-[14px] text-[#484848]'>Air Conditioning</li>
                                            <li className='text-[14px] text-[#484848]'>Private Pool</li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div className=''>
                                    <div className='flex gap-1 mt-8  md:justify-center'>
                                        <div>
                                        {data && data.Offers && data.Offers.Amount && <p className='font-bold md:text-[18px] line-through'>₹{(data && data.Net)}</p>}
                                        <p className='font-bold md:text-[18px]'>₹{(data && data.Net)-(parseFloat(data && data.Offers && data.Offers.Amount) || 0)}</p>
                                        </div>
                                        <p className='text-[12px] flex items-end justify-end mb-1'>per Night</p>
                                    </div>
                                    <div onClick={() => router.push(`/details?rateKey=${data && data.RateKey}`)} className='w-[120px] h-[40px] cursor-pointer bg-green-1000 rounded-[50px] flex justify-center items-center mt-3 text-[#FFF]'>
                                        <p>Book Room</p>
                                    </div>
                                </div>


                            </div>
                            {index !== (item?.Rates?.length - 1) && <hr className='md:block hidden'></hr>}
                        </div>
                    ))}

                </div>


            </div>

            <div className='w-full h-[3px] bg-black-10 my-5'>

            </div>
        </div>
    )
}

export default Block2
