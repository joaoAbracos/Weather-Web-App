import { useState, useEffect } from 'react';
const URL = 'db0727b295912aa48259ff52927a00a6';
const DEFAULT_LAT = 38.73;
const DEFAULT_LONG = -9.14;
export type TApiResponseW = {
    data: Array<string>;
    status: Number;
    error: String;
};

export const useWeather = (lat: Number, long: Number): TApiResponseW => {
    const [status, setStatus] = useState<Number>(0);
    const [data, setData] = useState<Array<string>>([]);
    const [error, setError] = useState<String>('')
    const getLocation = async () => {
        setStatus(1);
        try {
            if(lat === 0 && long === 0){
                lat = DEFAULT_LAT;
                long = DEFAULT_LONG;
            }
            const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&exclude={part}&appid=${URL}`);
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setData(json);
        } catch (error:any) {
            setError(error);
        }
        setStatus(0);
    }

    useEffect(() => {
        getLocation();
    }, []);

    return { status, data, error };
};