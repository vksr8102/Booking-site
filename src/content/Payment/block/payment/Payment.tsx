import React, { useState } from 'react'
import CreaditCard from './paymentmethods/CreaditCard'
import DebitCard from './paymentmethods/DebitCard'
import PrepaidCard from './paymentmethods/PrepaidCard'
import Upi from './paymentmethods/Upi'
import Wallet from './paymentmethods/Wallet'
import NetBanking from './paymentmethods/NetBanking'
import IntrestFreeEMI from './IntrestFreeEMI'
import GiftCard from './paymentmethods/GiftCard'

interface FormDataProps{
    formData:any,
   formData1:any,
        formData2:any,
        setFormData:any,
        setFormData1:any,
        setFormData2:any,
        giftCardRes:any;
      setGiftCardRes: (value:any)=> void
      pricePay:number | null; 
      setPricePay: (value: number | null)=>void
      name:string,
      phone:string,
      email:string,
      countryCode:string | undefined
      promoCode: any
  setPromoCode: (value: any) => void
}

function Payment({formData,formData1,formData2,setFormData,setFormData2,setFormData1,giftCardRes,setGiftCardRes,pricePay,setPricePay,name,email,phone,countryCode, promoCode, setPromoCode}:FormDataProps) {
    
    const [control,setControl] = React.useState(1)
  return (
    <div>
    <div className='flex md:gap-3 gap-1'>
        <div className='flex-[1]'>
{control===1 ?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer '  onClick={()=>setControl(1)}>
<p className='md:text-xl text-sm'  >CreditCard</p>
</div>: <div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer   '  onClick={()=>setControl(1)}>
<p className='md:text-xl text-sm' >CreditCard</p>
</div>}
{control===2 ?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer' onClick={()=>setControl(2)}>
<p className='md:text-xl text-sm'>DebitCard</p>
</div>: <div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  ' onClick={()=>setControl(2)}>
<p className='md:text-xl text-sm'>DebitCard</p>
</div>}

{control===3 ?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer' onClick={()=>setControl(3)}>
<p className='md:text-xl text-sm'>PrepaidCard</p>
</div>: <div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  ' onClick={()=>setControl(3)}>
<p className='md:text-xl text-sm'>PrepaidCard</p>
</div>}
{control===4 ?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer' onClick={()=>setControl(4)}>
<p className='md:text-xl text-sm'>Upi</p>
</div>: <div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  ' onClick={()=>setControl(4)}>
<p className='md:text-xl text-sm'>Upi</p>
</div>}
{control===5 ?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer' onClick={()=>setControl(5)}>
<p className='md:text-xl text-sm'>Wallet</p>
</div>: <div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  ' onClick={()=>setControl(5)}>
<p className='md:text-xl text-sm'>Wallet</p>
</div>}
{control===6 ?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer'onClick={()=>setControl(6)}>
<p className='md:text-xl text-sm'>NetBanking</p>
</div>: <div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  'onClick={()=>setControl(6)}>
<p className='md:text-xl text-sm'>NetBanking</p>
</div>}
{control===7?<div className='p-[20px_10px] bg-[#FFFFFF] border-l border-t border-gray-300 cursor-pointer' onClick={()=>setControl(7)}>
<p className='md:text-xl text-sm'>IntrestFreeEMI</p>
<span>Onslected bank</span>
</div>:<div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  ' onClick={()=>setControl(7)}>
<p className='md:text-xl text-sm'>IntrestFreeEMI</p>
<span className='md:text-xl text-xs'>Onslected bank</span>
</div>}
{control===8?<div className='p-[10px] bg-[#FFFFFF] border-l border-t border-b border-gray-300 cursor-pointer' onClick={()=>setControl(8)}>
<p className='md:text-xl text-sm'>GiftCard</p>
</div>:<div className='p-[20px_10px] bg-[#EEEEEE] border border-gray-300 cursor-pointer  ' onClick={()=>setControl(8)}>
<p className='md:text-xl text-sm'>GiftCard</p>
</div>}
        </div>
<div className='flex-[3] md:p-[10px_10px] p-[5px]'>
{control ===1 && <div >
<CreaditCard formData={formData}  setFormData={ setFormData} formData1={formData1}  setFormData1={ setFormData1} formData2={formData2}  setFormData2={ setFormData2} pricePay={pricePay} setPricePay={setPricePay} name={name} email={email} phone={phone} countryCode={countryCode}/>
</div>
}
{control ===2 && <div >
<DebitCard  formData={formData}  setFormData={ setFormData} formData1={formData1}  setFormData1={ setFormData1} formData2={formData2}  setFormData2={ setFormData2} pricePay={pricePay} setPricePay={setPricePay} name={name} email={email} phone={phone} countryCode={countryCode}/>
</div>
}
{control ===3 && <div >
<PrepaidCard  formData={formData}  setFormData={ setFormData} formData1={formData1}  setFormData1={ setFormData1} formData2={formData2}  setFormData2={ setFormData2} />
</div>
}
{control ===4 && <div >
<Upi pricePay={pricePay} setPricePay={setPricePay} name={name} email={email} phone={phone} countryCode={countryCode} />
</div>
}
{control ===5 && <div >
<Wallet />
</div>
}
{control ===6 && <div >
<NetBanking pricePay={pricePay} setPricePay={setPricePay} name={name} email={email} phone={phone} countryCode={countryCode}/>
</div>
}
{control ===7 && <div >
<IntrestFreeEMI />
</div>
}
{control ===8 && <div >
<GiftCard giftCardRes={giftCardRes} setGiftCardRes={setGiftCardRes} pricePay={pricePay} setPricePay={setPricePay} promoCode={promoCode} setPromoCode={setPromoCode} />
</div>
}
</div>

    </div>
   
    </div>
  )
}

export default Payment