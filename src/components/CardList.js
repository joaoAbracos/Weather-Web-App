import React from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../css/CardList.css'
import Card from './Card';
const CardList = () => {
    const city = useSelector((state) => state.city);
    return (
        <>
            {city.map((forecast) => (
                forecast.completed === true ?
                    forecast.data_forecast.daily.slice(1).map((uniforecast) => {
                        return (
                            <Col>
                                <Card data={uniforecast} />
                            </Col>
                        );
                    }) : ""
            ))}
        </>
    );
};

export default CardList;
