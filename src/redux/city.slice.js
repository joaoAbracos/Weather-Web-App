import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
const { getName } = require('country-list');
const API_KEY = ''

export const addAsync = createAsyncThunk(
    'city/addAsync', async (payload) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=${API_KEY}`);
        if (response.ok) {
            const data = await response.json();
            const cityname = data.name;
            const coord = data.coord;
            const country = data.sys.country;
            const countryFull = getName(country);
            const response_forecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly&appid=${API_KEY}`);
            const forecast = await response_forecast.json();
            if (response.ok) {
                return { data, cityname, forecast, countryFull };
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



const Slice = createSlice({
    name: "city",
    initialState: [],
    reducers: {
        toggleComplete: (state, action) => {
            state.map((e) => {
                e.completed = !action.payload.id;
            })
            const index = state.findIndex(
                (val) => val.id === action.payload.id
            )
            state[index].completed = !action.payload.completed;
        },
        deleteCity: (state, action) => {
            return state.filter((val) => val.id !== action.payload.id);
        }
    },
    extraReducers: {
        [addAsync.fulfilled]: (state, action) => {
            if (action.payload.error !== false) {
                const newCity = {
                    id: uuid(),
                    city: action.payload.cityname,
                    country: action.payload.countryFull,
                    completed: false,
                    data: action.payload.data,
                    data_forecast: action.payload.forecast,
                }
                state.push(newCity);
            }
        },
    },
});


export const { toggleComplete, deleteCity } = Slice.actions;

export default Slice.reducer