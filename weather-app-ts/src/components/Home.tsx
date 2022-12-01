import { FC } from "react";
import { useGetCoord } from "../hooks/getLocation";
import { useWeather } from "../hooks/getWeather";
import Card from "./Card";

const Home: FC = () => {
    const coord = useGetCoord();
    const weather = useWeather(coord.lat, coord.long);
    // QUERO REnderizar as informacoes que vem da API num Card

    // QUERO ACEDER AS PROPRIEDADES QUE VEEM DO USEwEATHER

    // ENVIAR PARA A <CARD component ou o objecto todo e depois aceder la
    
    // OU PREPARAR AQUI A data e enviar ja os valores que depois ele tem acesso na child
    console.log(weather.data.name);

    return (
        <>
            <Card name={weather.data}  />
        </>
    );
}

export default Home;