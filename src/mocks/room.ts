import axios from "axios";

class RoomApi{
    async fetchHotelRoom<T>(data:T){
        try{
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/Availability/CheckRates`,data)
            if(response.status === 200){
                console.log(response)
                return response.data;
            }else{
                return false;
            }
        }catch(error){
            console.log(error)
        }
    }
}

export  const roomApi = new RoomApi();

