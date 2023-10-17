import { Autocomplete, Select, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri"
import CountryPhoneData from "../../CountryPhoneData"
import { useAppDispatch } from "@/src/redux/store/rootReducer"
import { createPayment } from '@/src/redux/slices/payment'
import { useSelector } from 'react-redux'
import Payment from '../payment/Payment'
import { RootState } from '@/src/redux/store/store'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

interface props {
  giftCardRes: any;
  setGiftCardRes: (value: any) => void
  pricePay: number | null,
  setPricePay: (value: number | null) => void
  promoCode: any
  setPromoCode: (value: any) => void
}
interface Phone {
  label: string;
  value: string;
}

interface PaymentFormData {
  cardNumber: string;
  holder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}
const BlockLeft: React.FC<props> = ({ giftCardRes, setGiftCardRes, pricePay, setPricePay, promoCode, setPromoCode }) => {

  //--->Payment work

  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    holder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });
  const [formData1, setFormData1] = useState<PaymentFormData>({
    cardNumber: '',
    holder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });
  const [formData2, setFormData2] = useState<PaymentFormData>({
    cardNumber: '',
    holder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });

  // console.log("formData",formData);
  // console.log("formData2",formData2);
  // console.log("formData1",formData1);

  const { room } = useSelector((state: RootState) => state.room)
  console.log("room", room);

  const dispatch = useAppDispatch();
  const router = useRouter()
  const [travelers, setTravelers] = useState<string[]>([""])
  const [countryOption, setCountryOption] = useState<Phone | null>(null);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  let rating = (room && room.length > 0 && room[0] && room[0].StarRating && room[0].StarRating.split(" ")[0]) | 0

  console.log(rating);

  // EnquiryNo:"CE4B2456D0",
  // RateKey:"20230905|20230906|W|58|109|SUI.DX-VM|1-BAR-NORMAL|FB||1~2~2|8~10|N@06~2041e8~1012159687~N~~NOR~8FA6876CC7D84E3169270971141500AAUK000009600000000012041e8"


  const handleChange = (event: any, value: Phone | null) => setCountryOption(value);

  const isOptionEqualToValuefun = (option: Phone, value: Phone) => {
    return option.value === value.label;
  };

  const paymentHandler = async () => {
    // console.log("hello")
    const data = {
      "EnquiryNo": localStorage.getItem("enquiryKey"),
      "name": name,
      "surname": lastname,
      "email": email,
      "phoneNumber": phone,
      "PaymentCardHolderName": formData.holder || formData1.holder || formData2.holder,
      "PaymentCardType": formData && "credit Card" || formData1 && "Debit Card" || formData2 && "PrepayCard Card",
      "PaymentCardNumber": formData.cardNumber || formData1.cardNumber || formData2.cardNumber,
      "PaymentCardExpiryDate": (formData.expiryMonth) + (formData.expiryYear) || (formData1.expiryMonth) + (formData1.expiryYear) || (formData2.expiryMonth) + (formData1.expiryYear),
      "PaymentCardCVC": formData.cvv || formData1.cvv || formData2.cvv,
      "BillingAddress1": "Cambridge Science Park",
      "BillingAddress2": "Milton Road",
      "BillingCity": "Cambridge",
      "BillingsState": "Cambridgeshire",
      "BillingPostalCode": "CB4 0FZ",
      "BillingCountryCode": "GB",
      "WebPartner": "1",
      "clientReference": "IntegrationAgency",
      "remark": "Booking remarks are to be written here.",
      "tolerance": 2,
      "DeviceId": "abcd",
      "DeviceIP": "123.12.12.12.21",
      //-----------------RATE KEY ------------------------------------
      "RateKey": "20230905|20230906|W|58|3981|APT.B1-GV|FIT|RO||1~2~2|8~10|N@06~~24bee~-553155202~N~~~NOR~68B4145E96EF4C0169305393332700AAUK00000940000000001247c8",
      "paxes": [
        {
          "roomId": 1,
          "type": "AD",
          "name": "First Adult Name",
          "surname": "Surname",
          "age": "30"

        },
        {
          "roomId": 1,
          "type": "AD",
          "name": "Second Adult Name",
          "surname": "Surname",
          "age": "30"
        }
        //             ,  {
        //     "roomId": 1,
        //     "type": "CH",
        //     "name": "Second Adult Name",
        //     "surname": "Surname",
        //     "age":"8"
        // },
        //  {
        //     "roomId": 1,
        //     "type": "CH",
        //     "name": "Second Adult Name",
        //     "surname": "Surname",
        //     "age":"10"
        // }
      ]
    }
    console.log(data)
    const result = await dispatch(createPayment(data));
    if (result) {
      console.log("page", result);
    } else {
      console.log("Error Found")
    }
  }
  const addTraveler = () => {
    const newTraveler = " "
    setTravelers([...travelers, newTraveler]);
  };
  const removeTraveler = () => {
    const updatedTravelers = [...travelers];
    updatedTravelers.pop();
    setTravelers(updatedTravelers);
  }

  let shortMonthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let dataItem: any = localStorage.getItem("dataItem")
  dataItem = JSON.parse(dataItem)
  // console.log(dataItem)
  const month = new Date(dataItem && dataItem.checkIn).getMonth()
  const day = new Date(dataItem && dataItem.checkIn).getDate()
  const year = new Date(dataItem && dataItem.checkIn).getFullYear()

  const month1 = new Date(dataItem && dataItem.checkOut).getMonth()
  const day1 = new Date(dataItem && dataItem.checkOut).getDate()
  const year1 = new Date(dataItem && dataItem.checkOut).getFullYear()
  const getMonth = shortMonthNames[month];
  const getMonth1 = shortMonthNames[month1];

  function dateDifference(startDateStr: any, endDateStr: any) {
    let startDateParts = startDateStr && startDateStr.split('-');
    let endDateParts = endDateStr && endDateStr.split('-');

    let startDate: any = new Date(startDateStr && startDateParts[0], startDateStr && startDateParts[1] - 1, startDateStr && startDateParts[2]);
    let endDate: any = new Date(endDateStr && endDateParts[0], endDateStr && endDateParts[1] - 1, endDateStr && endDateParts[2]);

    let timeDifference = endDate - startDate;

    let millisecondsPerDay = 1000 * 60 * 60 * 24;
    let daysDifference = Math.floor(timeDifference / millisecondsPerDay);

    return daysDifference;
  }

  // Example usage
  let startDateStr = dataItem && dataItem.checkIn; // January 1, 2023
  let endDateStr = dataItem && dataItem.checkOut;  // August 31, 2023

  let difference = dateDifference(startDateStr, endDateStr);
  // console.log(difference)



  return (
    <div className='flex ' >
      <div>
        <div className='flex flex-col '  >
          <div className='flex gap-5 items-center ' >
            <div className='relative flex justify-center items-center '>
              <img className='h-[37.069px] w-[37.069px] ' src="/Group 1541.svg" alt="rate" />
              <p className='absolute md:text-[24px] text-lg font-bold text-white-5'>1</p>
            </div>
            <h1 className='text-black font-normal text-2xl  rozha-one' >Review your itinerary</h1>
          </div>
          <div className='pt-[39px] flex md:gap-[34px] gap-4 items-center  '>
            <div>
              <img src={`${process.env.NEXT_PUBLIC_IMG_API_KEY}${room && room.length > 0 && room[0] && room[0].Rooms && room[0].Rooms.length > 0 && room[0].Rooms[0] && room[0].Rooms[0].RoomImages && room[0].Rooms[0].RoomImages.length > 0 && room[0].Rooms[0].RoomImages[0] && room[0].Rooms[0].RoomImages[0].image}`} alt="" className='md:w-[425px] md:h-[197px] w-[186px] h-[103px] object-cover rounded-[16.396px] card' />
            </div>
            <div className='md:block flex flex-col justify-center md:flex-row'>
              <p className=' font-bold md:text-3xl   montserrat'>{room && room.length > 0 && room[0]?.HotelName}</p>
              <p className='text-[#9A9A9A] md:text-base text-xs montserrat'>{room && room.length > 0 && room[0]?.ZoneName}</p>
              <div className='flex gap-2 '>
                {Array.from({ length: rating }, (_, index) => index).map((e: any, index: number) => (
                  <AiFillStar key={index} style={{ color: '#FFC700', fontSize: '20px' }} />
                ))}
              </div>
              {/* <img src="star row.jpg" alt="" className=''/> */}
              <div className='flex md:gap-4 gap-2'>
                  <p>Latitude : {room && room.length > 0 && room[0]?.Latitude}</p>
                  <p>Longitude : {room && room.length > 0 && room[0]?.Longitude}</p>
              </div>
            </div>

          </div>
          <div className='mt-[25px] p-6 montserrat card'>
            <h2 className='md:text-xl font-bold'>{room && room.length > 0 && room[0]?.Rooms.length > 0 && room[0]?.Rooms[0]?.RoomName}</h2>
            <div className='flex justify-between items-center py-6 flex-wrap gap-5'>
              <div className='w-[113px] h-[64px] pt-2'>
                <span>Check-in</span>
                <p className='text-[16px] font-bold'>{day + " " + getMonth + " " + year}</p>
                {/* <span>Sat, 12:00 pm</span> */}
              </div>
              <div>
                <button className='w-[137px] h-[34px] rounded-[30px] bg-[#EFF0F2]' >{difference} days</button>
              </div>
              <div className='w-[113px] h-[64px] py-2'>
                <span>Check-out</span>
                <p className='text-[16px] font-bold'>{day1 + " " + getMonth1 + " " + year1}</p>
                {/* <span>Sun, 10:00 Am</span> */}
              </div>
              <div className='md:h-[73px] w-[1px]  bg-black-100'></div>
              <span className='text-[rgba(0, 0, 0, 0.55)] text-base'>Guest</span>
              <span className='text-[rgba(0, 0, 0, 0.55)] text-base'>{dataItem && dataItem.adults} adults</span>
            </div>
            <div className=''>
              <h2 className='text-xl font-bold  montserrat'>Inclusions</h2>
              <ul className="list-disc list-inside py-3">
                <li><i></i>&nbsp;&nbsp;{room && room.length > 0 && room[0] && room[0].Rooms && room[0].Rooms.length > 0 && room[0].Rooms[0] && room[0].Rooms[0].Rates && room[0].Rooms[0].Rates.length > 0 && room[0].Rooms[0].Rates[0] && room[0].Rooms[0].Rates[0].BoardName}</li>
              </ul>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()}>
          {/* card 2 */}
          <div className='px-[23px] py-[26px] card my-4'>
            <div className='flex gap-5 ' >
              <div className='relative flex justify-center items-center'>
                <img className='h-[37.069px] w-[37.069px] ' src="/Group 1541.svg" alt="rate" />
                <p className='absolute md:text-[24px] text-lg font-bold text-white-5'>2</p>
              </div>
              <h1 className='text-black font-normal text-2xl rozha-one' >Add contact details</h1>
            </div>
            <p className='
        mt-[7px] leading-relaxed text-sm max-w-[48rem]'>Reservation details will be sent to this email address and phone number</p>
            <div className='flex gap-1 md:flex-row flex-col'>
              <div className='flex md:w-[50%] w-[100%] justify-centre items-center gap-4'>
                {/* <select
              className="border border-gray-600 focus outline-none md:px-3 px-2 py-3 mb-3 mt-3 rounded shadow
              appearance-none leading-tight block w-[25%] text-lg"
            >
              {
                CountryPhoneData.map((item,i) => (
                  <option key={i}>{item.value} {item.label} </option>
                ))
              }
              
            </select> */}
                <Autocomplete
                  value={countryOption}
                  // onChange={(event,newVal) =>setLocationValue(newVal)}
                  options={CountryPhoneData}
                  // isOptionEqualToValue={isOptionEqualToValuefun}
                  getOptionLabel={(option) => ` ${option.value} ${option.label}`}
                  renderInput={(params) => <TextField {...params} label="Country" placeholder='Choose Country' required />}
                  className=' font-normal text-gray-200 text-xs md:text-base md:w-[25%]'
                  onChange={(e, value) => handleChange(e, value)}
                  
                />
                <input required type="number" name="phone" id="" placeholder='mobile number' className="border border-gray-600 focus outline-none px-3 py-3 mb-3 mt-3 rounded shadow
          appearance-none leading-tight block w-[100%] md:w-[50%]  text-lg"
                  onChange={(e) => setPhone(e.target.value)} />

              </div>

              <input required type="email" name="email" id="" placeholder='Email Address' className="border border-gray-300 focus outline-none px-3 py-3 mb-3 mt-3 rounded shadow
        appearance-none leading-tight block w-[100%] md:w-[50%] text-lg "
                onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          {/* card 3 */}

          <div className=' py-7 px-6 card my-4'>
            <div className='flex gap-5 ' >
              <div className='relative flex justify-center items-center'>
                <img className='h-[37.069px] w-[37.069px] ' src="/Group 1541.svg" alt="rate" />
                <p className='absolute md:text-[24px] text-lg font-bold text-white-5'>3</p>
              </div>
              <h1 className='text-black font-normal text-2xl  rozha-one' >Add traveller details</h1>
            </div>
            <p className='
        md:mt-[31px] mt-[10px] leading-relaxed text-xl max-w-[48rem]'>Room 1</p>
            {travelers && travelers.length > 0 && travelers.map((traveler, index) => (
              <>
                <div className='relative'>
                  <MdClose className='absolute right-2 top-2 cursor-pointer' onClick={removeTraveler} />
                  <p className='
        md:mt-[31px] mt-[10px] leading-relaxed text-xl max-w-[48rem]'>Traveler {index + 1}</p>
                  <div className='flex justify-between md:gap-7  mt-3 flex-wrap md:flex-nowrap'>
                    <input type="text" name="phone" id="" placeholder=' First name' required className="border border-gray-600 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block w-[100%] md:w-[30%]  text-lg"
                      onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="email" id="" placeholder='Middle' className="border border-gray-300 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block w-[100%] md:w-[30%] text-lg " />
                    <input type="text" name="email" id="" placeholder='Last name' className="border border-gray-300 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block w-[100%] md:w-[30%] text-lg "
                      onChange={(e) => setLastname(e.target.value)} />
                  </div>
                </div>
              </>
            ))}
            <p className='
        my-[20px] leading-relaxed text-xl max-w-[48rem]'>Enter GST Details (Optional)</p>
            <div className='flex justify-between gap-7 md:flex-nowrap flex-wrap '>
              <input type="text" name="phone" id="" placeholder='Enter Registation Number' className="border border-gray-600 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block  w-[100%] md:w-[30%]  text-lg" />
              <input type="text" name="email" id="" placeholder='Enter Company name' className="border border-gray-300 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block w-[100%] md:w-[30%]  text-lg " />
              <input type="text" name="email" id="" placeholder='Enter Company Address' className="border border-gray-300 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block w-[100%] md:w-[30%]  text-lg " />
              <div className='w-[100%] md:w-[30%] relative'>
                <select className='border border-gray-300 focus outline-none px-3 py-3 mb-3  rounded shadow
        appearance-none leading-tight block w-full  text-lg' name="year" id="year">
                  <option value="">Select</option>
                  <option value="">Adhar Card</option>
                  <option value="">Pan Card</option>
                  <option value="">Driving Licence</option>
                </select>
                <div className='absolute right-2 top-[11px] text-3xl'><RiArrowDropDownLine /></div>
              </div>
            </div>
            <hr className='h-[1px] bg-[#d5cfcf] border-none mt-2' />

            <p className='
        appearance-none leading-tight flex gap-[2px] items-center  md:text-lg text-xs  md:mt-8 mt-4 '>
              <span className='md:text-[28px] text-base text-[#45E203] rozha-one cursor-pointer' onClick={addTraveler}>
                + Add Traveller
              </span>
              (required for visa purposes)
            </p>
          </div>
          <div className=' py-7 px-6 card my-4'>
            <div className='flex gap-5 ' >
              <div className='relative flex justify-center items-center'>
                <img className='h-[37.069px] w-[37.069px] ' src="/Group 1541.svg" alt="rate" />
                <p className='absolute md:text-[24px] text-lg font-bold text-white-5'>4</p>
              </div>
              <h1 className='text-black font-normal text-2xl  rozha-one' >Payment</h1>
            </div>
            <br />
            <Payment
              formData={formData}
              formData1={formData1}
              formData2={formData2}
              setFormData={setFormData}
              setFormData1={setFormData1}
              setFormData2={setFormData2}
              giftCardRes={giftCardRes} setGiftCardRes={setGiftCardRes} pricePay={pricePay} setPricePay={setPricePay}
              name={name} email={email} phone={phone} countryCode={countryOption?.value} promoCode={promoCode} setPromoCode={setPromoCode}
            />
          </div>
          <div className='my-12 flex justify-center md:justify-start'>
            <button onClick={paymentHandler}
              // onClick={()=> router.push('/confirm')} 
              type="submit" className='md:w-60 w-full h-14 bg-green-1000 text-white-5 rounded-3xl'>Continue Payment</button>
          </div>
          </form>

        </div>

      </div>

    </div>
  )
}

export default BlockLeft