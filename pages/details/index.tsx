import Block1 from '../../src/content/details/Block1'
import Block2 from '../../src/content/details/Block2'
import Block3 from '../../src/content/details/Block3'
import React, { useEffect, useState } from 'react'
import Block4 from '../../src/content/details/Block4'
import Block5 from '../../src/content/details/Block5'
import Block6 from '../../src/content/details/Block6'
import Block7 from '../../src/content/details/Block7'
import { getHotelRoom } from '@/src/redux/slices/room'
import { useAppDispatch } from '@/src/redux/store/rootReducer'
import { useSearchParams } from 'next/navigation'
import { Backdrop, CircularProgress } from '@mui/material'
import { GetCommentReviews } from '@/src/redux/slices/payment'


const Details = () => {
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams();
  const [open,setOpen] = useState<Boolean>(false)

  const [openDrop, setOpenDrop] = React.useState(false);
  const [review,setReview]=useState([]);

  const data = {
    EnquiryNo:localStorage.getItem("enquiryKey"),
     RateKey: searchParams.get("rateKey")
  }

  

  const fetchData = async()=>{
    try {
      setOpenDrop(true)
    const result = await dispatch(getHotelRoom(data))
    if(result){
      let data2 = {
        "Product": "HOTEL",
        "Vendorname": `${result && result.length>0 && result[0].HotelName}`,
        "VendorID": `${result && result.length>0 && result[0].HotelCode}`
    }
    const res = await dispatch(GetCommentReviews(data2));
    setOpenDrop(false)
                if(res){
                    setReview(res && res.CommentsAndReviews)
                }
    }else
      setOpenDrop(false)
    } catch (error) {
      setOpenDrop(false)
      console.log(error);
    }
    
    }

useEffect(()=>{
fetchData();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchParams.get("rateKey")])


  return (
    <div >
    
      <Block1/>
      <Block2 setOpen={setOpen} open ={open} />   
      <Block3/>
      <Block4/>
      <Block5 review={review} setReview={setReview}/>
      <Block6/>
      <Block7 setOpen={setOpen} open ={open}  />

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
 
    </div>
  )
}

export default Details
