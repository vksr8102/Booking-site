import axios from "axios";

class PaymentApi {
    async createPayment(data:any){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/PreBooking/GetBookingDetails`,data)
            console.log("response",response.data)
            if(response.status ===200){
                return response;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async DisplayCoupon<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_UTILITY_API_KEY}/UtilityAPI/DisplayCouponCode`,data)
            console.log("response",response.data)
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async ApplyCoupon<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_UTILITY_API_KEY}/UtilityAPI/ApplyCouponCode`,data)
            console.log("response",response.data)
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async ApplyGiftCard<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_UTILITY_API_KEY}/UtilityAPI/ApplyGiftCard`,data)
            console.log("response",response.data)
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async GetLoyaltyPoints<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_UTILITY_API_KEY}/UtilityAPI/GetLoyaltyPoints`,data)
            console.log("response",response.data)
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async GetCommentReviews<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_UTILITY_API_KEY}/UtilityAPI/GetCommentReviews`,data)
            console.log("response",response.data)
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }


    // Payment
    
    async PaymentWithCreditCard<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_PAYMENT_API_KEY}/PaymentWithCard`,data)
            console.log(response);
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
                }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async PaymentwithNetBanking<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_PAYMENT_API_KEY}/PaymentwithNetBanking`,data)
            console.log(response);
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
            }
            
        } catch (error) {
           console.log(error);
            
        }
    }
    async PaymentRequestwithUPI<T>(data:T){
        try {
            console.log(data)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_PAYMENT_API_KEY}/PaymentRequestwithUPI`,data)
            console.log(response);
            if(response.status ===200){
                return response.data;
            }
            else{
                return false
            }
            
        } catch (error) {
           console.log(error);
            
        }
    }

}

export const paymentApi = new PaymentApi();