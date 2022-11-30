import { useState, useEffect } from 'react';

export type TApiResponse = {
    statusMsg: String;
    status: Number;
    lat: Number;
    long: Number;
};

export const useGetCoord = (): TApiResponse => {
    const [statusMsg, setStatusMsg] = useState<String>('');
    const [status, setStatus] = useState<Number>(0);
    const [lat, setLat] = useState<Number>(0);
    const [long, setLong] = useState<Number>(0);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatusMsg('Geolocation is not supported by your browser');
            setStatus(0);
        } else {
            setStatusMsg('Locating...');
            setStatus(1)
            navigator.geolocation.getCurrentPosition((position) => {
                setStatusMsg('');
                setStatus(0);
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            }, () => {
                setStatusMsg('Unable to retrieve your location');
                setStatus(0);
            });
        }
    }

    useEffect(() => {
        getLocation();
    }, []);

    return { status,statusMsg, lat, long };
};