import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit"; 
import {paymentApi} from "@/src/mocks/payment";
import { AppDispatch, RootState } from "../store/store";
 
const initialState: any = {
    payment: [],
    coupons: [],
};

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        createPayment(state,action){
            try{
                if(action.payload){
                    state.hotels = [...action.payload.data]
                }
            }catch(error){
                console.log(error);
            }
        },
        DisplayCoupon(state,action){
            try{
                if(action.payload){
                    state.coupons = [...action.payload.coupons]
                }
            }catch(error){
                console.log(error);
            }
        },
      
        
    },

});

export const { reducer } = paymentSlice;

export const createPayment = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.createPayment(data); 
        if (result) {
            await dispatch(paymentSlice.actions.createPayment(result));
        }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const DisplayCoupon = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.DisplayCoupon(data);
        if (result) {
            // await dispatch(paymentSlice.actions.DisplayCoupon(result));
        }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const ApplyCoupon = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.ApplyCoupon(data);
        if (result) {
            await dispatch(paymentSlice.actions.DisplayCoupon(result));
        }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const ApplyGiftCard = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.ApplyGiftCard(data);
        // if (result) {
        //     await dispatch(paymentSlice.actions.ApplyGiftCard(result));
        // }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const GetLoyaltyPoints = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.GetLoyaltyPoints(data); 
        // if (result) {
        // }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const GetCommentReviews = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.GetCommentReviews(data); 
        // if (result) {
        // }
        return result;
    } catch (e) {
        console.log(e);
    }
}

// Payment --->

export const PaymentWithCreditCard = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.PaymentWithCreditCard(data); 
        // if (result) {
        // }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const PaymentwithNetBanking = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.PaymentwithNetBanking(data); 
        // if (result) {
        // }
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const PaymentRequestwithUPI = <T>(data: T) => async (dispatch:AppDispatch) => {
    try {
        const result = await paymentApi.PaymentRequestwithUPI(data); 
        // if (result) {
        // }
        return result;
    } catch (e) {
        console.log(e);
    }
}
 

export default paymentSlice;
