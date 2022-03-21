import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './city.slice'
import loadingReducer from'./loading.slice'
import todayReducer from './today.slice'
export default configureStore({
    reducer: {
        city: cityReducer,
        loading:loadingReducer,
        today:todayReducer
    },
});