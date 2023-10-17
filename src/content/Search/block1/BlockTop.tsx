import React, { useState, useRef, useEffect, ChangeEvent } from 'react'
import { BsSearch } from "react-icons/bs"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { fetchHotel, getHotel } from '@/src/redux/slices/hotels';
import {useAppDispatch} from "@/src/redux/store/rootReducer"
import axios from 'axios';
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

interface Props{
  setRefresh: (value:string)=> void;
  setLoad: (value:boolean)=> void;
  setHotelsData: (value:any)=> void;
}
 
// interface RefreshProps{
//   refresh : any;
// }
  
const BlockTop : React.FC<Props>= ({setRefresh,setLoad,setHotelsData}) => { 
  const dispatch = useAppDispatch();
  const router = useRouter();
  const guestRef = useRef<HTMLDivElement>(null);
  const calenderRef = useRef<HTMLDivElement>(null);
  const [showGuest, setShowGuest] = useState(false);
  const [childDetails,setChildDetails]=useState<string[]>([])
  const [open,setOpen] = useState(false)
  const [showCalender, setShowCalender] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Destination | null>(null);
   //------INC and DEC -------------------
   const [roomCount, setRoomCount] = useState<number>(1);
   const [itemCount, setItemCount] = useState<number>(0);
   const [petCount, setPetCount] = useState<number>(0);
   const [childCount, setChildCount] = useState<number>(0);
   const [destination, setDestination] = useState<string>();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  
  useEffect(() => {
    // Retrieve data from localStorage
    let dataItem:any = localStorage.getItem('dataItem');
    dataItem = JSON.parse(dataItem);

    if (dataItem) {
      setState([
        {
          startDate: new Date(dataItem?.checkIn),
          endDate: new Date(dataItem?.checkOut),
          key: 'selection'
        }
      ]);
      setRoomCount(dataItem?.rooms || 0);
      setItemCount(dataItem?.adults || 0);
      setPetCount(dataItem?.pet || 0);
      setChildCount(dataItem.children || 0);
      setDestination(dataItem?.destination || '');
    }
  }, []);
  

  const handleGuestClick = () => {
    setShowGuest(!showGuest);
  };

  const handleCalender = () => {
    setShowCalender(!showCalender);
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
      setShowGuest(false);
    }
    if (calenderRef.current && !calenderRef.current.contains(event.target as Node)) {
      setShowCalender(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
 
  const [location, setLocation] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSelect = (ranges: any) => {
    setShowCalender(false)
  }

  // Backend Function --> API Calls 
  // GET Hotel function
   
  const [defaultValue, setDefaultValue] = useState(null);
  const handleChange = (event: any, value: any) => setSelectedOptions(value);

  const isOptionEqualToValuefun = (option: Destination, value: Destination) => {
    return option.id === value.id;
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}/Content/GetDestinations`);
        setLocation(response.data);
        console.log(response.data);
        setLoading(false);
        let storedCode:any = localStorage.getItem('dataItem');
        storedCode = JSON.parse(storedCode)
        console.log(storedCode);
        if(storedCode){
          const matchingLocation = response && response.data && response.data.find((item:Destination) => item.Code === storedCode.destination);
          if(matchingLocation){
            setDefaultValue(matchingLocation);
            setSelectedOptions(matchingLocation)
          }
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      }
    };
    // setTimeout(() => {
      fetchDestinations();
    // }, 1000);
  }, []);


    
    let dateStart:Date | string = "";
    let dateEnd:Date | string= "";
    if (state[0].startDate !== undefined)
      dateStart = state[0].startDate;
    let date = new Date(dateStart)
    if (state[0].endDate !== undefined)
      dateEnd = state[0].endDate;
    let endate = new Date(dateEnd)

  const getHotelhandle = async () => {
    try {
      const data: any = {

        checkIn: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        checkOut: `${endate.getFullYear()}-${endate.getMonth() + 1}-${endate.getDate()}`,
        rooms: roomCount,
        adults: itemCount,
        children: childCount,
        paxes:childDetails,
        pet: petCount,
        destination: selectedOptions?.Code,
        // paxes: [{type: "CH",age: 8},{type: "CH",age: 10}],
      }
      localStorage.setItem("dataItem", JSON.stringify(data))
      if(!data.destination || !data.checkIn || !data.checkOut || !data.adults){
        toast.error('filled require ,Please ! try Again');
        return;
      }
      console.log(data)
      setLoad(true)
      const result = await dispatch(getHotel(data));
      if(result){
        localStorage.setItem("enquiryKey",result)
        setTimeout(async() => {
          const res:any = await dispatch(fetchHotel(result));
          setLoad(false)
          if(res){
            setHotelsData(res && res.Hotels)
            router.push(`/search/${result}`);
          }
        }, 10000);
      }
      else
        setLoad(false)
      // if (result) {
        
      //   router.push(`/search/${result}`);
        
      // } else {
      //   console.log("problem Issue in searching Data")
      // }
    } catch (error) {
      console.log(error);
      setLoad(false)
    }
  }
  // USE STATE -> SETUP
  const [inputValue, setInputValue] = useState('');
  // input Location function
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  //-------------------------------------------------------------------------------------------//
  // ------------------Increment and Decrement function of number of room rooms etc. ----------//
  
  const handleIncrement = (val: string): void => {
    if (val === "room") {
      setRoomCount(roomCount + 1);
    }
    if (val === "adult") {
      setItemCount(itemCount + 1);
    }
    if (val === "pet") {
      setPetCount(petCount + 1);
    }
    if (val === "child") {
      setChildCount(childCount + 1);
      const newChildDetails =" "
      setChildDetails([...childDetails,newChildDetails])
      setOpen(true)
    }


  };

  const handleDecrement = (val: string): void => {
    if (val === "room") {
      if (roomCount > 1) {
        setRoomCount(roomCount - 1);
      }
    }
    if (val === "adult") {
      if (itemCount > 0) {
        setItemCount(itemCount - 1);
      }
    }
    if (val === "child") {
      if (childCount > 0) {
        setChildCount(childCount - 1);
        childDetails.pop()
        ages.pop()
      }
    }
    if (val === "pet") {
      if (petCount > 0) {
        setPetCount(petCount - 1);
      }
    }

  };
  

  const [ages, setAges] = useState<string[]>([]);
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let newAges = [...ages];
    newAges[Number(name) - 1] = value;
    setAges(newAges);
  };

  const handleSubmit = () => {
    const newChildDetails:any = ages.map((age, index) => ({
      type: "CH",
      age:Number(age) ,
      // You can add other properties here
    }));
    setChildDetails(newChildDetails);
    // console.log("hello");
    setOpen(false)
  };

  return (

    <div className='w-full h-[300px] md:h-[400px] mt-[45px] md:mt-[80px] bg-[#FDFFFC]'>
      <div className="relative  w-full md:w-full h-full shadow-md">

        <div className=" w-11/12 flex items-center flex-col justify-evenly h-full md:ml-14 ">
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-lg md:text-4xl mt-5'>Vacation Rentals in India</h1>
            <p className='font-normal text-[7px] md:text-xl'>Find and book unique accommodation on Rentals</p>
          </div>
          <div className='relative flex flex-col w-full items-center justify-center mx-[0px] md:mx-0  grow-[3] bg-[#fff] '>
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[50px] p-2'>
              <div className=' flex items-center md:items-center justify-between pl-2  z-10 relative '>
                <div className='flex grow-[3] rounded-[30px] md:rounded-[50px]  '>
                <Stack className='flex flex-col p-2'>
                    <h4 className='font-semibold text-xs md:text-base ml-8'>Location</h4>
                    <Autocomplete
                      value={defaultValue}
                      // onChange={(event,newVal) =>setLocationValue(newVal)}
                      popupIcon={false}
                      loading={loading}
                      options={location}
                      isOptionEqualToValue={isOptionEqualToValuefun}
                      getOptionLabel={(option) => ` ${option.Name} ${option.Country}`}
                      renderInput={(params) => <TextField {...params} label="Where are you going?" variant="standard" placeholder='City,Country' />}
                      className=' pl-2 md:pl-6 font-normal text-gray-200 text-xs md:text-base outline-none md:w-[200px] min-w-[130px]'
                      onChange={handleChange}
                    />

                    {/* <input type='text' placeholder='Location ' className='h-full pl-2 md:pl-6 focus-visible:outline-none placeholder:text-black-1000 placeholder:font-[700] bg-[#F8F8F8] w-[150px] md:w-auto' */}
                    {/* value={inputValue} */}
                    {/* onChange={handleInputChange} /> */}
                    <p ></p>

                  </Stack>
                </div>
                <div ref={calenderRef} className='flex grow rounded-[30px] md:rounded-[30px]  px-4'>
                  <div onClick={handleCalender} className='flex-col p-2 cursor-pointer'>
                    <div className='flex items-center font-semibold text-xs md:text-base w-[116px] md:w-[155px]'>
                      <h4 className='font-semibold text-xs md:text-base'>{state && state[0].startDate === undefined ? 'Check-In': `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h4>
                      <span>&nbsp;-&nbsp;</span>
                      <h4 className='font-semibold text-xs md:text-base'>{state && state[0].endDate === undefined ? 'Check-Out': `${endate.getDate()}/${endate.getMonth()+1}/${endate.getFullYear()}`}</h4>
                    </div>
                    <p className='font-normal text-gray-200 text-xs md:text-base'>Add dates</p>
                  </div>
                  <div className={`${showCalender?'block':'hidden'} absolute z-50 md:left-[30%] left-0 md:top-[100px] top-[53px]`}> <DateRangePicker
                        onChange={(item:any) => setState([item.selection])}
                        showPreview={false}
                        moveRangeOnFirstSelection={false}
                        endDatePlaceholder='Check-Out'
                        startDatePlaceholder='Check-In'
                        editableDateInputs={true}
                        ranges={state}
                        minDate={new Date()}
                        className='relative'
                        
                  />

                  {/* <div className='absolute -bottom-6 w-full flex p-2 justify-between bg-[#EFF2F7]'>
                      <button onClick={()=>{setShowCalender(false)}} className='text-center w-[140px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white-5 py-[2px] border-[1px_solid_transparent] cursor-pointer'>Cancel</button>
                      <button onClick={handleSelect} className='text-center w-[140px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white-5 py-[2px] border-[1px_solid_transparent] cursor-pointer'>Set</button>
                  </div> */}
                  
                  </div>
                </div>
                <div ref={guestRef} className='flex md:static md:justify-between gap-4 drop-shadow-md  grow shadow-md rounded-[30px] md:rounded-[50px] py-2 px-2 right-0 absolute md:top-[53px] bottom-[-63px] bg-[#fff] '>
                  <div onClick={handleGuestClick} className='flex-col px-2 relative cursor-pointer'>
                    <h4 className='font-semibold text-xs md:text-base'>Rooms & Guests</h4>
                    { roomCount>1 || itemCount>0 ||childCount>0 ||petCount>0 ? <p className='font-normal text-gray-200 text-xs md:text-base'>{roomCount} RM {itemCount} AD {childCount} CH {petCount} INF</p>: <p className='font-normal text-gray-200 text-xs md:text-base'>Add Rooms & Guests</p>}
                  </div>
                  <div onClick={()=> getHotelhandle()} className='cursor-pointer px-[20px] py-[10px] text-[#fff] gap-6 md:text-lg flex justify-center items-center bg-gradient-to-r from-[#002257] to-[#0A225FA6] md:rounded-[50px] rounded-[60px]'>
                    <BsSearch className='text-xs md:text-lg ' /><span className='text-xs md:text-base'>Search</span>
                  </div>
                  {showGuest && <div className='absolute md:w-[310px] w-[250px] md:left-72 left-auto md:right-auto right-0 md:-top-[100px] -top-[100px] rounded-[30px] bg-[#F8F8F8] py-[25px] px-[10px] flex flex-col gap-[10px] md:gap-[15px] z-50'>
                    <div className='flex justify-between'>
                      <div>
                        <h4 className='font-[600] text-[14px] md:text-[16px]'>Rooms</h4>
                        {/* <p className='text-[#747474] text-[12px] md:text-[13px] font-[400]'>Ages 13 or above</p> */}
                      </div>
                      <div className='flex gap-[10px] md:gap-[14px] items-center'>
                        <button onClick={() => handleDecrement("room")}><AiOutlineMinusCircle  className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]'  /></button>
                        <div>{roomCount}</div>
                        <button onClick={() => handleIncrement("room")}><AiOutlinePlusCircle className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]' /></button>
                      </div>
                   
                    </div>
                    <div className='w-full h-[1px] bg-[#EBEBEB]'></div>
                    <div className='flex justify-between'>
                      <div>
                        <h4 className='font-[600] text-[14px] md:text-[16px]'>Adults</h4>
                        <p className='text-[#747474] text-[12px] md:text-[13px] font-[400]'>Ages 18 or above</p>
                      </div>
                      <div className='flex gap-[10px] md:gap-[14px] items-center'>
                        <button onClick={() => handleDecrement("adult")}><AiOutlineMinusCircle  className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]'  /></button>
                        <div>{itemCount}</div>
                        <button onClick={() => handleIncrement("adult")}><AiOutlinePlusCircle className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]' /></button>
                      </div>
                   
                    </div>
                    <div className='w-full h-[1px] bg-[#EBEBEB]'></div>
                    <div className='flex justify-between'>
                      <div>
                        <h4 className='font-[600] text-[16px]'>Children</h4>
                        <p className='text-[#747474] text-[13px] font-[400]'>Ages 2-17 years</p>
                      </div>
                      <div className='flex gap-[10px] md:gap-[14px] items-center'>
                        <button onClick={() => handleDecrement("child")}><AiOutlineMinusCircle className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]'   /></button>
                        <div>{childCount}</div>
                        <button onClick={() => handleIncrement("child")}><AiOutlinePlusCircle className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]' /></button>
                      </div>
                      
                    </div>
                    <div className='w-full h-[1px] bg-[#EBEBEB]'></div>
                    {open&&childCount > 0 && 
                    <>
                    <div className='flex gap-4 flex-wrap'>
                    { childDetails.map((item:any,index:any)=>(
                      <>
                      <div className='w-[45%]'>
                      <p>Child {index+1}</p>
                      <input    type="number"
                       name={String(index + 1)}
            value={ages[index] || ''}
            placeholder='Enter child age'
            className='p-1 w-[100%]'
            onChange={handleChangeInput} />
                      </div>
                      </>
                      ))}
                      
                    </div>
                    <div className='flex justify-end'>
                    <button  className='p-1 bg-green-500 rounded-md text-white-5 ' onClick={handleSubmit}>Submit</button>
                  </div>
                  </>
                    }
                    <div className='w-full h-[1px] bg-[#EBEBEB]'></div>
                    <div className='flex justify-between'>
                      <div>
                        <h4 className='font-[600] text-[16px]'>Infants</h4>
                        <p className='text-[#747474] text-[13px] font-[400]'>Ages 0-2 years</p>
                      </div>
                      <div className='flex gap-[10px] md:gap-[14px] items-center'>
                        <button onClick={() => handleDecrement("pet")}><AiOutlineMinusCircle className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]'  /></button>
                        <div>{petCount}</div>
                        <button><AiOutlinePlusCircle className='w-[25px] h-[25px] md:w-[34px] md:h-[34px]'  /></button>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>
             
            </div>
            <div className='mt-[65px] md:mt-2 md:pl-0 md:ml-12 ml-6'>
                <p className='text-black-100 font-semibold text-xs md:text-sm'><span className='text-black-10 font-normal'>Categories:</span>Pet Friendly, Corporate Events, Family Vacation, Romantic Getaways</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockTop
