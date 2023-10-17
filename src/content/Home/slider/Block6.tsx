import React from 'react'
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Data } from '../../../../src/constant/dat1';

const Block6 = () => {

    const settings = {
        dots: true,
    arrows:true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<GiPreviousButton />,
    nextArrow:<GiNextButton />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='w-[700px] flex relative border-2 border-black-1000 h-[200px] overflow-hidden justify-center items-center '>
    
<div className='flex flex-col  w-[500px] h-[100px] border-2 border-black-1000 justify-center overflow-hidden'>

    <Slider  {...settings}>

      {
        Data.map((item,index)=>(
          <p key={index} className='text-[25px] font-bold'>{item.text}</p>
        ))
      }  
    

    
    </Slider>
</div>
  
    </div>
 
  
  )
}

export default Block6
