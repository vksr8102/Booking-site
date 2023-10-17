import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit"; 
import { hotelApi } from "@/src/mocks/hotels";
import { AppDispatch, RootState } from "../store/store";
 
const initialState: any = {
    hotels: [],
    resultFilters:[]
};

const hotelSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        getHotel(state,action){
            try{
                if(action.payload){
                    state.hotels = [action.payload.data]
                }
            }catch(error){
                console.log(error);
            }
        },
        fetchHotel(state,action){
            try{
                if(action.payload){
                    state.hotels = [...action.payload.Hotels]
                    state.resultFilters = [...action.payload.ResultFilters]
                }
            }catch(error){
                console.log(error);
            }
        },
        
    },

});

export const { reducer } = hotelSlice;

export const getHotel = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
         
        const result = await hotelApi.getHotel("ACE28DA390"); 
        
        if (result) {
            // await dispatch(hotelSlice.actions.getHotel(result));
            return result;
        }
    } catch (e) {
        console.log(e);
    }
}

export const fetchHotel = <T>(id: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await hotelApi.fetchHotel(id); 
        if (result) {
            console.log(result)
            await dispatch(hotelSlice.actions.fetchHotel(result));
            return result;
        }
    } catch (e) {
        console.log(e);
    }
}
 

export default hotelSlice;
