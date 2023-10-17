import {reducer as hotelsReducer} from "../slices/hotels";
import{reducer as roomReducer} from "../slices/room"
import{reducer as paymentReducer} from "../slices/payment"
import {combineReducers} from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
   persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "root",
   version: 1,
   storage,
}

const rootReducer = combineReducers({
   hotels:hotelsReducer, 
   room:roomReducer,
   payment:paymentReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer)


type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector