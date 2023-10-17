import React from 'react'
import {FaQuoteLeft} from "react-icons/fa"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PreviousBtn = (props: any) => {

    const { onClick } = props;
    return (
        <div className='absolute md:-top-24 -top-[70px] md:left-32 left-4 cursor-pointer z-10' onClick={onClick}>
            <img src='/img/arrow-left2.svg' alt='Arrow Left' />
        </div>
    )
}

const NextBtn = (props: any) => {
    const { onClick } = props;
    return (
        <div className='absolute md:-top-24 -top-[70px] md:right-32 right-4 cursor-pointer z-10' onClick={onClick}>
            <img src='/img/arrow-right2.svg' alt='Arrow Right' />
        </div>
    )
}

function Block5() {

    const settings = {
        // customPaging: function(i:any) {
        //     console.log(i);
        //     return (
        //       <a>
        //         <PiDotOutlineFill key={i} className={`text-[#002257] rounded-md active:text-3xl`}/>
        //       </a>
        //     );
        //   },
        className: "center",
        centerPadding: "0px",
        centerMode: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb text-[#002257] !bottom-full rounded-md -top-10 !text-[20px] !flex justify-center w-full absolute",
        arrows: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                },
            },
        ]

    };

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-11/12 flex flex-col gap-4 mt-12 '>
                <div className='relative text-center' >
                    {/* <img src="/img/chevron-down.svg" alt="chevon_arrow" className='md:w-[40px] md:h-[40px] w-[14px] h-[14px]' /> */}
                    <h1 className='text-sm md:text-4xl text-richblue-5'>What Our Clients Say About Us</h1>
                    {/* <img src="/img/chevron-down (1).svg" alt="chevon_arrow" className='md:w-[40px] md:h-[40px] w-[14px] h-[14px]' /> */}
                </div>
                <div className='md:my-12 my-6 text-center relative'>
                    <Slider {...settings}>

                        <div className='!w-[300px] z-50 bg-white-5'>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <img src="/img/Ellipse 17.svg" alt="" className='mb-2 w-[76px] h-[76px] ' />
                                <h2 className='font-semibold text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='!w-[300px] z-50 bg-white-5'>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <img src="/img/Ellipse 17.svg" alt="" className='mb-2 w-[76px] h-[76px] ' />
                                <h2 className='font-semibold text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='!w-[300px] z-50 bg-white-5'>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <img src="/img/Ellipse 17.svg" alt="" className='mb-2 w-[76px] h-[76px] ' />
                                <h2 className='font-semibold text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='!w-[300px] z-50 bg-white-5'>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <img src="/img/Ellipse 17.svg" alt="" className='mb-2 w-[76px] h-[76px] ' />
                                <h2 className='font-semibold text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='!w-[300px] z-50 bg-white-5'>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <img src="/img/Ellipse 17.svg" alt="" className='mb-2 w-[76px] h-[76px] ' />
                                <h2 className='font-semibold text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='!w-[300px] z-50 bg-white-5'>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <img src="/img/Ellipse 17.svg" alt="" className='mb-2 w-[76px] h-[76px] ' />
                                <h2 className='font-semibold text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>



                        {/* <div>
                <div className='mt-2'>
                    <img src="/img/Group 11.svg" alt="" className='md:w-[100px] md:h-[16px] w-[37px] h-[5px]' />
                </div>
                <div className='w-full flex justify-center items-center md:mt-52'>
                    <div className='flex w-[340px] md:w-11/12 md:h-[260px] justify-around items-center mt-10'>
                        <div className='relative shadow-gray-200 '>
                            <div className='md:translate-x-2  z-1000'>
                                <svg className='w-[107px] h-[122px] md:w-[303px] md:h-[343px] z-1000 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303 343" fill="none">
                                    <path d="M0.686759 62.3789C3.72559 140.216 5.74523 182.621 12.3207 246.624C17.883 271.099 23.7669 281.226 42.8597 288.134C118.897 309.838 172.237 327.216 234.092 342.024C259.277 341.42 268.255 334.859 276.265 320.177C289.953 268.391 292.512 211.689 302.442 139.573C303.773 111.761 298.267 100.465 276.265 88.5957C195.658 54.7465 78.4886 8.48892 78.4886 8.48892C78.4886 8.48892 56.0918 -2.28758 42.8597 0.478247C27.3842 5.33123 20.6517 10.7047 12.3207 21.5973C2.70946 34.4498 0.192144 43.3867 0.686759 62.3789Z" fill="white" />
                                </svg>

                            </div>
                            <div className='absolute z-[-1] -translate-y-[100px] -translate-x-2 md:-translate-y-[310px] md:-translate-x-8'>
                                <svg className='w-[107px] h-[122px] md:w-[303px] md:h-[343px]' xmlns="http://www.w3.org/2000/svg" width="345" height="405" viewBox="0 0 345 405" fill="none">
                                    <g filter="url(#filter0_d_1_815)">
                                        <path d="M32.8197 76.8502C25.8797 154.437 22.4599 196.752 20.7966 261.071C23.1834 286.056 27.724 296.852 45.7766 306.145C118.414 337.395 169.093 361.451 228.548 384.048C253.602 386.669 263.346 381.31 273.168 367.773C293.365 318.162 303.155 262.253 322.225 191.999C327.102 164.586 323.087 152.679 302.783 138.093C227.166 94.2136 116.874 33.352 116.874 33.352C116.874 33.352 96.0395 19.7999 82.5624 20.8509C66.5933 23.685 59.2289 28.1534 49.5733 37.8912C38.3974 49.409 34.7579 57.9507 32.8197 76.8502Z" fill="#002257" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1_815" x="0.796631" y="0.792786" width="343.303" height="403.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="10" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_815" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_815" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className='z-1000 md:w-[300px]  flex flex-col items-center justify-between h-auto -translate-y-28 md:-translate-y-[340px] md:translate-x-2'>
                                <img src="/img/Ellipse 17.svg" alt="" className=' w-[27px] h-[27px] md:w-[76px] md:h-[76px] ' />
                                <h2 className='font-semibold text-[6px] md:text-base'>Kato Drake Smith</h2>
                                <h2 className='font-normal text-[4px] md:text-sm'>App Developer</h2>
                                <h2 className='font-semibold text-[6px] md:text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal w-[82px] text-[4px] md:w-[230px] md:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='relative shadow-gray-200'>
                            <div className='md:translate-z-2 z-1000'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[107px] h-[122px] md:w-[303px] md:h-[343px] z-1000' viewBox="0 0 416 433" fill="none">
                                    <path d="M0.62793 337.695L38.1479 55.5321C47.1267 34.2465 55.1274 24.4931 81.671 13.5078C165.554 5.63801 233.499 3.95855 347.312 0C376.645 8.8112 394.238 13.5281 408.845 55.5321C412.328 169.345 415.995 250.574 415.598 324.938C414.4 357.978 407.046 371.127 381.08 384.222C223.725 413.091 137.615 428.655 63.6614 433C19.065 419.114 0.955128 399.961 0.62793 337.695Z" fill="white" />
                                </svg>
                            </div>
                            <div className='absolute z-[-1] -translate-y-[125px] translate-x-2 md:-translate-y-[350px] md:translate-x-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[107px] h-[122px] md:w-[303px] md:h-[343px]' viewBox="0 0 380 378" fill="none">
                                    <path d="M46.1393 0C14.8073 7.93582 6.10063 16.4044 0.62793 36.0747L18.6755 378H352.164C372.902 366.931 379.265 350.44 379.628 299.577C369.333 197.51 356.769 139.329 338.04 36.0747C328.596 21.7603 326.543 12.2025 289.39 10.9793L46.1393 0Z" fill="#002257" />
                                </svg>
                            </div>
                            <div className='z-1000 md:w-[300px]  flex flex-col items-center justify-between md:h-full -translate-y-32 md:-translate-y-[370px] md:translate-x-8'>
                                <img src="/img/Ellipse 16.svg" alt="" className='w-[27px] h-[27px] md:w-[76px] md:h-[76px]' />
                                <h2 className='font-semibold text-[6px] md:text-base'>Dr.Drakeson</h2>
                                <h2 className='font-normal text-[4px] md:text-sm'>UX/UX Designer</h2>
                                <h2 className='font-semibold text-[6px] md:text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal w-[82px] text-[3px] md:w-[230px] md:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                        <div className='relative shadow-gray-200'>
                            <div className='md:translate-z-2  z-1000'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[107px] h-[122px] md:w-[303px] md:h-[343px]' viewBox="0 0 303 343" fill="none">
                                    <path d="M302.573 62.3789C299.534 140.216 297.514 182.621 290.939 246.624C285.377 271.099 279.493 281.226 260.4 288.134C184.362 309.838 131.021 327.216 69.1645 342.024C43.9798 341.42 35.0011 334.859 26.991 320.177C13.3037 268.391 10.7438 211.689 0.814392 139.573C-0.516571 111.761 4.98877 100.465 26.991 88.5957C107.599 54.7465 224.77 8.48892 224.77 8.48892C224.77 8.48892 247.167 -2.28758 260.4 0.478247C275.875 5.33123 282.608 10.7047 290.939 21.5973C300.55 34.4498 303.068 43.3867 302.573 62.3789Z" fill="white" />
                                </svg>
                            </div>
                            <div className='absolute z-[-1] -translate-y-[100px] translate-x-5 md:-translate-y-[280px] md:translate-x-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[107px] h-[122px] md:w-[303px] md:h-[343px]' viewBox="0 0 344 405" fill="none">
                                    <g filter="url(#filter0_d_1_825)">
                                        <path d="M311.44 76.8502C318.38 154.437 321.8 196.752 323.463 261.071C321.076 286.056 316.536 296.852 298.483 306.145C225.845 337.395 175.165 361.451 115.71 384.048C90.6545 386.669 80.9104 381.31 71.0885 367.773C50.891 318.162 41.1009 262.253 22.0306 191.999C17.1539 164.586 21.1695 152.679 41.4733 138.093C117.091 94.2136 227.384 33.352 227.384 33.352C227.384 33.352 248.219 19.7999 261.697 20.8509C277.666 23.685 285.03 28.1534 294.686 37.8912C305.862 49.409 309.502 57.9507 311.44 76.8502Z" fill="#002257" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1_825" x="0.156006" y="0.792786" width="343.307" height="403.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="10" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_825" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_825" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className='z-1000 md:w-[300px]  flex flex-col items-center justify-between md:h-full translate-x-2 -translate-y-28 md:-translate-y-[320px] md:translate-x-12'>
                                <img src="/img/Ellipse 18.svg" alt="" className='w-[27px] h-[27px] md:w-[76px] md:h-[76px]' />
                                <h2 className='font-semibold text-[6px] md:text-base'>Katende Phillip</h2>
                                <h2 className='font-normal text-[4px] md:text-sm'>Vlogger</h2>
                                <h2 className='font-semibold text-[6px] md:text-base'><FaQuoteLeft /></h2>
                                <p className='font-normal w-[82px] text-[3px] md:w-[200px] md:text-[9px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> */}

                    </Slider>
                    {/* <div className='flex w-full justify-between absolute top-0 -z-50'>
                        <div className='w-[300px] h-[302px] rotate-[7.347deg]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="345" height="405" viewBox="0 0 345 405" fill="none">
                                <g filter="url(#filter0_d_1_815)">
                                    <path d="M32.8197 76.8502C25.8797 154.437 22.4599 196.752 20.7966 261.071C23.1834 286.056 27.724 296.852 45.7766 306.145C118.414 337.395 169.093 361.451 228.548 384.048C253.602 386.669 263.346 381.31 273.168 367.773C293.365 318.162 303.155 262.253 322.225 191.999C327.102 164.586 323.087 152.679 302.783 138.093C227.166 94.2136 116.874 33.352 116.874 33.352C116.874 33.352 96.0395 19.7999 82.5624 20.8509C66.5933 23.685 59.2289 28.1534 49.5733 37.8912C38.3974 49.409 34.7579 57.9507 32.8197 76.8502Z" fill="#002257" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_815" x="0.796631" y="0.792786" width="343.303" height="403.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="10" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_815" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_815" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-[379px] h-[378px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="380" height="378" viewBox="0 0 380 378" fill="none">
                                <path d="M46.1393 0C14.8073 7.93582 6.10063 16.4044 0.62793 36.0747L18.6755 378H352.164C372.902 366.931 379.265 350.44 379.628 299.577C369.333 197.51 356.769 139.329 338.04 36.0747C328.596 21.7603 326.543 12.2025 289.39 10.9793L46.1393 0Z" fill="#002257" />
                            </svg>
                        </div>
                        <div className='w-[30px] h-[302px] -rotate-[172.6deg]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="344" height="405" viewBox="0 0 344 405" fill="none">
                                <g filter="url(#filter0_d_1_825)">
                                    <path d="M311.44 76.8502C318.38 154.437 321.8 196.752 323.463 261.071C321.076 286.056 316.536 296.852 298.483 306.145C225.845 337.395 175.165 361.451 115.71 384.048C90.6545 386.669 80.9104 381.31 71.0885 367.773C50.891 318.162 41.1009 262.253 22.0306 191.999C17.1539 164.586 21.1695 152.679 41.4733 138.093C117.091 94.2136 227.384 33.352 227.384 33.352C227.384 33.352 248.219 19.7999 261.697 20.8509C277.666 23.685 285.03 28.1534 294.686 37.8912C305.862 49.409 309.502 57.9507 311.44 76.8502Z" fill="#002257" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_825" x="0.156006" y="0.792786" width="343.307" height="403.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="10" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_825" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_825" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className='flex w-full justify-between absolute top-0 -z-30'>
                        <div className='w-[300px] h-[302px] rotate-[7deg]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="303" height="343" viewBox="0 0 303 343" fill="none">
                                <path d="M0.686759 62.3789C3.72559 140.216 5.74523 182.621 12.3207 246.624C17.883 271.099 23.7669 281.226 42.8597 288.134C118.897 309.838 172.237 327.216 234.092 342.024C259.277 341.42 268.255 334.859 276.265 320.177C289.953 268.391 292.512 211.689 302.442 139.573C303.773 111.761 298.267 100.465 276.265 88.5957C195.658 54.7465 78.4886 8.48892 78.4886 8.48892C78.4886 8.48892 56.0918 -2.28758 42.8597 0.478247C27.3842 5.33123 20.6517 10.7047 12.3207 21.5973C2.70946 34.4498 0.192144 43.3867 0.686759 62.3789Z" fill="white" />
                            </svg>
                        </div>
                        <div className='w-[379px] h-[378px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="416" height="433" viewBox="0 0 416 433" fill="none">
                                <path d="M0.62793 337.695L38.1479 55.5321C47.1267 34.2465 55.1274 24.4931 81.671 13.5078C165.554 5.63801 233.499 3.95855 347.312 0C376.645 8.8112 394.238 13.5281 408.845 55.5321C412.328 169.345 415.995 250.574 415.598 324.938C414.4 357.978 407.046 371.127 381.08 384.222C223.725 413.091 137.615 428.655 63.6614 433C19.065 419.114 0.955128 399.961 0.62793 337.695Z" fill="white" />
                            </svg>
                        </div>
                        <div className='w-[300px] h-[302px] -rotate-[172.6deg]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="303" height="343" viewBox="0 0 303 343" fill="none">
                                <path d="M302.573 62.3789C299.534 140.216 297.514 182.621 290.939 246.624C285.377 271.099 279.493 281.226 260.4 288.134C184.362 309.838 131.021 327.216 69.1645 342.024C43.9798 341.42 35.0011 334.859 26.991 320.177C13.3037 268.391 10.7438 211.689 0.814392 139.573C-0.516571 111.761 4.98877 100.465 26.991 88.5957C107.599 54.7465 224.77 8.48892 224.77 8.48892C224.77 8.48892 247.167 -2.28758 260.4 0.478247C275.875 5.33123 282.608 10.7047 290.939 21.5973C300.55 34.4498 303.068 43.3867 302.573 62.3789Z" fill="white" />
                            </svg>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Block5
