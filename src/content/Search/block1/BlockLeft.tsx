import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/src/redux/store/rootReducer';

function BlockLeft(props: any) {
    const hotelsData = props.hotelsData;
    const setHotelsData = props.setHotelsData;
    const { hotels, resultFilters } = useAppSelector((state) => state.hotels)
    // filter State
    const [hotelChain, setHotelChain] = useState(" ")
    const [hotelTheme, sethotelTheme] = useState(" ")
    const [hotelProperty, sethotelProperty] = useState(" ")
    const [star, setStar] = useState(" ");
    const [modePayment, setModePayment] = useState(" ");
    const [quickFilter, setQuickFilter] = useState(" ");
    const [amenities, setAmenities] = useState(" ");
    const [roomAmenities, setRoomAmenities] = useState(" ");
    const [showAll, setShowAll] = useState({star:false, hotelChain:false,hotelProperty:false,amenities:false,roomAmenities:false});



    const filterItem = () => {
        console.log(hotels);
        const newItem = hotels.filter((newVal: any) => {

            //-----------------FREE CANCELLATION--------------------//
            if (quickFilter === "FreeCancellation") {
                return newVal.Rooms.some((room: any) =>
                    room.Rates.some(
                        (rate: any) => rate.CancellationPolicies.Amount === rate.PaymentType
                    )
                );
            }
            //-----------------PAYMENT--------------------//
            const paymentFilter = modePayment === " " ? hotels : newVal.Rooms.some((room: any) =>
                room.Rates.some((rate: any) => rate.PaymentType === modePayment)
            );
            //-----------------AMENITIES--------------------//
            const amenitiesFilter = amenities === " "
                ? true
                : newVal.Amenities.some((amenity: string) =>
                    amenity.toLowerCase().includes(amenities?.toLowerCase())
                );
            //-----------------ROOM-AMENITIES--------------------//
            const roomAmenitiesFilter = roomAmenities === " "
                ? true // Skip room amenities filter if roomAmenities is empty
                : newVal.Rooms.some((item: any) => (
                    item.RoomAmenities.some((amenity: string) =>
                        amenity.toLowerCase().includes(roomAmenities?.toLowerCase()))
                ));

            //-----------------HOTEL CHAIN --------------------//
            const hotelChainFilter = hotelChain === " "
                ? true : newVal.HotelChain.toLowerCase().includes(hotelChain.toLowerCase())
            //-----------------HOTEL PROPERTY TYPE --------------------//
            const hotelpropertyFilter = hotelProperty === " "
                ? true : newVal.PropertyType.toLowerCase().includes(hotelProperty.toLowerCase())

            //-----------------STAR RATING--------------------//
            const starFilter = star === " "
                ? true
                : newVal.StarRating.toLowerCase().includes(star.toLowerCase());



            return paymentFilter && hotelpropertyFilter && roomAmenitiesFilter && amenitiesFilter && starFilter && hotelChainFilter;
        });

        setHotelsData(newItem);
    };



    //------------------------------- Searching ------------------//

    //-------------STAR---------------//
    const starratings = Array.isArray(resultFilters) && resultFilters.length > 2 &&
    Array.isArray(resultFilters[1].FilterValues) && resultFilters[1].FilterValues.length > 0
      ? [...resultFilters[1].FilterValues]
      : [];
    const ratingCounts: number[] = starratings.map(rating =>
        hotels?.filter((hotel: any) => hotel?.StarRating === rating?.FilterValue).length
    );
    //------------------PROPERTY TYPE-----------------------------//
    const propertyRating =  Array.isArray(resultFilters) && resultFilters.length > 2 &&
    Array.isArray(resultFilters[3].FilterValues) && resultFilters[3].FilterValues.length > 0
      ? [...resultFilters[3].FilterValues]
      : [];
    const ratingProperty: number[] = propertyRating?.map(rating =>
        hotels?.filter((hotel: any) => hotel?.PropertyType === rating?.FilterValue).length
    );


    //------------------HOTEL CHAIN -----------------------------//
    const hotelChainRating = Array.isArray(resultFilters) && resultFilters.length > 2 &&
  Array.isArray(resultFilters[2].FilterValues) && resultFilters[2].FilterValues.length > 0
    ? [...resultFilters[2].FilterValues]
    : [];

    const ratingHotelChain: number[] = hotelChainRating?.map(rating =>
        hotels?.filter((hotel: any) => hotel?.HotelChain === rating?.FilterValue).length
    );


    //-------------AMENITIES-------------------------------------//
    const amenitiesRating = Array.isArray(resultFilters) && resultFilters.length > 2 &&
    Array.isArray(resultFilters[4].FilterValues) && resultFilters[4].FilterValues.length > 0
      ? [...resultFilters[4].FilterValues]
      : [];
    const ratingAmenities: number[] = amenitiesRating.map((rating) =>
        hotels.filter((hotel: any) => hotel?.Amenities?.includes(rating?.Code)).length)

    // ---------------ROOM-AMENITIES-------------------------------//
    const roomAmenitiesRating = Array.isArray(resultFilters) && resultFilters.length > 2 &&
    Array.isArray(resultFilters[5].FilterValues) && resultFilters[5].FilterValues.length > 0
      ? [...resultFilters[5].FilterValues]
      : [];
    const ratingRoomAmenities: number[] = roomAmenitiesRating.map((rating) =>
        hotels.filter((hotel: any) => hotel?.Rooms?.some((item: any) => (
            item?.RoomAmenities?.includes(rating?.Code)))).length
    )


    useEffect(() => {
        filterItem();
    }, [amenities, star, modePayment, roomAmenities, hotelChain, hotelProperty]);

    const handleReset = ()=>{
        setHotelChain(" ");
        setStar(" ")
        sethotelProperty(" ");
        sethotelTheme(" ")
        setAmenities(" ")
        setRoomAmenities(" ")
        setQuickFilter(" ")
        setModePayment(" ")
        setShowAll({star:false, hotelChain:false,hotelProperty:false,amenities:false,roomAmenities:false})

    }

    return (
        <div className='bg-white-5 min-w-[250px]'>
            <div className='flex justify-between items-center p-5 shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)]'>
                <p className='text-[25px] font-semibold'>Filter</p>
                <button onClick={handleReset} type='button' className='text-[18px] font-semibold'>Reset</button>
            </div>
            {hotels && hotels.length>0 && <div className=''>
                {/* filter */}
                {/* <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '> */}
                {/* <p className='pl-[49px] py-[12px]  flex items-center bg-[#F2F2F2] text-[25px] font-semibold shadow-2xl  text-[#0A225F] rozha-one'>Quick Filters</p> */}
                {/* </div> */}
                {/* <div className='shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)] h-1'></div> */}

                {/* <div className='pl-[52px] py-[27px] bg-white-5 roboto '>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="FreeCancellation" checked={quickFilter === "FreeCancellation"}
                            onChange={(e) => {setQuickFilter(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />
                        <p>Free Cancellation</p>
                    </div>
                    <div className='flex gap-2 items-center pt-[13px]'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Early checking(upto 12pm)" checked={quickFilter === "Early checking(upto 12pm)"}
                            onChange={(e) => {setQuickFilter(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />
                        <p>Early checking(upto 12pm)</p>
                    </div>
                    <div className='flex gap-2 items-center pt-[13px]'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="4 & Above" checked={quickFilter === "4 & Above"}
                            onChange={(e) => {setQuickFilter(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />
                        <p>4 & Above</p>
                    </div>
                    <div className='flex gap-2 items-center pt-[13px]'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Free Wifi" checked={quickFilter === "Free Wifi"}
                            onChange={(e) => {setQuickFilter(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />
                        <p>Free Wifi</p>
                    </div>
                    <div className='flex gap-2 items-center pt-[13px]'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Free Breakfast" checked={quickFilter === "Free Breakfast"}
                            onChange={(e) => {setQuickFilter(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />
                        <p>Free Breakfast</p>
                    </div>

                </div> */}
                {/* Payment */}
                <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                    <p className='text-[25px] font-semibold text-[#0A225F] rozha-one '>Mode of Payment</p>
                </div>
                <div className='pl-[52px] py-[27px] bg-white-5 roboto'>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="AT_ONILINE" checked={modePayment === "AT_ONILINE"}
                            onChange={(e) => {setModePayment(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />
                        <p>Prepay Online</p>
                    </div>
                    <div className='flex gap-2 items-center pt-[13px]'>
                        <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="AT_WEB" checked={modePayment === "AT_WEB"}
                            onChange={(e) => {setModePayment(e.target.checked ? e.target.value : " "); props.setPage(1);}}
                        />

                        <p >Use Website</p>
                    </div>
                </div>
                {/* Rating */}
                {/* <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                    <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>Star Rating</p>
                </div>
                <div className='px-[52px] py-[27px] bg-white-5 roboto '>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="5 STARS"
                                checked={star === "5 STARS"}
                                onChange={(e) => setStar(e.target.checked ? e.target.value : " ")} />
                            <p>5 Star</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[0]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="4 STARS"
                                checked={star === "4 STARS"}
                                onChange={(e) => setStar(e.target.checked ? e.target.value : " ")} />
                            <p>4 Star</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[1]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="3 STARS"
                                checked={star === "3 STARS"}
                                onChange={(e) => setStar(e.target.checked ? e.target.value : " ")} />
                            <p>3 Star</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[2]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="2 STARS"
                                checked={star === "2 STARS"}
                                onChange={(e) => setStar(e.target.checked ? e.target.value : " ")} />
                            <p> 2 Star</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[3]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="1 STARS"
                                checked={star === "1 STARS"}
                                onChange={(e) => setStar(e.target.checked ? e.target.value : " ")} />
                            <p>1 Star</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[4]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value=" "
                                checked={star === " "}
                                onChange={(e) => setStar(e.target.checked ? e.target.value : " ")} />
                            <p>Unrated</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({hotels.length})</p>
                    </div>
                </div> */}

                {/* Star Rating */}

                <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                            <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>{resultFilters && resultFilters.length>0 && resultFilters[1].FilterType}</p>
                        </div>
                            <div  className='px-[52px] py-[27px] bg-white-5 roboto'>
                        {!(showAll && showAll?.star) && resultFilters && resultFilters.length>0 && resultFilters[1].FilterValues && resultFilters[1].FilterValues.length>0 && resultFilters[1].FilterValues.slice(0,5).map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.FilterValue}
                                        checked={star === (i && i.FilterValue)}
                                        onChange={(e) => {setStar(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[ind]})</p>
                            </div>
                        ))}
                        {showAll && showAll?.star && resultFilters && resultFilters.length>0 && resultFilters[1].FilterValues && resultFilters[1].FilterValues.length>0 && resultFilters[1].FilterValues.map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.FilterValue}
                                        checked={star === (i && i.FilterValue)}
                                        onChange={(e) => {setStar(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingCounts[ind]})</p>
                            </div>
                        ))}
                        {resultFilters && resultFilters.length>0 && resultFilters[1].FilterValues && resultFilters[1].FilterValues.length>0 && resultFilters[1].FilterValues.length>5 && <div className='flex w-full justify-center items-center mt-4'>
                            <button onClick={()=> setShowAll({...showAll,star:!(showAll && showAll?.star)})} type='button' className='border border-[#ccc] px-4 py-1'>{(showAll && showAll?.star) ? "Show Less" :"Show All"}</button>
                        </div>}
                        </div>
                {/* Hotel Chain */}
                {/* {resultFilters && resultFilters.map((item: any, index: number) => {
                    return <div key={index}> */}
                        <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                            <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>{resultFilters && resultFilters.length>0 && resultFilters[2].FilterType}</p>
                        </div>
                            <div  className='px-[52px] py-[27px] bg-white-5 roboto'>
                        {!(showAll && showAll?.hotelChain) && resultFilters && resultFilters.length>0 && resultFilters[2].FilterValues && resultFilters[2].FilterValues.length>0 && resultFilters[2].FilterValues.slice(0,5).map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.FilterValue}
                                        checked={hotelChain === (i && i.FilterValue)}
                                        onChange={(e) => {setHotelChain(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingHotelChain[ind]})</p>
                            </div>
                        ))}
                        {showAll && showAll?.hotelChain && resultFilters && resultFilters.length>0 && resultFilters[2].FilterValues && resultFilters[2].FilterValues.length>0 && resultFilters[2].FilterValues.map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.FilterValue}
                                        checked={hotelChain === (i && i.FilterValue)}
                                        onChange={(e) => {setHotelChain(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingHotelChain[ind]})</p>
                            </div>
                        ))}
                        {resultFilters && resultFilters.length>0 && resultFilters[2].FilterValues && resultFilters[2].FilterValues.length>0 && resultFilters[2].FilterValues.length>5 && <div className='flex w-full justify-center items-center mt-4'>
                            <button onClick={()=> setShowAll({...showAll,hotelChain:!(showAll && showAll?.hotelChain)})} type='button' className='border border-[#ccc] px-4 py-1'>{(showAll && showAll?.hotelChain) ? "Show Less" :"Show All"}</button>
                        </div>}
                        </div>

                        {/* property type */}
                        <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                            <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>{resultFilters && resultFilters.length>0 && resultFilters[3].FilterType}</p>
                        </div>
                            <div  className='px-[52px] py-[27px] bg-white-5 roboto'>
                        {!(showAll && showAll?.hotelProperty) && resultFilters && resultFilters.length>0 && resultFilters[3].FilterValues && resultFilters[3].FilterValues.length>0 && resultFilters[3].FilterValues.slice(0,5).map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.FilterValue}
                                        checked={hotelProperty === (i && i.FilterValue)}
                                        onChange={(e) => {sethotelProperty(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[ind]})</p>
                            </div>
                        ))}
                        {showAll && showAll?.hotelProperty && resultFilters && resultFilters.length>0 && resultFilters[3].FilterValues && resultFilters[3].FilterValues.length>0 && resultFilters[3].FilterValues.map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.FilterValue}
                                        checked={hotelProperty === (i && i.FilterValue)}
                                        onChange={(e) => {sethotelProperty(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[ind]})</p>
                            </div>
                        ))}
                        {resultFilters && resultFilters.length>0 && resultFilters[3].FilterValues && resultFilters[3].FilterValues.length>0 && resultFilters[3].FilterValues.length>5 && <div className='flex w-full justify-center items-center mt-4'>
                            <button onClick={()=> setShowAll({...showAll,hotelProperty:!(showAll && showAll?.hotelProperty)})} type='button' className='border border-[#ccc] px-4 py-1'>{(showAll && showAll?.hotelProperty) ? "Show Less" :"Show All"}</button>
                        </div>}
                        </div>


                        {/* Hotel Amenities */}
                        <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                            <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>{resultFilters && resultFilters.length>0 && resultFilters[4].FilterType}</p>
                        </div>
                            <div  className='px-[52px] py-[27px] bg-white-5 roboto'>
                        {!(showAll && showAll?.amenities) && resultFilters && resultFilters.length>0 && resultFilters[4].FilterValues && resultFilters[4].FilterValues.length>0 && resultFilters[4].FilterValues.slice(0,5).map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.Code}
                                        checked={amenities === (i && i.Code)}
                                        onChange={(e) => {setAmenities(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[ind]})</p>
                            </div>
                        ))}
                        {showAll && showAll?.amenities && resultFilters && resultFilters.length>0 && resultFilters[4].FilterValues && resultFilters[4].FilterValues.length>0 && resultFilters[4].FilterValues.map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.Code}
                                        checked={amenities === (i && i.Code)}
                                        onChange={(e) => {setAmenities(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[ind]})</p>
                            </div>
                        ))}
                        {resultFilters && resultFilters.length>0 && resultFilters[4].FilterValues && resultFilters[4].FilterValues.length>0 && resultFilters[4].FilterValues.length>5 && <div className='flex w-full justify-center items-center mt-4'>
                            <button onClick={()=> setShowAll({...showAll,amenities:!(showAll && showAll?.amenities)})} type='button' className='border border-[#ccc] px-4 py-1'>{(showAll && showAll?.amenities) ? "Show Less" :"Show All"}</button>
                        </div>}
                        </div>


                        {/* Hotel Amenities */}
                        <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                            <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>{resultFilters && resultFilters.length>0 && resultFilters[5].FilterType}</p>
                        </div>
                            <div  className='px-[52px] py-[27px] bg-white-5 roboto'>
                        {!(showAll && showAll?.roomAmenities) && resultFilters && resultFilters.length>0 && resultFilters[5].FilterValues && resultFilters[5].FilterValues.length>0 && resultFilters[5].FilterValues.slice(0,5).map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.Code}
                                        checked={roomAmenities === (i && i.Code)}
                                        onChange={(e) => {setRoomAmenities(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[ind]})</p>
                            </div>
                        ))}
                        {showAll && showAll?.roomAmenities && resultFilters && resultFilters.length>0 && resultFilters[5].FilterValues && resultFilters[5].FilterValues.length>0 && resultFilters[5].FilterValues.map((i:any,ind:number)=>(
                            <div key={ind} className={`${(i && i.FilterValue)===""?"hidden":"flex"} justify-between w-full pt-[13px]`}>
                                <div className='flex gap-2 items-center'>
                                    <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value={i && i.Code}
                                        checked={roomAmenities === (i && i.Code)}
                                        onChange={(e) => {setRoomAmenities(e.target.checked ? e.target.value : " "); props.setPage(1);}} />
                                    <p className='max-w-[200px]'>{i && i.FilterValue}</p>
                                </div>
                                <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[ind]})</p>
                            </div>
                        ))}
                        {resultFilters && resultFilters.length>0 && resultFilters[5].FilterValues && resultFilters[5].FilterValues.length>0 && resultFilters[5].FilterValues.length>5 && <div className='flex w-full justify-center items-center mt-4'>
                            <button onClick={()=> setShowAll({...showAll,roomAmenities:!(showAll && showAll?.roomAmenities)})} type='button' className='border border-[#ccc] px-4 py-1'>{(showAll && showAll?.roomAmenities) ? "Show Less" :"Show All"}</button>
                        </div>}
                        </div>
                        
                    {/* </div> */}
                {/* })} */}
                
                {/* Hotel Theme */}
                {/* <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                    <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>Hotel Theme</p>
                </div>
                <div className='px-[52px] py-[27px] bg-white-5 roboto '>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Beach Hotel"
                                checked={hotelTheme === "Beach Hotel"}
                                onChange={(e) => sethotelTheme(e.target.checked ? e.target.value : " ")} />
                            <p>Beach Hotel</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>(1)</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Beach"
                                checked={hotelTheme === "Beach"}
                                onChange={(e) => sethotelTheme(e.target.checked ? e.target.value : " ")} />
                            <p>Beach </p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>(4)</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Boutique Property "
                                checked={hotelTheme === "Boutique Property "}
                                onChange={(e) => sethotelTheme(e.target.checked ? e.target.value : " ")} />
                            <p>Boutique Property </p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>(1)</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Business"
                                checked={hotelTheme === "Business"}
                                onChange={(e) => sethotelTheme(e.target.checked ? e.target.value : " ")} />
                            <p>Business</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>(26)</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="City"
                                checked={hotelTheme === "City"}
                                onChange={(e) => sethotelTheme(e.target.checked ? e.target.value : " ")} />
                            <p>City</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>(23)</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Family"
                                checked={hotelTheme === "Family"}
                                onChange={(e) => sethotelTheme(e.target.checked ? e.target.value : " ")} />
                            <p>Family</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>(16)</p>
                    </div>
                </div> */}
                {/* Property Type */}
                {/* <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                    <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>Property Type</p>
                </div>
                <div className='px-[52px] py-[27px] bg-white-5 roboto'>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Hotel"
                                checked={hotelProperty === "Hotel"}
                                onChange={(e) => sethotelProperty(e.target.checked ? e.target.value : " ")} />
                            <p>Hotel</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[0]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Resort"
                                checked={hotelProperty === "Resort"}
                                onChange={(e) => sethotelProperty(e.target.checked ? e.target.value : " ")} />
                            <p>Resort</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[1]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Villa"
                                checked={hotelProperty === "Villa"}
                                onChange={(e) => sethotelProperty(e.target.checked ? e.target.value : " ")} />
                            <p>Villa</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[2]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Apartment"
                                checked={hotelProperty === "Apartment"}
                                onChange={(e) => sethotelProperty(e.target.checked ? e.target.value : " ")} />
                            <p>Apartment</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[3]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Aparthotel"
                                checked={hotelProperty === "Aparthotel"}
                                onChange={(e) => sethotelProperty(e.target.checked ? e.target.value : " ")} />
                            <p>Aparthotel</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[4]})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input className='h-[16px] w-[16px] border border-black-5' type='checkbox' value="Homestay"
                                checked={hotelProperty === "Homestay"}
                                onChange={(e) => sethotelProperty(e.target.checked ? e.target.value : " ")} />
                            <p>Homestay</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingProperty[5]})</p>
                    </div>
                </div> */}
                {/* Amenities */}
                {/* <div className='pl-[49px] py-[12px]  bg-[#F2F2F2] flex items-center '>
                    <p className='text-[25px] font-semibold text-[#0A225F] rozha-one'>Amenities</p>
                </div> */}
                {/* <p className='text-[18px] font-semibold text-[#2E2E2E] rozha-one pl-[52px] pt-[25px] rozha-one'>Hotel Amenities</p> */}
                {/* <div className='px-[52px] py-[18px] bg-white-5 roboto'> */}
                    {/* <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Fitness"
                                checked={amenities === "Fitness"}
                                onChange={(e) => setAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Fitness</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[0].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Babysitting service"
                                checked={amenities === "Babysitting service"}
                                onChange={(e) => setAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Babysitting or Childcare</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[1].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Bar"
                                checked={amenities === "Bar"}
                                onChange={(e) => setAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>No of poolside bars</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[2].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="coffee"
                                checked={amenities === "coffee"}
                                onChange={(e) => setAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>No of coffee shops</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[3].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Luggage room"
                                checked={amenities === "Luggage room"}
                                onChange={(e) => setAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Luggage storage</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[4].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Airport"
                                checked={amenities === "Airport"}
                                onChange={(e) => setAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Airport transportation</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingAmenities[5].length})</p>
                    </div> */}
                    {/* Room Amenities */}
                    {/* <p className='text-[18px] font-semibold text-[#2E2E2E] rozha-one  pt-[25px] rozha-one'>Room Amenities</p>
                    <div className='flex justify-between w-full pt-[18px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Air conditioning"
                                checked={roomAmenities === "Airport"}
                                onChange={(e) => setRoomAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Air conditioning</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[0].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Television"
                                checked={roomAmenities === "Television"}
                                onChange={(e) => setRoomAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Television</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[1].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Partially open bathrooms"
                                checked={roomAmenities === "Partially open bathrooms"}
                                onChange={(e) => setRoomAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Partially open bathrooms</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[2].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Private pool"
                                checked={roomAmenities === "Private pool"}
                                onChange={(e) => setRoomAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Private pool</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[3].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Private plunge pool"
                                checked={roomAmenities === "Private plunge pool"}
                                onChange={(e) => setRoomAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Private plunge pool</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[4].length})</p>
                    </div>
                    <div className='flex justify-between w-full pt-[13px]'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' className='h-[16px] w-[16px] border border-black-5' value="Deep soaking bathtub"
                                checked={roomAmenities === "Deep soaking bathtub"}
                                onChange={(e) => setRoomAmenities(e.target.checked ? e.target.value : " ")} />
                            <p>Deep soaking bathtub</p>
                        </div>
                        <p className='text-[rgba(0, 0, 0, 0.85)]'>({ratingRoomAmenities[5].length})</p>
                    </div> */}
                {/* </div> */}
            </div>}
        </div>
    )
}

export default BlockLeft