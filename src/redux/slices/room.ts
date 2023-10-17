import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from "../store/store";
import { roomApi } from "@/src/mocks/room";


const initialState:any ={
    room:{}
}

const roomSlice =createSlice({
    name:"room",
    initialState ,
    reducers:{
        getHotelRoom(state,action){
            try {
            if(action.payload){
                state.room = action.payload
            } 
            } catch (error) {
            console.log(error);
                
            }
        }
    }

});
export const {reducer} = roomSlice;

export const getHotelRoom = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await roomApi.fetchHotelRoom(data); 
        if (result) {
            // console.log(result)
            await dispatch(roomSlice.actions.getHotelRoom(result));
            return result;
        }
        else{
            await dispatch(roomSlice.actions.getHotelRoom([]));
            return false
        }
    } catch (e) {
        console.log(e);
    }
}
