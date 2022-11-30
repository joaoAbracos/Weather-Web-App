import React, { FC } from 'react';
import { useGetCoord } from './components/getLocation';
import { useWeather } from './components/getWeather';

const App: FC = () => {
  const coord = useGetCoord();
  const weather = useWeather(coord.lat, coord.long);
  console.log(weather);
  return (
    <div>
      {coord.status ?
        <h1 className="text-3xl font-bold underline text-red-600">
          Loading
        </h1> :
        <>
          <h1>{coord.lat.toString()}</h1>
          <h1>{coord.long.toString()}</h1>
        </>
      }
    </div>
  );
}

export default App;
