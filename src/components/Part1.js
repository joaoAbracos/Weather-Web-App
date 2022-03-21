import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { todayAsync } from '../redux/today.slice';
import Card from './Card';
import NavBar from './NavBar'


export default function Part1() {
  const today = useSelector((state) => state.today);
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      dispatch(todayAsync({
        lat: lat,
        lon: lon,
      }));

    }, async function errorCallback() {
      dispatch(todayAsync({
        lat: '39.74362',
        lon: '-8.80705',
      }));

    });
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Container fluid={true} style={{ padding: '1rem' }} >
        <Row style={{ padding: '1rem' }}>
          {today ? today.map((forecast) => (
            <Card data={forecast.data_today} />
          )) : ""}
        </Row>
        <Row>
          {today ? today.map((forecast) => (
            forecast.data_forecast.daily.slice(1).map((uniforecast) => {
              return (
                <Col>
                  <Card data={uniforecast} />
                </Col>
              );
            })
          )) : ""}
        </Row>
      </Container>

    </>
  )
}
