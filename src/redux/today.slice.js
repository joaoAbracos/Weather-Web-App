import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const todayAsync = createAsyncThunk(
    'today/todayAsync', async (payload) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&appid=db0727b295912aa48259ff52927a00a6`);
        if (response.ok) {
            const data = await response.json();
            const cityName = data.name;
            const response_forecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lon}&exclude=hourly,minutely&appid=db0727b295912aa48259ff52927a00a6`);
            const forecast = await response_forecast.json();
            if (response.ok) {
                return { data, cityName, forecast };
            } else {
                const error = response.ok;
                return { error };
            }
        } else {
            const error = response.ok;
            return { error };
        }
    }
);
export const todaySlice = createSlice({
    name: "today",
    initialState: [],
    reducers: {},
    extraReducers: {
        [todayAsync.fulfilled]: (state, action) => {
            if (action.payload.error !== false) {
                const newCity = {
                    id: uuid(),
                    city: action.payload.cityName,
                    data_today: action.payload.data,
                    data_forecast: action.payload.forecast,
                }
                state.length = 0;
                state.push(newCity);
            }
        },

    }
})
export const { toggleLoading } = todaySlice.actions;

export default todaySlice.reducer;