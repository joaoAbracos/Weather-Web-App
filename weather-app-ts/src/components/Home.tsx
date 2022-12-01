import { FC } from "react";
import { useGetCoord } from "../hooks/getLocation";
import { useWeather } from "../hooks/getWeather";

const Home: FC = () => {
    const coord = useGetCoord();
    const weather = useWeather(coord.lat, coord.long);

    return (
        <>
            {console.log(weather)
            }
        </>
    );
}

export default Home;