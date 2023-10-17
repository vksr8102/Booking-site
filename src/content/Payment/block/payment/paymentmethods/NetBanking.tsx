import { PaymentwithNetBanking } from '@/src/redux/slices/payment';
import { useAppDispatch } from '@/src/redux/store/rootReducer';
import { RootState } from '@/src/redux/store/store';
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

interface props{
        pricePay:number | null; 
    setPricePay: (value: number | null)=>void
    name:string,
      phone:string,
      email:string,
      countryCode:string | undefined
}

function NetBanking({pricePay,setPricePay,name,email,phone,countryCode}:props) {
        const dispatch = useAppDispatch();
  const {room} = useSelector((state:RootState)=>state.room)
  const [htmlContent, setHtmlContent] = useState('');

        const [bank,setBank] = useState<string | null>(null);



const handleBankSelect = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setBank(e.target.value);
}
const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setBank(e.target.value);
}

const handlePay = async()=>{
        try {
                let data = {
                  "txnid": localStorage.getItem("enquiryKey"),
                  "amount": `${pricePay}`,
                  "firstname": name,
                  "email": email,
                  "phone": `${countryCode+phone}`,
                  "productinfo": "Hotel",
                  "pg": "TESTPG",
                  "bankcode": bank,
                  "surl": `${window.location.origin}/confirm`,
                  "furl": "https://apiplayground-response.herokuapp.com/",
                  "clientid": "0"
                }
                if(!data.bankcode || !data.phone || !data.email || !data.firstname){
                        toast.error("please fill all required filled!")
                        return;
                      }
                const res = await dispatch(PaymentwithNetBanking(data));
                if(res){
                  setHtmlContent(res)
                }
              } catch (error) {
                console.log(error);
              }
}

        return (
                <div>
                        <div>
                                <h3 className='md:text-2xl text-lg text-[#032C5C] font-bold'>Pay With Netbanking</h3>
                        </div>
                        <div className='md:w-[65%] w-full flex justify-between md:gap-3 gap-1 flex-wrap my-4'>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id="" onChange={handleBankSelect} value='statebank'  checked={bank==='statebank'} />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/statebank.png" alt="statebank" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id="" onChange={handleBankSelect} value='icici'  checked={bank==='icici'}  />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/icici.png" alt="icici" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id=""  onChange={handleBankSelect} value='Hdfc'  checked={bank==='Hdfc'}  />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/Hdfc.png" alt="Hdfc" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id="" onChange={handleBankSelect} value='Axis'  checked={bank==='Axis'} />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/Axis.png" alt="Axis" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id="" onChange={handleBankSelect} value='kotak'  checked={bank==='kotak'} />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/kotak.jpeg" alt="kotak" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id="" onChange={handleBankSelect} value='pnb'  checked={bank==='pnb'} />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/pnb.png" alt="pnb" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                                <div className='flex md:gap-2 gap-1 items-center '>
                                        <input type="radio" name="Test Wallet" id="" onChange={handleBankSelect} value='idbi'  checked={bank==='idbi'} />
                                        <div className='    border border-gray-300 flex items-center justify-center h-[55px] w-[90px] overflow-hidden '>
                                                <Image src="/img/idbi.png" alt="idbi" height={60} width={80} style={{ backgroundBlendMode: "darken", background: "cover" }} />
                                        </div>
                                </div>
                        </div>
                        <div className=' flex flex-col py-3 justify-center'>
                                <label htmlFor="number" className=' '>Other banks</label>
                                <select onChange={handleBankChange} className=' text-gray-300 focus:text-[#000]   border border-[#DADCE0] md:text-sm text-xs md:h-[40px] h-[30px] my-3 w-full '>
                                        <option defaultChecked value="">select</option>
                                        <option selected={bank==="boi"} value="boi">Bank of India (BOI)</option>
                                        <option selected={bank==="canara"} value="canara">Canara Bank</option>
                                        <option selected={bank==="bob"} value="bob">Bank of Baroda (BOB)</option>
                                        <option selected={bank==="indusind"} value="indusind">IndusInd Bank</option>
                                        <option selected={bank==="yes"} value="yes">Yes Bank</option>
                                        <option selected={bank==="uco"} value="uco">UCO Bank</option>
                                        <option selected={bank==="central"} value="central">Central Bank of India</option>
                                        <option selected={bank==="sib"} value="sib">South Indian Bank</option>
                                </select>
                        </div>
                        <div className='flex gap-5 items-center'>
                                <div>
                                        <h3 className='md:text-2xl text-sm font-bold'>₹24,479</h3>
                                </div>
                                <button disabled={(bank===null || bank==="")} onClick={handlePay} className='  md:h-[40px] h-[30px] w-[80px] bg-richblue-15 disabled:bg-black-50 disabled:cursor-not-allowed text-white-5 text-sm  hover:bg-richblue-5'>
                                        Pay Now
                                </button>
                        </div>
                        <div className=''>
                                <p className=' mt-6 md:text-sm text-xs text-[gray]  flex flex-wrap items-center '>By clicking on Pay Now ,you are agreeing our <span className='md:text-sm text-xs text-[blue]'>Terms&Condations,Privecy Policy and User Aggrement</span>  </p>
                        </div>
                </div>

        )
}

export default NetBanking